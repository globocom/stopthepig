import Board from './board'

class Game {
  constructor(pig, farmer) {
    this.winner = null
    this.board = new Board()
    this.pig = pig
    this.farmer = farmer
    this.moves = []
  }

  run() {
    const players = [this.pig, this.farmer]

    // set pig initial position (5:5) to board
    // to prevent farmer set a fence there
    this.board.push(this.pig, this.pig.row, this.pig.column)

    // add to the board all initial fences
    // generate by the player algoritm
    // TODO: limit to 5 fences
    this.farmer.getInitialFencesPosition(
      this.board.getAvailablePositions()
    ).forEach(fencePosition => this.board.push(
      this.farmer,
      fencePosition.row,
      fencePosition.column
    ))

    this.board.draw()

    for (let currentMove = 0; currentMove < this.board.maxMoves; currentMove++) {
      const currentPlayer = players[currentMove % 2]

      // let the algorithm process
      // then get position result to play
      const positionResult = currentPlayer.play(
        this.board.getAvailablePositions(),
        this.board.matrix,
      )

      if (currentPlayer === this.farmer) {
        // push the fence position
        this.board.push(
          this.farmer,
          positionResult.row,
          positionResult.column,
        )

        this.moves.push({
          "player": currentPlayer.char,
          "action": "block",
          "row": positionResult.row,
          "column": positionResult.column,
        })
      }

      if (currentPlayer === this.pig) {
        // update current pig position
        this.board.move(
          this.pig,
          positionResult.row,
          positionResult.column,
        )

        this.moves.push({
          "player": currentPlayer.char,
          "action": "move",
          "row": positionResult.row,
          "column": positionResult.column,
        })
      }

      // DEBUG #########################################################
      console.log(`Move ${currentMove} - Player ${currentPlayer.char}`)
      this.board.draw()
      // ###############################################################

      if (this.board.isAtEdge(this.pig.row, this.pig.column)) {
        // upgrade player score
        currentPlayer.score += currentPlayer.score

        console.log('PIG WON!')
        this.winner = currentPlayer.char
        this.moves.push({
          "player": currentPlayer.char,
          "action": "finish",
          "row": positionResult.row,
          "column": positionResult.column,
        })

        break
      }

      if (this.board.getAvailablePositions().length === 0) {
        // upgrade player score
        currentPlayer.score += currentPlayer.score

        console.log('FARMER WON!')
        this.winner = currentPlayer.char
        this.moves.push({
          "player": currentPlayer.char,
          "action": "finish",
          "row": positionResult.row,
          "column": positionResult.column,
        })

        break
      }
    }

    const result = {
      winner: this.winner,
      board: this.board.matrix,
      score: {},
    }

    result[this.pig.char] = this.pig.score
    result[this.farmer.char] = this.farmer.score

    console.log(result)
    return result
  }
}


export default Game
