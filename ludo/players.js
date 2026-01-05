class Token {
  constructor(originalPos, visblePos, color, symbol) {
    this.color = color;
    this.originalPos = originalPos;
    this.visblePos = visblePos;
    this.symbol = symbol;
  }
}

const FGColors = {
  red: "\x1b[91m",
  green: "\x1b[92m",
  yellow: "\x1b[38;5;172m",
  blue: "\x1b[34m",
};

const redTokens = {
  0: new Token([8, 15], [3, 3], FGColors.red, "●"),
  1: new Token([8, 21], [3, 4], FGColors.red, "⬟"),
  2: new Token([11, 15], [4, 3], FGColors.red, "▲"),
  3: new Token([11, 21], [4, 4], FGColors.red, "■"),
};

const greenTokens = {
  0: new Token([8, 69], [3, 12], FGColors.green, "●"),
  1: new Token([8, 75], [3, 13], FGColors.green, "⬟"),
  2: new Token([11, 69], [4, 12], FGColors.green, "▲"),
  3: new Token([11, 75], [4, 13], FGColors.green, "■"),
};

const yellowTokens = {
  0: new Token([35, 69], [12, 12], FGColors.yellow, "●"),
  1: new Token([35, 75], [12, 13], FGColors.yellow, "⬟"),
  2: new Token([38, 69], [13, 12], FGColors.yellow, "▲"),
  3: new Token([38, 75], [13, 13], FGColors.yellow, "■"),
};

const blueTokens = {
  0: new Token([35, 15], [12, 3], FGColors.blue, "●"),
  1: new Token([35, 21], [12, 4], FGColors.blue, "⬟"),
  2: new Token([38, 15], [13, 3], FGColors.blue, "▲"),
  3: new Token([38, 21], [13, 4], FGColors.blue, "■"),
};

let charCode = 65;

class Player {
  constructor(playerNo, colorName, tokens) {
    // this.name = prompt(
    //   `Enter name of the player - ${playerNo} (${colorName}) : `,
    // );
    this.name = String.fromCharCode(charCode++);
    this.tokens = tokens;
  }
}

export const namePlayers = () => {
  console.clear();
  console.log("ENTER NAMES OF THE PLAYERS");
  console.log("──────────────────────────");
  const player1 = new Player(1, "BLUE", blueTokens);
  const player2 = new Player(2, "RED", redTokens);
  const player3 = new Player(3, "GREEN", greenTokens);
  const player4 = new Player(4, "YELLOW", yellowTokens);
  return [player1, player2, player3, player4];
};
