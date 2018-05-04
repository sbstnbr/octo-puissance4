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
      const raw = this.tokens[column].indexOf(0);
      this.tokens[column][raw] = player;
      return [raw,column];
    }
  }
  isFull(){
    return !this.tokens.some(column => column.indexOf(0)!==-1);
  }
  getTokenRaw(raw){
    if (!raw.toString().match('[0-6]')) return false;
    else {
      const tokenRaw = [];
      this.tokens.forEach(column => tokenRaw.push(column[raw]))
      return tokenRaw;
    };
  }
}

module.exports = Grid;