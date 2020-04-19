export default class Player {
  constructor(game, name) {
    this.game = game;
    this.playerName = name;
  }

  init(configuration) {
    console.debug("initializing player");
    this.size = configuration.size;

    this.color = "black";

    this.health = {
      cur: configuration.health.cur,
      max: configuration.health.max
    };
    this.type = configuration.type;
    //if a start Position is not given, player is centered at the screen

    this.position = {
      x: 150,
      y: 300
    };

    this.maxSpeed = 5;

    this.speed = {
      x: 0,
      y: 0
    };
  }

  moveLeft() {
    this.speed.x = -this.maxSpeed;
  }

  moveRight() {
    this.speed.x = this.maxSpeed;
  }

  moveUp() {
    this.speed.y = -this.maxSpeed;
  }

  moveDown() {
    this.speed.y = this.maxSpeed;
  }

  stopMoveLeft() {
    this.speed.x = 0;
  }

  stopMoveRight() {
    this.speed.x = 0;
  }

  stopMoveUp() {
    this.speed.y = 0;
  }

  stopMoveDown() {
    this.speed.y = 0;
  }

  hit(collider) {
    if (collider.type === this.type) {
      console.debug("hit same");
      if (this.health.cur < this.health.max) {
        this.health.cur++;
      }
    } else {
      console.debug("hit other");
      this.health.cur--;
    }
  }

  update(deltaTime) {
    //left collision check
    this.updateHorizontal(deltaTime);
    this.updateVertical(deltaTime);
  }

  updateHorizontal(deltaTime) {
    let nextXPos = this.position.x + this.speed.x;

    if (
      nextXPos - this.size / 2 < 0 ||
      nextXPos + this.size / 2 > this.game.width
    ) {
      return;
    }
    this.position.x = nextXPos;
  }
  updateVertical(deltaTime) {
    let nextYPos = this.position.y + this.speed.y;

    if (
      nextYPos - this.size / 2 < 0 ||
      nextYPos + this.size / 2 > this.game.height
    ) {
      return;
    }

    this.position.y = nextYPos;
  }

  changeType() {
    if (this.type === "circle") {
      this.type = "rect";
    } else {
      this.type = "circle";
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
          this.position.x,
          this.position.y,
          this.size / 2,
          0,
          2 * Math.PI,
          false
        );
        ctx.fill();
        break;

      default:
      //dont draw
    }

    let hpBarOffset = 50;
    ctx.fillText(
      "your HP: " + this.health.cur + "/" + this.health.max,
      this.position.x,
      this.position.y - hpBarOffset
    );
  }
}
