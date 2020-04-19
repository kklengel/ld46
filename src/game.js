import InputHandler from "/src/input.js";
import { levels } from "/src/levels/levels.js";

import Player from "/src/player.js";
import Vip from "/src/vip.js";
//import Spawner from "/src/spawner.js";
import Bullet from "/src/bullet.js";

const GAMESTATES = {
  MENU: 0,
  RUNNING: 1
};

export default class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    //load level data
    this.levels = levels;
    this.levelIndex = 0;
    this.curLevel = this.levels[0];
    this.input = new InputHandler(this);

    this.state = GAMESTATES.MENU;
    //this.init();
  }

  init() {
    //Drop all existing game objects
    this.gameObjects = [];

    this.player = null;
    this.vip = null;

    this.player = new Player(this, "player 1");
    this.vip = new Vip(this);

    this.curLevel = this.levels[this.levelIndex];

    this.player.init(this.curLevel.player);
    this.vip.init();
    this.vip.loadLevelConfig(this.curLevel.vip);

    this.gameObjects.push(this.player);
    this.gameObjects.push(this.vip);

    this.initLevel(this.curLevel);
  }

  initLevel(level) {
    //spawn all bullets
    let spawnedBullets = [];

    this.curLevel.bullets.forEach(bltConfig => {
      let bullet = new Bullet(this, bltConfig);
      spawnedBullets.push(bullet);
    });

    //Default win cond is to collect all bullets
    this.winCondition = function() {
      spawnedBullets = spawnedBullets.filter(blt => !blt.markedForDeletion);
      return spawnedBullets.length === 0;
    };

    //Default lose cond is player or vip death
    this.loseCondition = function() {
      return this.player.health.cur <= 0 || this.vip.health.cur <= 0;
    };

    //disable win condition on last level
    if (this.levelIndex === 10) {
      this.winCondition = function() {
        return false;
      };
    }

    this.spawnedBullets = spawnedBullets;
    this.gameObjects.push(...spawnedBullets);

    this.start();
  }

  start() {
    this.passedLevelTime = 0;
    this.state = GAMESTATES.RUNNING;
  }

  onNextLevelPressed() {
    this.nextLevel();
  }

  onSpacePressed() {
    console.debug("space pressed!");
    switch (this.state) {
      case GAMESTATES.MENU:
        this.init();
        break;
      case GAMESTATES.RUNNING:
        this.player.changeType();
        break;
      default:
      //
    }
  }

  nextLevel() {
    this.gameObjects.forEach(obj => {
      obj.markedForDeletion = true;
    });

    this.gameObjects = this.gameObjects.filter(
      object => !object.markedForDeletion
    );

    this.state = GAMESTATES.MENU;
    if (this.levelIndex + 1 > this.levels.length - 1) {
      this.levelIndex = -1;
    }
    this.levelIndex++;
    this.curLevel = this.levels[this.levelIndex];
  }

  lose() {
    this.state = GAMESTATES.MENU;
    this.gameObjects.forEach(obj => {
      obj.markedForDeletion = true;
    });

    this.gameObjects = this.gameObjects.filter(
      object => !object.markedForDeletion
    );
  }

  spawnRandomBullet(passedLevelTime) {

    let repeats = 1;

    if(passedLevelTime > 10000){
      repeats = 2;
    }
    if(passedLevelTime > 20000){
      repeats = 3;
    }
    if(passedLevelTime > 30000){
      repeats = 4;
    }
    if(passedLevelTime > 40000){
      repeats = 5;
    }
    if(passedLevelTime > 50000){
      repeats = 6;
    }
    if(passedLevelTime > 60000){
      repeats = 7;
    }
    if(passedLevelTime > 70000){
      repeats = 8;
    }
    if(passedLevelTime > 80000){
      repeats = 9;
    }
    if(passedLevelTime > 90000){
      repeats = 10;
    }
    if(passedLevelTime > 100000){
      repeats = 11;
    }

    for(let i = 0; i < repeats; i++){
    if (Math.floor(passedLevelTime) % 1000 === 0) {
      let bulletType = "";
      let rand1 = this.getRandomInt(0,2);
      switch (rand1) {
        case 0:
          bulletType = "rect";
          break;
        default:
          bulletType = "circle";
      }

      let randomX = this.getRandomInt(0,800);
      let randomY = this.getRandomInt(0,600);

      let randomXDir = this.getRandomInt(-2,2);
      let randomYDir = this.getRandomInt(-2,2);

      let randomBullet = new Bullet(this, {
        type: bulletType,
        position: { x: randomX, y: randomY },
        direction: {
          x: randomXDir,
          y: randomYDir,
        }
      });
      this.gameObjects.push(randomBullet);
    }
  }
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    let num = Math.floor(Math.random() * (max - min)) + min;
    return num;
  }

  update(deltaTime) {
    //do not update the game if it is not running
    if (this.state === GAMESTATES.MENU) {
      return;
    }

    this.passedLevelTime += deltaTime;

    //check lose condition
    if (this.loseCondition()) {
      console.debug("player or vip died!");
      this.lose();
      return;
    }

    //check win condition
    if (this.winCondition()) {
      this.nextLevel();
    }

    if(this.levelIndex === 10){
    this.spawnRandomBullet(this.passedLevelTime);
    }
    this.gameObjects.forEach(gameObj => {
      gameObj.update(deltaTime);
    });

    this.gameObjects = this.gameObjects.filter(
      object => !object.markedForDeletion
    );

    if (this.gameObjects.length > 100) {
      console.warn(
        "Too many game objects on screen! amount: ",
        this.gameObjects.length
      );
    }
  }

  draw(ctx) {
    switch (this.state) {
      case GAMESTATES.MENU:
        this.drawMenu(ctx);
        break;
      case GAMESTATES.RUNNING:
        this.drawRunning(ctx);
        break;
      default:
      //
    }
  }

  drawRunning(ctx) {
    this.gameObjects.forEach(gameObj => {
      gameObj.draw(ctx);
    });
  }

  drawMenu(ctx) {
    ctx.rect(0, 0, this.width, this.height);
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.fill();

    ctx.font = "30px arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";

    let levelText = this.curLevel.name;
    ctx.fillText(levelText, this.width / 2, this.height / 2 - 200);

    let levelDesc = this.curLevel.description;
    ctx.fillText(levelDesc, this.width / 2, this.height / 2 - 150);

    let levelHint = this.curLevel.hint;
    ctx.fillText(levelHint, this.width / 2, this.height / 2 - 100);

    ctx.fillText("PRESS SPACE TO START", this.width / 2, this.height / 2 + 100);
  }
}
