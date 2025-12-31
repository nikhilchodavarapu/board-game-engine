import { markInBoard } from "./game.js";
import { Player } from "./player.js";

const main = () => {
  const player1 = new Player(1);
  const player2 = new Player(2);
  markInBoard(player1);
};

main();
