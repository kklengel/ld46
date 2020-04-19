export const level7 = {
  name: "level 7",
  description: "defend! easy vibez.",
  hint: "",
  player: {
    type: "rect",
    position: {
      x: 50,
      y: 50
    },
    health: {
      cur: 4,
      max: 4
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
      cur: 4,
      max: 4
    }
  },
  bullets: [
    {
      type: "circle",
      delay: 1,
      repeat: 1,
      position: { x: 400, y: 0 },
      direction: {
        x: 0,
        y: 1
      }
    },
    {
      type: "circle",
      delay: 2,
      repeat: 1,
      position: { x: 800, y: 300 },
      direction: {
        x: -1,
        y: 0
      }
    },
    {
      type: "circle",
      delay: 3,
      repeat: 1,
      position: { x: 400, y: 600 },
      direction: {
        x: 0,
        y: -1
      }
    },
    {
      type: "circle",
      delay: 4,
      repeat: 1,
      position: { x: 0, y: 300 },
      direction: {
        x: 1,
        y: 0
      }
    }
  ]
};
