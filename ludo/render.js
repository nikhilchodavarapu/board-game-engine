const BG = {
  red: "\x1b[41m",
  green: "\x1b[42m",
  yellow: "\x1b[43m",
  blue: "\x1b[46m",
};

export const renderBoard = (row, col) => {
  if (row === 0) return "\x1b[30m";

  if (row > 18 && row < 28 && col > 36 && col < 55) {
    return "\x1b[48;2;255;165;0m";
  }

  if (
    (row < 19 && col < 37) ||
    (row < 25 && row > 21 && col < 43 && col > 5) ||
    (row > 18 && row < 22 && col < 13 && col > 5)
  ) {
    return "\x1b[30m" + BG.red;
  }

  if (
    (row < 19 && col > 53) ||
    (row < 22 && row > 3 && col < 49 && col > 41) ||
    (row > 3 && row < 7 && col < 55 && col > 48)
  ) {
    return "\x1b[30m" + BG.green;
  }

  if (
    (row > 27 && col > 53) ||
    (row < 25 && row > 21 && col < 85 && col > 48) ||
    (row > 24 && row < 28 && col < 85 && col > 77)
  ) {
    return "\x1b[30m" + BG.yellow;
  }

  if (
    (row > 27 && col < 37) ||
    (row < 43 && row > 24 && col < 49 && col > 41) ||
    (row > 39 && row < 43 && col < 43 && col > 35)
  ) {
    return "\x1b[30m" + BG.blue;
  }

  if (
    (row > 23 && row < 28 && col > 11 && col < 19) ||
    (row > 6 && row < 10 && col > 35 && col < 43) ||
    (row > 17 && row < 22 && col > 71 && col < 79) ||
    (row > 36 && row < 40 && col > 47 && col < 55)
  ) {
    return "\x1b[30m" + "\x1b[48;2;211;211;211m";
  }

  return "\x1b[30m" + "\x1b[107m";
};
