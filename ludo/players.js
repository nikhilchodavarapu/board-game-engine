class Coin {
  constructor(color, originalPos, visblePos, symbol) {
    this.color = color;
    this.originalPos = originalPos;
    this.visblePos = visblePos;
    this.symbol = symbol;
  }
}

const redCoins = {
  0: new Coin([8, 15], [3, 3], FGColors.red, "●"),
  1: new Coin([8, 21], [3, 4], FGColors.red, "⬟"),
  2: new Coin([11, 15], [4, 3], FGColors.red, "▲"),
  3: new Coin([11, 21], [4, 4], FGColors.red, "■"),
};

const greenCoins = {
  0: new Coin([8, 69], [3, 12], FGColors.green, "●"),
  1: new Coin([8, 75], [3, 13], FGColors.green, "⬟"),
  2: new Coin([11, 69], [4, 12], FGColors.green, "▲"),
  3: new Coin([11, 75], [4, 13], FGColors.green, "■"),
};

const yellowCoins = {
  0: new Coin([35, 69], [12, 12], FGColors.yellow, "●"),
  1: new Coin([35, 75], [12, 13], FGColors.yellow, "⬟"),
  2: new Coin([38, 69], [13, 12], FGColors.yellow, "▲"),
  3: new Coin([38, 75], [13, 13], FGColors.yellow, "■"),
};

const blueCoins = {
  0: new Coin([35, 15], [12, 3], FGColors.blue, "●"),
  1: new Coin([35, 21], [12, 4], FGColors.blue, "⬟"),
  2: new Coin([38, 15], [13, 3], FGColors.blue, "▲"),
  3: new Coin([38, 21], [13, 4], FGColors.blue, "■"),
};

class Player {
  constructor(playerNo, colorName, coin) {
    this.name = prompt(
      `Enter name of the player - ${playerNo} (${colorName}) : `,
    );
    this.coin = coin;
  }
}

export const namePlayers = () => {
  console.clear();
  console.log("ENTER NAMES OF THE PLAYERS");
  console.log("──────────────────────────");
  const player1 = new Player(1, "BLUE", blueCoins);
  const player2 = new Player(2, "RED", redCoins);
  const player3 = new Player(3, "GREEN", greenCoins);
  const player4 = new Player(4, "YELLOW", yellowCoins);
  return [player1, player2, player3, player4];
};
