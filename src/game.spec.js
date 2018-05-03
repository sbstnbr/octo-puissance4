var expect = require('chai').expect;
var Game = require('./game');
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
  describe('isThereAWinner', () => {
    it('should return false if there is no winner', () => {
      expect(game.isThereAWinner()).to.be.false;
    });
    it('should return true if 4 tokens of the same player are aligned vertically', () => {
      game.grid.tokens[0] = new Array (0,0,2,2,2,2,0);
      expect(game.isThereAWinner()).to.be.true;
    });
    it('should return true if 4 tokens of the same player are aligned horizontally', () => {
      game.grid.tokens[3][2] = 2;
      game.grid.tokens[4][2] = 2;
      game.grid.tokens[5][2] = 2;
      game.grid.tokens[6][2] = 2;
      game.grid.render();
      expect(game.isThereAWinner()).to.be.true;
    });
  });
});