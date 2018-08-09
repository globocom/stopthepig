import assert from 'assert'

import Board from './../../engine/board'

describe('Board', () => {
  describe('initialize', () => {
    let board

    before(() => {
      board = new Board()
    })

    it('with a width of 11', () => {
      assert.equal(board.width, 11)
    })

    it('with a height of 11', () => {
      assert.equal(board.height, 11)
    })

    it('with maxMoves of 121', () => {
      assert.equal(board.maxMoves, 121)
    })
  })
})
