var expect = require('chai').expect;
var Grid = require('./grid');

describe('Grid', () => {
  let grid;

  it('should init a Grid object', () => {
    grid = new Grid();
    expect(grid).to.be.an.instanceOf(Object);
  });

  it('should init a tokens array with 7 columns', () => {
    grid = new Grid();
    expect(grid.tokens.length).to.equal(7);
  });

  describe('checkIfMoveIsAllowed', () => {
    it('it should return true if the colomn provided is an integer between 0 and 6', () => {
      grid = new Grid();
      expect(grid.checkIfMoveIsAllowed(0)).to.be.true;
    });

    it('it should return false if the colomn provided is not an integer', () => {
      grid = new Grid();
      expect(grid.checkIfMoveIsAllowed('A')).to.be.false;
    });

    it('it should return false if the colomn provided is greater than 6', () => {
      grid = new Grid();
      expect(grid.checkIfMoveIsAllowed(7)).to.be.false;
    });

    it.skip('it should return false if the colomn is full', () => {
      grid = new Grid();
      grid.tokens[0] = new Array(6).fill(1);
      console.log(grid);
      expect(grid.checkIfMoveIsAllowed(0)).to.be.false;
    });
  });

});