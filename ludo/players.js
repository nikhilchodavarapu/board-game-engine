class Token {
  constructor(originalPos, visblePos, color, symbol, moves) {
    this.color = color;
    this.originalPos = originalPos;
    this.visblePos = visblePos;
    this.symbol = symbol;
    this.moves = moves;
  }
}

const FGColors = {
  red: "\x1b[91m",
  green: "\x1b[92m",
  yellow: "\x1b[38;5;172m",
  blue: "\x1b[34m",
};

const redTokens = {
  1: new Token([8, 15], [3, 3], FGColors.red, "●", 0),
  2: new Token([8, 21], [3, 4], FGColors.red, "⬟", 0),
  3: new Token([11, 15], [4, 3], FGColors.red, "▲", 0),
  4: new Token([11, 21], [4, 4], FGColors.red, "■", 0),
};

const greenTokens = {
  1: new Token([8, 69], [3, 12], FGColors.green, "●", 0),
  2: new Token([8, 75], [3, 13], FGColors.green, "⬟", 0),
  3: new Token([11, 69], [4, 12], FGColors.green, "▲", 0),
  4: new Token([11, 75], [4, 13], FGColors.green, "■", 0),
};

const yellowTokens = {
  1: new Token([35, 69], [12, 12], FGColors.yellow, "●", 0),
  2: new Token([35, 75], [12, 13], FGColors.yellow, "⬟", 0),
  3: new Token([38, 69], [13, 12], FGColors.yellow, "▲", 0),
  4: new Token([38, 75], [13, 13], FGColors.yellow, "■", 0),
};

const blueTokens = {
  1: new Token([35, 15], [12, 3], FGColors.blue, "●", 0),
  2: new Token([35, 21], [12, 4], FGColors.blue, "⬟", 0),
  3: new Token([38, 15], [13, 3], FGColors.blue, "▲", 0),
  4: new Token([38, 21], [13, 4], FGColors.blue, "■", 0),
};

let charCode = 65;

class Player {
  constructor(playerNo, colorName, tokens, initialPos) {
    // this.name = prompt(
    //   `Enter name of the player - ${playerNo} (${colorName}) : `,
    // );
    this.name = String.fromCharCode(charCode++);
    this.tokens = tokens;
    this.initialPos = initialPos;
  }
}

export const namePlayers = () => {
  console.clear();
  console.log("ENTER NAMES OF THE PLAYERS");
  console.log("──────────────────────────");
  const player1 = new Player(1, "BLUE", blueTokens, [14, 7]);
  const player2 = new Player(2, "RED", redTokens, [7, 2]);
  const player3 = new Player(3, "GREEN", greenTokens, [2, 9]);
  const player4 = new Player(4, "YELLOW", yellowTokens, [9, 14]);
  return [player1, player2, player3, player4];
};
