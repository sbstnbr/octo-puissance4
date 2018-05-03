var Grid = require('./grid');

class Game {
  constructor(){
    this.grid = new Grid(6,7);
    this.nextPlayer = Math.floor(Math.random()*2+1);
    this.winner = null;
  }
}

module.exports = Game;