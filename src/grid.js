function Grid () {
  this.width = 7,
  this.height = 6,
  this.tokens = new Array(this.width).fill(new Array(this.height).fill(0)),
  this.checkIfMoveIsAllowed = (column) => {
    return (column >= 0 && column < this.width && this.tokens[column][this.height]!==0) ? true : false;
  }
}

module.exports = Grid;