import assert from 'assert'

import Algorithm from '../../engine/algorithm'
import Game from '../../engine/game'
import Board from '../../engine/board'

import SampleFarmerAlgorithm from '../../engine/algorithms/sample-farmer-algorithm'
import SamplePigAlgorithm from '../../engine/algorithms/sample-pig-algorithm'

import {
  Pig,
  Farmer
} from '../../engine/player'

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

    it('should initialize with one farmer and one ping', () => {
      assert.equal(game.farmer, farmer)
      assert.equal(game.pig, pig)
    })
  })

  describe('execute', () => {
    let game
    let pig
    let farmer

    beforeEach(() => {
      // For testing porpouse a Sample Algorithm is being used;
      // in production the algorithm needs to be instantiated from the text content of the editor
      pig = new Pig(new Algorithm('PingAlgorithm', SamplePigAlgorithm).instance)
      farmer = new Farmer(new Algorithm('FarmerAlgorithm', SampleFarmerAlgorithm).instance)
      game = new Game(pig, farmer)
    })

    it('should run game', () => {
      const result = game.run()
      assert.equal(result.winner, 'P')
    })
  })
})
