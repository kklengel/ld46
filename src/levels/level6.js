export const level6 = {
  name: "level 6",
  description: "save vip!",
  hint: "",
  player: {
    type: "rect",
    position: {
      x: 50,
      y: 50
    },
    health: {
      cur: 2,
      max: 2
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
      cur: 1,
      max: 1
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
    },
    {
      type: "circle",
      delay: 0,
      repeat: 1,
      position: { x: 800, y: 300 },
      direction: {
        x: -1,
        y: 0
      }
    }
  ]
};
