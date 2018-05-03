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
      && this.tokens[column][this.numRows-1]===0
      ? true : false
    )
  }
  addToken(column, player){
    if (!checkIfMoveIsAllowed(column)) return false;
    else {
      const raw = this.tokens[column].indexOf(0);
      this.tokens[column][raw] = player;
      return true;
    }
  }
  isFull(){
    return !this.tokens.some(column => column.indexOf(0)!==-1);
  }
}

module.exports = Grid;