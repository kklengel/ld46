export const level4 = {
  name: "level 4",
  description: "Let vip collect foreign shape to get hurt.",
  hint: "You can't take them all ! Let some through.",
  player: {
    type: "rect",
    position: {
      x: 50,
      y: 50
    },
    health: {
      cur: 1,
      max: 1
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
      cur: 2,
      max: 3
    }
  },
  bullets: [
    {
      type: "circle",
      delay: 0,
      repeat: 1,
      position: { x: 400, y: 10 },
      direction: {
        x: 0,
        y: 1
      }
    }
  ]
};
