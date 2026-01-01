import { play } from "./game.js";
import { Player } from "./player.js";

const main = () => {
  const player1 = new Player(1);
  const player2 = new Player(2);
  play([player1, player2]);
};

main();
