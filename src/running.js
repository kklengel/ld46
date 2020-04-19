import Player from "/src/player.js";
import Vip from "/src/vip.js";
//import Spawner from "/src/spawner.js";
import Bullet from "/src/bullet.js";

export default class Running {
  constructor(game) {
    this.game = game;
    this.game.player = new Player(this.game, "player 1");
    this.game.vip = new Vip(this.game);
  }

  onEnterState(won) {
    this.initialized = false;
    console.debug("initializing level");
    this.game.gameObjects = [];
    this.game.player.init(this.game.curLevel.player);
    this.game.vip.init(this.game.curLevel.vip);

    this.game.gameObjects.push(this.game.player);
    this.game.gameObjects.push(this.game.vip);

    this.init(this.game.curLevel);

    this.initialized = true;
    this.game.state = this.game.running;
  }

  init(level) {
    //spawn all bullets
    let spawnedBullets = [];

    this.game.curLevel.bullets.forEach(bltConfig => {
      let bullet = new Bullet(this.game, bltConfig);
      spawnedBullets.push(bullet);
      for (let i = 0; i < bltConfig.repeat; i++) {
        setTimeout(() => {
          this.game.gameObjects.push(bullet);
        }, bltConfig.delay * 1000 * (i + 1));
      }
    });

    //Default win cond is to collect all bullets
    this.winCondition = function() {
      spawnedBullets = spawnedBullets.filter(blt => !blt.markedForDeletion);
      return spawnedBullets.length === 0;
    };
  }

  onNextLevelPressed() {
    this.stopSpawners();
    this.game.setState(this.game.menu);
  }

  onSpacePressed() {
    this.game.player.changeType();
  }

  stopSpawners() {
    if (this.spawners) {
      this.spawners.stop();
    }
  }

  update(deltaTime) {
    // check lose condition

    if (!this.initialized) {
      return;
    }
    if (this.game.player.health.cur <= 0 || this.game.vip.health.cur <= 0) {
      console.debug("player or vip died!");
      this.stopSpawners();
      this.game.setState(this.game.menu, false);
      return;
    }

    //check win condition
    if (this.winCondition !== null && this.winCondition()) {
      this.onNextLevelPressed();
    }

    this.game.gameObjects.forEach(gameObj => {
      gameObj.update(deltaTime);
    });

    this.game.gameObjects = this.game.gameObjects.filter(
      object => !object.markedForDeletion
    );

    if (this.game.gameObjects.length > 100) {
      console.warn(
        "Too many game objects on screen! amount: ",
        this.game.gameObjects.length
      );
    }
  }

  draw(ctx) {
    this.game.gameObjects.forEach(gameObj => {
      gameObj.draw(ctx);
    });
  }
}
