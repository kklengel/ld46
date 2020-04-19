export const level5 = {
  name: "level 5",
  description: "let VIP collect same shape to heal",
  hint: "VIP loves same shapes",
  player: {
    type: "circle",
    position: {
      x: 50,
      y: 50
    },
    health: {
      cur: 20,
      max: 20
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
      cur: 19,
      max: 20
    }
  },
  bullets: [
    {
      type: "rect",
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
