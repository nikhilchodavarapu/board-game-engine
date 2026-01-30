import { play } from "./game.js";
import { help } from "./help.js";
import { namePlayers } from "./players.js";

export const ludo = () => {
  help();
  prompt("Hit enter to start game >>");
  const players = namePlayers();
  play(players);
  // play();
};
