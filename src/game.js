var Grid = require('./grid');

class Game {
  constructor(){
    this.grid = new Grid(6,7);
    this.nextPlayer = Math.floor(Math.random()*2+1);
    this.winner = null;
  }
  didThePlayerWin(player,rowPlayed,columnPlayed){
    // Define winning string: 1111 or 2222
    const playerWinningString = player.toString()+player.toString()+player.toString()+player.toString();
    // Vertical
    let vertical = this.grid.tokens[columnPlayed].join('').indexOf(playerWinningString) !== -1;
    // Horizontal
    let horizontal = this.grid.getTokenRow(rowPlayed).join('').indexOf(playerWinningString) !== -1
    // Diagonals
    let diagonals = this.grid.getTokenDiagonals(rowPlayed,columnPlayed).some(diagonal => {
      return diagonal.join('').indexOf(playerWinningString) !== -1
    });
    return vertical || horizontal || diagonals;
  }
}

module.exports = Game;