var Grid = require('./grid');

class Game {
  constructor(){
    this.grid = new Grid(6,7);
    this.nextPlayer = Math.floor(Math.random()*2+1);
    this.winner = null;
  }
  isThereAWinner(){
    const horizontal = this.grid.tokens.some(column => {
      return (
        column.join('').indexOf('1111') !== -1
        || column.join('').indexOf('2222') !== -1
      )
    });
    const vertical = this.grid.tokens[3][2] === 2
    return (horizontal || vertical);
  }
}

module.exports = Game;