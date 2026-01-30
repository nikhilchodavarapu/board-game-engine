import { play } from "./game.js";
import { help } from "./help.js";
import { Player } from "./player.js";

export const SOS = () => {
  help();
  prompt("Hit Enter to start game >> ");
  const player1 = new Player(1);
  const player2 = new Player(2);
  play([player1, player2]);
};
