import assert from 'assert'

import Board from './../../engine/board'

describe('Board', () => {
  describe('initialize', () => {
    let board

    before(() => {
      board = new Board()
    })

    it('with column count of 11', () => {
      assert.equal(board.columns, 11)
    })

    it('with row count of 11', () => {
      assert.equal(board.rows, 11)
    })

    it('with maxMoves of 121', () => {
      assert.equal(board.maxMoves, 121)
    })
  })
})
