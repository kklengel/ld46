export default class Vip {
  constructor(game) {
    this.game = game;
  }

  init() {
    this.position = null;
    this.health = null;
  }

  loadLevelConfig(configuration) {
    console.debug("initializing vip");
    this.position = configuration.position;
    this.size = configuration.size;
    this.color = "green";

    this.type = configuration.type;

    this.health = configuration.health;

    //optional stuff to make it harder
    this.isBleeding = configuration.isBleeding;
    this.speed = configuration.speed;
  }

  hit(collider) {
    if (collider.type === this.type) {
      console.debug("hit same");
      if (this.health.cur < this.health.max) {
        this.health.cur += collider.power;
      }
    } else {
      console.debug("hit other");
      this.health.cur -= collider.power;
    }
  }

  update(deltaTime) {
    if (this.speed) {
      this.position.x += this.speed.x;
      this.position.y += this.speed.y;

      if (this.position.x > 500 || this.position.x < 200) {
        this.speed.x *= -1;
      }
    }

    if (this.isBleeding) {
      if (this.health.cur > 0) {
        this.health.cur--;
      }
    }
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    switch (this.type) {
      case "rect":
        ctx.fillRect(
          this.position.x - this.size / 2,
          this.position.y - this.size / 2,
          this.size,
          this.size
        );
        break;
      case "circle":
        ctx.beginPath();
        ctx.arc(
          this.position.x - this.size / 2,
          this.position.y - this.size / 2,
          this.size / 2,
          0,
          2 * Math.PI,
          false
        );

        ctx.fill();
        break;
      default:
      //none
    }

    ctx.fillText(
      "VIP HP: " + this.health.cur + "/" + this.health.max,
      this.position.x,
      this.position.y - this.size
    );
  }
}
