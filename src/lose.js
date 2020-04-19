export default class Lose {
  constructor(game) {
    this.game = game;
    // this.sound = new Audio("../assets/sfx/die.wav");
  }

  onEnterState() {
    //  this.sound.play();
    this.game.player.health.cur = this.game.player.health.max;
  }

  onSpacePressed() {
    this.game.setState(this.game.getRunningState());
  }

  update(deltaTime) {}

  draw(ctx) {
    ctx.rect(0, 0, this.game.width, this.game.height);
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.fill();

    ctx.font = "30px arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(
      "YOU LOSE, PRESS SPACE TO PLAY AGAIN",
      this.game.width / 2,
      this.game.height / 2
    );
  }
}
