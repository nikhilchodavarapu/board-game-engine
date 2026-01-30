import { chess } from "./chess/game.js";
import { endlessRun } from "./endless-run/game.js";
import { ludo } from "./ludo/main.js";
import { monkeyType } from "./monkey-type/main.js";
import { pacMan } from "./pac-man/game.js";
import { SOS } from "./SOS/main.js";
import { suduko } from "./suduko/game.js";
import { ticTacToe } from "./ticTacToe/tic_tac_toe.js";
import { select, Separator } from "npm:@inquirer/prompts";

const main = async () => {
  console.clear();
  const answer = await select({
    message: "Select a Game to Play",
    choices: [
      { name: "Tic-Tac-Toe", value: ticTacToe },
      new Separator(),
      { name: "SOS", value: SOS },
      new Separator(),
      { name: "Sudoku", value: suduko },
      new Separator(),
      { name: "Ludo", value: ludo },
      new Separator(),
      { name: "Chess", value: chess },
      new Separator(),
      { name: "Pacman", value: pacMan },
      new Separator(),
      { name: "Endless Run", value: endlessRun },
      new Separator(),
      { name: "Monkey Type", value: monkeyType },
    ],
    loop: false,
    pageSize: 20,
  });
  answer();
  // ticTacToe();
  // suduko();
  // SOS();
  // pacMan();
  // ludo();
  // monkeyType();
  // chess();
  // endlessRun();
};

main();
