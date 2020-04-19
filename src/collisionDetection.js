export function detectCollision(other, self) {
  /*
rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.y + rect1.height > rect2.y
*/

  let collidesLeft =
    other.position.x - other.size / 2 < self.position.x + self.size;
  let collidesRight =
    other.position.x + other.size / 2 > self.position.x - self.size / 2;

  let collidesBottom =
    other.position.y + other.size / 2 > self.position.y - self.size / 2;

  let collidesTop =
    other.position.y - other.size / 2 < self.position.y + self.size / 2;
  if (collidesLeft && collidesRight && collidesBottom && collidesTop) {
    return true;
  }

  /*  let bottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;

  let topOfGameObject = gameObject.position.y;
  let leftSideOfGameObject = gameObject.position.x;
  let rightSideOfGameObject = gameObject.position.x + gameObject.width;
  let bottomOfGameObject = gameObject.position.y + gameObject.height;

  if (
    bottomOfBall >= topOfGameObject &&
    topOfBall <= bottomOfGameObject &&
    ball.position.x >= leftSideOfGameObject &&
    ball.position.x + ball.size <= rightSideOfGameObject
  ) {
    return true;
  }

  return false; */
  return false;
}
