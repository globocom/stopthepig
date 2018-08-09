class Board {
  constructor(pig) {
    this.columns = 11
    this.rows = 11
    this.maxMoves = this.rows * this.columns
    this.matrix = this.buildMatrix()
    this.pig = pig
  }

  move(row, column) {
    this.matrix[row, column]
  }

  buildMatrix() {
    const matrix = []

    for (let x = 0; x < this.rows; x++) {
      matrix[x] = []
      for (let y = 0; y < this.columns; y++) {
        matrix[x][y] = null
      }
    }

    return matrix
  }

  draw() {
    for (let row = 0; row < this.rows; row++) {
      for (let column = 0; column < this.columns; column++) {
        const cell = this.matrix[column][row] || ' '
        process.stdout.write("| " + cell + " ")
      }
      process.stdout.write("\n")
    }
  }

  getAvailablePositions() {
    var currentPosition = this.pig;
    if (currentPosition.row === 0 ||
      currentPosition.row === this.columns ||
      currentPosition.col === 0 ||
      currentPosition.col === this.rows) {
      return { winGame: false, loseGame: true };
    }
    var availableLocations = []
    if (currentPosition.row % 2) {
      availableLocations = [{ row: currentPosition.row - 1, col: currentPosition.col },
      { row: currentPosition.row - 1, col: currentPosition.col + 1 },
      { row: currentPosition.row, col: currentPosition.col - 1 },
      { row: currentPosition.row, col: currentPosition.col + 1 },
      { row: currentPosition.row + 1, col: currentPosition.col },
      { row: currentPosition.row + 1, col: currentPosition.col + 1 }
      ];
    }
    else {
      availableLocations = [{ row: currentPosition.row - 1, col: currentPosition.col - 1 },
      { row: currentPosition.row - 1, col: currentPosition.col },
      { row: currentPosition.row, col: currentPosition.col - 1 },
      { row: currentPosition.row, col: currentPosition.col + 1 },
      { row: currentPosition.row + 1, col: currentPosition.col - 1 },
      { row: currentPosition.row + 1, col: currentPosition.col }
      ];
    }
    console.log(availableLocations)
    availableLocations.forEach(e => {
      this.matrix[e.row][e.col] = "*"
    })
  }

}

export default Board
