export default class InputHandler {
  constructor(game) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
        case 65:
          game.player.moveLeft();
          break;
        case 39:
        case 68:
          game.player.moveRight();
          break;

        case 38:
        case 87:
          game.player.moveUp();
          break;
        case 40:
        case 83:
          game.player.moveDown();
          break;
        case 32:
          game.onSpacePressed();
          break;
        case 80: //p
          game.onNextLevelPressed();
          break;
        default:
          console.log(event.keyCode);
      }
    });

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
        case 65:
          game.player.stopMoveLeft();
          break;
        case 39:
        case 68:
          game.player.stopMoveRight();
          break;
        case 38:
        case 87:
          game.player.stopMoveUp();
          break;
        case 40:
        case 83:
          game.player.stopMoveDown();
          break;
        default:
        //
      }
    });
  }
}
