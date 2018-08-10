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
    this.getInitialFencesPosition().forEach(fencePosition => {
      this.board.push(this.farmer, fencePosition.row, fencePosition.column)
    })

    this.board.draw()

    for (let currentMove = 0; currentMove < this.board.maxMoves; currentMove++) {
      const currentPlayer = players[currentMove % 2]

      // let the algorithm process
      // then get position result to play
      const positionResult = currentPlayer.play(
        this.board.getAvailablePositions(),
        this.board.matrix,
      )

      let action = ""
      if (currentPlayer === this.farmer) {
        // push the fence position
        this.board.push(
          this.farmer,
          positionResult.row,
          positionResult.column,
        )
        action = "block"
      }

      if (currentPlayer === this.pig) {
        // update current pig position
        this.board.move(
          this.pig,
          positionResult.row,
          positionResult.column,
        )
        action = "move"
      }

      this.moves.push({
        "player": currentPlayer.char,
        "action": action,
        "row": positionResult.row,
        "column": positionResult.column,
      })

      // DEBUG #########################################################
      console.log(`Move ${currentMove} - Player ${currentPlayer.char}`)
      this.board.draw()
      // ###############################################################

      let winner = this.getWinner()
      if (winner !== null) {
        // upgrade player score
        winner.score += winner.score

        console.log(`${winner.char} WON`)
        this.winner = winner.char
        this.moves.push({
          "player": winner.char,
          "action": "finish",
          "row": winner.row,
          "column": winner.column,
        })
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

  getInitialFencesPosition() {
    const _availablePositions = this.board.getAvailablePositions().map(
      position => `${position.row}:${position.column}`
    )

    return this.farmer.getInitialFencesPosition(
      this.board.getAvailablePositions()
    ).filter(position => 
      _availablePositions.includes(`${position.row}:${position.column}`)
    ).slice(0,5)
  }

  getWinner() {
    if (this.board.isAtEdge(this.pig.row, this.pig.column)) {
      return this.pig
    }

    if (this.board.getAvailablePositions().length === 0) {
      return this.farmer
    }

    return null
  }
}


export default Game
