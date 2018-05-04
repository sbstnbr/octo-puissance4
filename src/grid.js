class Grid {
  constructor(numRows,numColumns){
    this.numRows = numRows;
    this.numColumns = numColumns;
    this.tokens = this.initTokens(this.numRows, this.numColumns);
  }
  render(){
    return console.log(this.tokens);
  }
  initTokens(numRows, numColumns) {
    let array = new Array(numColumns); 
    for(let i = 0; i < numColumns; i++) {
      array[i] = new Array(numRows).fill(0); 
    }
    return array; 
  }
  checkIfMoveIsAllowed(column){
    return (
      column >= 0
      && column < this.numColumns
      && this.tokens[column].indexOf(0)!==-1
      ? true : false
    )
  }
  addToken(column, player){
    if (!this.checkIfMoveIsAllowed(column)) return false;
    else {
      const row = this.tokens[column].indexOf(0);
      this.tokens[column][row] = player;
      return [row,column];
    }
  }
  isFull(){
    return !this.tokens.some(column => column.indexOf(0)!==-1);
  }
  getTokenRow(row){
    if (!row.toString().match('[0-6]')) return false;
    else {
      const tokenRow = [];
      this.tokens.forEach(column => tokenRow.push(column[row]))
      return tokenRow;
    };
  }
  getTokenDiagonals(row,column){
    try {
      const token = this.tokens[column][row];
      let diagonals = [[],[]];
      // Diagonal 1: y = x + gradient1
      const gradient1 = row - column;
      for (let index = 0; index < this.numColumns; index++) {
        if(index+gradient1<this.numRows && index+gradient1>=0){
          diagonals[0].push(this.tokens[index][index+gradient1]);
        }
      }
      // Diagonal 2
      const gradient2 = row + column;
      for (let index = 0; index < this.numColumns; index++) {
        if(-index+gradient2<this.numRows && -index+gradient2>=0){
          diagonals[1].push(this.tokens[index][-index+gradient2]);
        }
      }
      return diagonals;
    } 
    catch (err){
      return false;
    }
  }
}

module.exports = Grid;