import assert from 'assert'
import { describe } from 'mocha'

import { Pig } from '../../engine/player'
import Board from '../../engine/board'

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

    describe('player position', () => {
      beforeEach(() => {
        board = new Board()
      })

      it('pushes a player', () => {
        const pig = new Pig()
        board.push(pig, 4, 4)
        assert.equal(pig.row, 4)
        assert.equal(pig.column, 4)
        assert.equal(board.matrix[pig.row][pig.column], pig.char)
      })

      it('moves a player', () => {
        const pig = new Pig()
        board.push(pig, 4, 4)
        board.move(pig, 5, 6)
        assert.equal(pig.row, 5)
        assert.equal(pig.column, 6)
        assert.equal(board.matrix[4][4], null)
        assert.equal(board.matrix[pig.row][pig.column], pig.char)
      })
    })
  })
})
