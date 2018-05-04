var expect = require('chai').expect;
var Game = require('./game');
var Grid = require('./grid');
var sinon = require('sinon');

describe('Game', () => {
  let game;
  beforeEach(() => {
    game = new Game()
  });
  it('it should init a grid object', () => {
    expect(game.grid).to.be.instanceOf(Object);
  });
  it('it should init a nextPlayer', () => {
    expect(game.nextPlayer).to.be.oneOf([1,2]);
  });
  it('it should init a null winner', () => {
    expect(game.winner).to.be.null;
  });
  describe('didThePlayerWin', () => {
    it('should return false if there is no winner', () => {
      expect(game.didThePlayerWin(1,0,0)).to.be.false;
    });
    it('should return true if 4 tokens of the same player are aligned vertically', () => {
      game.grid.tokens[0] = new Array (0,0,2,2,2,2,0);
      expect(game.didThePlayerWin(2,0,0)).to.be.true;
    });
    it('should return true if 4 tokens of the same player are aligned horizontally', () => {
      sinon.stub(game.grid, 'getTokenRaw').returns(new Array(7).fill(1));
      expect(game.didThePlayerWin(1,0,0)).to.be.true;
    });
  });
});