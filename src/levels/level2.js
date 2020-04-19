export const level2 = {
  name: "level 2",
  description: "Collecting foreign shape hurts",
  hint: "sometimes its the only way to protect the VIP",
  player: {
    type: "rect",
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
      cur: 2,
      max: 2
    }
  },
  bullets: [
    {
      type: "circle",
      delay: 0,
      repeat: 1,
      position: { x: 400, y: 200 },
      direction: {
        x: 0,
        y: 0
      }
    },
    {
      type: "circle",
      delay: 0,
      repeat: 1,
      position: { x: 600, y: 300 },
      direction: {
        x: 0,
        y: 0
      }
    },
    {
      type: "circle",
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
