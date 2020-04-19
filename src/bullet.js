import { detectCollision } from "/src/collisionDetection.js";

export const bulletTypes = {
  0: {
    shape: "rect"
  },
  1: {
    shape: "circle"
  }
};

export default class Bullet {
  constructor(game, bulletConfig) {
    this.game = game;
    this.color = "black";
    this.type = bulletConfig.type;
    this.position = bulletConfig.position;
    this.size = 10;

    this.speed = 1;
    this.power = 1;
    this.direction = bulletConfig.direction;

    //this.sound = new Audio("../assets/sfx/collect.wav");
  }

  update(deltaTime) {
    if (detectCollision(this.game.player, this)) {
      console.debug("bullet hit player");
      this.game.player.hit(this);
      // this.sound.play();
      this.markedForDeletion = true;
      return;
    }

    if (detectCollision(this.game.vip, this)) {
      console.debug("bullet hit vip");
      this.game.vip.hit(this);
      this.markedForDeletion = true;
      return;
    }

    this.position.x += this.speed * this.direction.x;
    this.position.y += this.speed * this.direction.y;

    if (
      this.position.x > this.game.width ||
      this.position.x < 0 ||
      this.position.y < 0 ||
      this.position.y > this.game.height
    ) {
      console.debug("bullet left screen");
      this.markedForDeletion = true;
    }
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    if (this.type === "circle") {
      ctx.beginPath();
      ctx.arc(
        this.position.x - this.size / 2,
        this.position.y - this.size / 2,
        this.size,
        0,
        2 * Math.PI,
        false
      );
      ctx.fill();
    }
    if (this.type === "rect") {
      ctx.fillRect(
        this.position.x - this.size / 2,
        this.position.y - this.size / 2,
        this.size,
        this.size
      );
    }
  }
}
