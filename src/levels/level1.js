export const level1 = {
  name: "level 1",
  description: "Collect same shape to heal",
  hint: "MOVE with WASD or ARROW KEYS",
  player: {
    type: "rect",
    position: {
      x: 50,
      y: 50
    },
    health: {
      cur: 2,
      max: 5
    },
    size: 25
  },
  vip: {
    type: "rect",
    position: {
      x: 400,
      y: 300
    },
    size: 50,
    health: {
      cur: 3,
      max: 3
    }
  },
  bullets: [
    {
      type: "rect",
      delay: 0,
      repeat: 1,
      position: { x: 400, y: 200 },
      direction: {
        x: 0,
        y: 0
      }
    },
    {
      type: "rect",
      delay: 0,
      repeat: 1,
      position: { x: 600, y: 300 },
      direction: {
        x: 0,
        y: 0
      }
    },
    {
      type: "rect",
      delay: 0,
      repeat: 1,
      position: { x: 400, y: 400 },
      direction: {
        x: 0,
        y: 0
      }
    }
  ]
};
