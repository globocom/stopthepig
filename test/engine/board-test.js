import assert from 'assert'

import Board from './../../engine/board'

describe('Board', () => {
  describe('initialize', () => {
    before(() => {
      this.board = new Board()
    })

    it('with a width of 7', () => {
      assert.equal(this.board.width, 7)
    })

    it('with a height of 6', () => {
      assert.equal(this.board.height, 6)
    })

    it('with maxMoves of 42', () => {
      assert.equal(this.board.maxMoves, 42)
    })
  })

  describe('push', () => {
    beforeEach(() => {
      this.board = new Board()
    })

    it('add a piece to the board', () => {
      const player = {
        'char': 'x'
      }
      this.board.push(player, 0)
      assert.equal(this.board.matrix[0][5], 'x')
    })
  })

  describe('available position', () => {
    beforeEach(() => {
      this.board = new Board()
    })

    it('show all columns available', () => {
      assert.equal(
        this.board.getAvailableColumns().length,
        this.board.width
      )
    })
  })
})
