import Board from './board'


class Game {
  constructor(pig, farmer) {
    this.winner = null
    this.board = new Board()
    this.players = [pig, farmer]
    this.moves = []
  }

  run() {
    const { maxMoves } = this.board

    for (let currentMove = 0; currentMove < maxMoves; currentMove++) {
      // const currentPlayer = this.players[currentMove % 2]
    }

    return {
      winner: this.winner,
      board: this.board,
      score: this.score
    }
  }

  getAvailablePositions() {
    const currentPosition = this.pig
    if (currentPosition.row === 0
      || currentPosition.row === this.columns
      || currentPosition.col === 0
      || currentPosition.col === this.rows) {
      return { winGame: false, loseGame: true }
    }
    let availableLocations = []
    if (currentPosition.row % 2) {
      availableLocations = [{ row: currentPosition.row - 1, col: currentPosition.col },
        { row: currentPosition.row - 1, col: currentPosition.col + 1 },
        { row: currentPosition.row, col: currentPosition.col - 1 },
        { row: currentPosition.row, col: currentPosition.col + 1 },
        { row: currentPosition.row + 1, col: currentPosition.col },
        { row: currentPosition.row + 1, col: currentPosition.col + 1 }
      ]
    } else {
      availableLocations = [{ row: currentPosition.row - 1, col: currentPosition.col - 1 },
        { row: currentPosition.row - 1, col: currentPosition.col },
        { row: currentPosition.row, col: currentPosition.col - 1 },
        { row: currentPosition.row, col: currentPosition.col + 1 },
        { row: currentPosition.row + 1, col: currentPosition.col - 1 },
        { row: currentPosition.row + 1, col: currentPosition.col }
      ]
    }
    console.log(availableLocations)
    availableLocations.forEach((e) => {
      this.matrix[e.row][e.col] = '*'
    })
    return null
  }
}


export default Game
