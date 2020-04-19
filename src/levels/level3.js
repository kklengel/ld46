export const level3 = {
  name: "level 3",
  description: "shapeshift to heal with foreign shapes",
  hint: "press SPACEBAR to shapeshift",
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
      cur: 20,
      max: 20
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
