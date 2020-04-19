export const level9 = {
  name: "level 9",
  description: "MORE!",
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
        x: 1.5,
        y: 1.5
      }
    },
    {
      type: "rect",
      delay: 2,
      repeat: 5,
      position: { x: 800, y: 0 },
      direction: {
        x: -1,
        y: 1
      }
    },
    {
      type: "circle",
      delay: 3,
      repeat: 5,
      position: { x: 800, y: 600 },
      direction: {
        x: -1.5,
        y: -1.5
      }
    },
    {
      type: "rect",
      delay: 4,
      repeat: 5,
      position: { x: 0, y: 600 },
      direction: {
        x: 1,
        y: -1
      }
    }
  ]
};
