var Grid = require('./grid');

class Game {
  constructor(){
    this.grid = new Grid(6,7);
    this.nextPlayer = Math.floor(Math.random()*2+1);
    this.winner = null;
  }
  isThereAWinner(){
    // Vertical
    const vertical = this.grid.tokens.some(column => {
      return (
        column.join('').indexOf('1111') !== -1
        || column.join('').indexOf('2222') !== -1
      )
    });
    // Horizontal
    let horizontal = false;
    for (let index = 0; index < this.grid.numRows; index++) {
      if (
        this.grid.getTokenRaw(index).join('').indexOf('2222') !== -1
        || this.grid.getTokenRaw(index).join('').indexOf('1111') !== -1
      ){
        horizontal = true;
        break;
      }
    }
    
    return (vertical || horizontal);
  }
}

module.exports = Game;