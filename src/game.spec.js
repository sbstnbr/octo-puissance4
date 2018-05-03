var expect = require('chai').expect;
var Game = require('./game');

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
});