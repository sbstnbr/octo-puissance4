var expect = require('chai').expect;
var Grid = require('./grid');

describe('Grid', () => {
  let grid;
  beforeEach(() =>{
    grid = new Grid();
  });
  it('should init a Grid object', () => {
    expect(grid).to.be.an.instanceOf(Object);
  });

  it('should init a tokens array with 7 columns', () => {
    expect(grid.tokens.length).to.equal(7);
  });

  describe('checkIfMoveIsAllowed', () => {
    it('it should return true if the colomn provided is an integer between 0 and 6', () => {
      expect(grid.checkIfMoveIsAllowed(0)).to.be.true;
    });

    it('it should return false if the colomn provided is not an integer', () => {
      expect(grid.checkIfMoveIsAllowed('A')).to.be.false;
    });

    it('it should return false if the colomn provided is greater than 6', () => {
      expect(grid.checkIfMoveIsAllowed(7)).to.be.false;
    });

    it('it should return false if the colomn is full', () => {
      grid.tokens[6].fill(1);
      expect(grid.checkIfMoveIsAllowed(6)).to.be.false;
    });
  });
  describe('addToken', () => {
    it('should return true if a token is correctly added', () => {
      expect(grid.addToken(0,1)).to.be.true;
    });
    it('should add a 2 token', () => {
      grid.addToken(0,2);
      // console.log(grid);
      expect(grid.tokens[0][grid.numRows-2]).to.equal(2);
    });
    // it('it should add a token on top of the existing tokens of the column if a token is added', () => {
    //   expect(grid[][]).to.equal(1);
    // });
  })
});