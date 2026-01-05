import { play } from "./game.js";
import { namePlayers } from "./players.js";

const main = () => {
  const players = namePlayers();
  play(players);
  // play();
};

main();
