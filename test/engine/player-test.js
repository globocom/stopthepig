import assert from 'assert'

import { Pig } from '../../engine/player'

describe('Player', () => {
  describe('Pig', () => {
    let pig

    beforeEach(() => {
      pig = new Pig()
    })

    it('should initialize with a valid char', () => {
      assert.equal(pig.char, 'P')
    })

    it('should initialize with a initial position', () => {
      assert.equal(pig.row, 5)
      assert.equal(pig.column, 5)
    })

    it('should initialize with not score', () => {
      assert.equal(pig.score, 0)
    })

    it('should set a new position', () => {
      pig.setPosition(8, 10)
      assert.equal(pig.row, 8)
      assert.equal(pig.column, 10)
    })

    it('should return all possible movements', () => {
      const availablePositions = [
        { row: 5, column: 6 },
        { row: 2, column: 2 }
      ]

      const possibleMovements = pig.getPossibleMovements(availablePositions)

      assert.equal(possibleMovements.length, 1)
      assert.equal(possibleMovements[0].row, 5)
      assert.equal(possibleMovements[0].column, 6)
    })
  })
})
