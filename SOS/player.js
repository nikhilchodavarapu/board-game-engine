export class Player {
  constructor(playerNo) {
    this.name = prompt(`Enter name of the Player - ${playerNo} :`);
    this.score = 0;
  }

  displayScore() {
    console.log(`${this.name} : ${this.score}`);
  }
}
