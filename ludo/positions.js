const FGColors = {
  red: "\x1b[91m",
  green: "\x1b[92m",
  yellow: "\x1b[38;5;172m",
  blue: "\x1b[34m",
};

export const positions = {
  redCoins: {
    1: { original: [8, 15], visible: [3, 3], color: FGColors.red, symbol: "●" },
    2: { original: [8, 21], visible: [3, 4], color: FGColors.red, symbol: "⬟" },
    3: {
      original: [11, 15],
      visible: [4, 3],
      color: FGColors.red,
      symbol: "▲",
    },
    4: {
      original: [11, 21],
      visible: [4, 4],
      color: FGColors.red,
      symbol: "■",
    },
  },

  greenCoins: {
    1: {
      original: [8, 69],
      visible: [3, 12],
      color: FGColors.green,
      symbol: "●",
    },
    2: {
      original: [8, 75],
      visible: [3, 13],
      color: FGColors.green,
      symbol: "⬟",
    },
    3: {
      original: [11, 69],
      visible: [4, 12],
      color: FGColors.green,
      symbol: "▲",
    },
    4: {
      original: [11, 75],
      visible: [4, 13],
      color: FGColors.green,
      symbol: "■",
    },
  },

  yellowCoins: {
    1: {
      original: [35, 69],
      visible: [12, 12],
      color: FGColors.yellow,
      symbol: "●",
    },
    2: {
      original: [35, 75],
      visible: [12, 13],
      color: FGColors.yellow,
      symbol: "⬟",
    },
    3: {
      original: [38, 69],
      visible: [13, 12],
      color: FGColors.yellow,
      symbol: "▲",
    },
    4: {
      original: [38, 75],
      visible: [13, 13],
      color: FGColors.yellow,
      symbol: "■",
    },
  },

  blueCoins: {
    1: {
      original: [35, 15],
      visible: [12, 3],
      color: FGColors.blue,
      symbol: "●",
    },
    2: {
      original: [35, 21],
      visible: [12, 4],
      color: FGColors.blue,
      symbol: "⬟",
    },
    3: {
      original: [38, 15],
      visible: [13, 3],
      color: FGColors.blue,
      symbol: "▲",
    },
    4: {
      original: [38, 21],
      visible: [13, 4],
      color: FGColors.blue,
      symbol: "■",
    },
  },
};
