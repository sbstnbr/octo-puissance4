class Grid {
  constructor(){
    this.numRows = 6;
    this.numColumns = 7;
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
      && this.tokens[column][0]===0
      ? true : false
    )
  }
  addToken(column, player){
    // Check the last token set in the column provided
    const emptyRawInColumn = -1;
    // for (let index = 0; index < this.tokens.numRows; index++) {
    //   // From botom
    //   const row = this.tokens[this.tokens.numRows-1-index];
    //   if(row[column]===0){
    //     emptyRawInColumn = this.tokens.numRows-1-index;
    //     // Fill token
    //     row[column]=player;
    //     return true;
    //   }
    // }
    this.tokens[0][this.numRows-2]=2;
    return true;
  }
}

module.exports = Grid;