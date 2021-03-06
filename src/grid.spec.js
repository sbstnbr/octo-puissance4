var expect = require('chai').expect;
var Grid = require('./grid');

describe('Grid', () => {
  let grid;
  beforeEach(() =>{
    grid = new Grid(6,7);
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
    it('should return the coordinates of the token if it is correctly added', () => {
      expect(grid.addToken(0,1)).to.deep.equal([0,0]);
    });
    it('should add a 2 token', () => {
      grid.addToken(0,2);
      expect(grid.tokens[0][0]).to.equal(2);
    });
    it('it should add a token on top of the existing tokens of the column if a token is added', () => {
      grid.tokens[1][0]=1;
      grid.addToken(1,1);
      expect(grid.tokens[1][1]).to.equal(1);
    });
  });
  describe('isFull', () => {
    it('should return false if the grid is not full', () => {
      expect(grid.isFull()).to.be.false;
    });
    it('should return true if the grid is full', () => {
      grid.tokens.forEach(element => {
        element.fill(1);
      });
      expect(grid.isFull()).to.be.true;
    });
  });
  describe('getTokenRow', () => {
    it('should return false if the row is not between bounds', () => {
      expect(grid.getTokenRow('A')).to.be.false;
    });
    it('should return a row of the token', () => {
      expect(grid.getTokenRow(4)).to.deep.equal(new Array(7).fill(0));
    });
  });
  describe('getTokenDiagonals', () => {
    it('should return false if the token is not in the grid', () => {
      expect(grid.getTokenDiagonals('A',10)).to.be.false;
    });
    it('should return a unique 6 token diagonal if the token is in the SW corner of the grid', () => {
      expect(grid.getTokenDiagonals(0,0)).to.deep.equal([new Array(6).fill(0), [0]]);
    });
    it('should return a unique 6 token diagonal if the token is in the NW corner of the grid', () => {
      expect(grid.getTokenDiagonals(5,0)).to.deep.equal([[0], new Array(6).fill(0)]);
    });
    it('should return a unique 6 token diagonal if the token is in the NE corner of the grid', () => {
      expect(grid.getTokenDiagonals(5,6)).to.deep.equal([new Array(6).fill(0), [0]]);
    });
    it('should return a unique 6 token diagonal if the token is in the SE corner of the grid', () => {
      expect(grid.getTokenDiagonals(5,0)).to.deep.equal([[0], new Array(6).fill(0)]);
    });
    it('should return 2 small token diagonals if the token is in the border of the grid', () => {
      expect(grid.getTokenDiagonals(3,0)).to.deep.equal([[0,0,0], [0,0,0,0]]);
    });
    it('should return 2 diagonals if the token is in the grid', () => {
      expect(grid.getTokenDiagonals(3,5)).to.deep.equal([[0,0,0,0,0], [0,0,0,0]]);
    });
  });
});