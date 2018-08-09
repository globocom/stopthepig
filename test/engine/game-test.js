import assert from 'assert'

import Game from '../../engine/game'
import Board from '../../engine/board'

describe('Game', () => {
  describe('initialize', () => {
    let game
    let pig
    let farmer

    before(() => {
      game = new Game(pig, farmer)
    })

    it('should initialize with no winner', () => {
      assert.equal(game.winner, null)
    })

    it('should initialize with a valid Board', () => {
      assert.equal(game.board.constructor, Board)
    })

    it('should initialize with two valid players', () => {
      assert.equal(game.players.length, 2)
    })

    it('should initialize with no moves', () => {
      assert.equal(game.moves.length, 0)
    })
  })

  describe('pig', () => {
    let game
    let pig
    let farmer

    beforeEach(() => {
      game = new Game(pig, farmer)
    })

    it('should get pig possibile positions', () => {
      assert.equal(game.moves.length, 0)
    })
  })
})
