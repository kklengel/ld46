export default class Menu {
  constructor(game) {
    this.game = game;
  }

  onEnterState(won) {
    if (won) {
      //if the player finished the last level, restart at first level
      this.game.levelIndex++;
      if (this.game.levelIndex > this.game.levels.length - 1) {
        console.log("max level reached, resetting to beginning");
        this.game.levelIndex = 0;
      }
    }

    this.game.curLevel = this.game.levels[this.game.levelIndex];
    this.game.state = this.game.menu;
  }

  onNextLevelPressed() {
    console.debug("no action on p pressed");
  }

  onSpacePressed() {
    this.game.setState(this.game.running, {
      nextLevel: this.game.curLevel
    });
  }

  update(deltaTime) {}

  draw(ctx) {
    ctx.rect(0, 0, this.game.width, this.game.height);
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.fill();

    ctx.font = "30px arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";

    let levelText = this.game.curLevel.name;
    ctx.fillText(levelText, this.game.width / 2, this.game.height / 2 - 200);

    let levelDesc = this.game.curLevel.description;
    ctx.fillText(levelDesc, this.game.width / 2, this.game.height / 2 - 150);

    let levelHint = this.game.curLevel.hint;
    ctx.fillText(levelHint, this.game.width / 2, this.game.height / 2 - 100);

    ctx.fillText(
      "PRESS SPACE TO START",
      this.game.width / 2,
      this.game.height / 2 + 100
    );
  }
}
