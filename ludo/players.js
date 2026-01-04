class Player {
  constructor(color) {
    this.name = prompt(`Enter name of the player - 1 (${color}) : `);
    this.color = color;
  }
}

export const namePlayers = () => {
  console.clear();
  console.log("ENTER NAMES OF THE PLAYERS");
  console.log("──────────────────────────");
  const player1 = new Player("BLUE");
  const player2 = new Player("RED");
  const player3 = new Player("GREEN");
  const player4 = new Player("YELLOW");
  return [player1, player2, player3, player4];
};
