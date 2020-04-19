export const level10 = {
  name: "level 10",
  description: "too many bullets",
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
    size: 150,
    health: {
      cur: 2,
      max: 2
    }
  },
  bullets: [
    {
      type: "circle",
      delay: 1,
      repeat: 5,
      position: { x: 0, y: 0 },
      direction: {
        x: 0.5,
        y: 0.5
      }
    },
    {
      type: "circle",
      delay: 1,
      repeat: 5,
      position: { x: 200, y: 0 },
      direction: {
        x: 1.5,
        y: 0.5
      }
    },
    {
      type: "rect",
      delay: 2,
      repeat: 5,
      position: { x: 800, y: 0 },
      direction: {
        x: -0.5,
        y: 0.5
      }
    },
    {
      type: "circle",
      delay: 1,
      repeat: 5,
      position: { x: 600, y: 0 },
      direction: {
        x: 1.5,
        y: 2.5
      }
    },
    {
      type: "circle",
      delay: 3,
      repeat: 5,
      position: { x: 800, y: 600 },
      direction: {
        x: -0.5,
        y: -0.5
      }
    },
    {
      type: "rect",
      delay: 4,
      repeat: 5,
      position: { x: 0, y: 600 },
      direction: {
        x: 0.5,
        y: -0.5
      }
    }
  ]
};
