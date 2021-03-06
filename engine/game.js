import Board from './board'

class Game {
  constructor(pig, farmer) {
    this.board = new Board()
    this.pig = pig
    this.farmer = farmer
  }

  run() {
    const players = [this.pig, this.farmer]
    let initialState = []
    let moves = []
    let winner = null

    // set pig initial position (5:5) to board
    // to prevent farmer set a fence there
    this.board.push(this.pig, this.pig.row, this.pig.column)

    // add to the board all initial fences
    // generate by the player algoritm 
    this.getInitialFencesPosition().forEach(fencePosition => {
      initialState = initialState.concat({
        x: fencePosition.row, 
        y: fencePosition.column
      })
      this.board.push(
        this.farmer,
        fencePosition.row,
        fencePosition.column
      )
    })

    for (let currentMove = 0; currentMove < this.board.maxMoves*2; currentMove++) {
      const currentPlayer = players[currentMove % 2]

      // let the algorithm process
      // then get position result to play
      const positionResult = currentPlayer.play(
        this.board.getAvailablePositions(),
        this.board.matrix,
      )

      if (!this.isMovementAllowed(currentPlayer, positionResult)) {
        currentPlayer.score++
        continue        
      }

      let action = ""
      switch (currentPlayer) {
        case this.farmer:
          // push the fence position
          this.board.push(this.farmer,positionResult.row, positionResult.column)
          action = "block"
          break
        case this.pig:
          // update current pig position
          this.board.move(this.pig, positionResult.row, positionResult.column)
          action = "move"
          break
      } 

      moves.push({
        "player": currentPlayer.char,
        "action": action,
        "x": positionResult.row,
        "y": positionResult.column,
      })

      winner = this.getWinner()
      if (winner !== null) {
        moves.push({
          "player": winner.char,
          "action": "finish",
          "row": winner.row,
          "column": winner.column,
        })
        break
      }
    }

    const result = {
      board: this.board.rows,
      initial_state: initialState,
      moves: moves,
      winner: winner.char,    
      score: {}
    }

    result.score[this.pig.char] = this.pig.score
    result.score[this.farmer.char] = this.farmer.score

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

  isMovementAllowed(player, movementPosition) {
    const availablePositions = this.board.getAvailablePositions()
    let possibleMoves = []

    switch (player) {
      case this.pig:
        possibleMoves = this.pig.getPossibleMovements(availablePositions)
        break
      case this.farmer:
        possibleMoves = availablePositions
        break
    }

    for (let i = 0; i < possibleMoves.length; i++) {
      const position = possibleMoves[i];
      if (position.row == movementPosition.row && 
          position.column == movementPosition.column) {
        return true
      }
    }
    return false
  }
}


export default Game
