import Bullet from "/src/bullet.js";

export default class Spawner {
  constructor(game, config) {
    this.game = game;
    this.delayMilliSeconds = config.delaySeconds * 1000;
    this.position = config.position;
    this.direction = config.direction;
    this.type = config.type;
  }

  spawnBullet(type) {
    let spawnedBullets = [];

    let bullet = new Bullet(
      this.game,
      type,
      this.position.x,
      this.position.y,
      this.direction.x,
      this.direction.y
    );
    spawnedBullets.push(bullet);

    this.game.gameObjects.push(...spawnedBullets);
  }

  start() {
    this.spawner = setInterval(
      function(self) {
        self.spawnBullet(self.type);
      },
      this.delayMilliSeconds, // the interval of spawning bullets
      this // this spawner
    );
  }

  stop() {
    clearInterval(this.spawner);
    console.debug("stopped spawning");
  }
}
