class Board {
  constructor() {
    this.columns = 11
    this.rows = 11
    this.maxMoves = this.rows * this.columns
    this.matrix = this.buildMatrix()
  }

  move(player, row, column) {
    this.matrix[player.row][player.column] = null
    this.matrix[row][column] = player.char
    player.setPosition(row, column)
  }

  push(player, row, column) {
    this.matrix[row][column] = player.char
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
        const cell = this.matrix[row][column] || ' '
        process.stdout.write(`| ${cell} `)

        const isLastColumn = (column === this.columns - 1)
        if (isLastColumn) {
          process.stdout.write('|')
        }
      }
      process.stdout.write('\n')
    }
    process.stdout.write('\n\n')
  }

  getAvailablePositions() {
    const positions = []
    for (let row = 0; row < this.rows; row++) {
      for (let column = 0; column < this.columns; column++) {
        if (this.matrix[row][column] === null) {
          positions.push({ row, column })
        }
      }
    }
    return positions
  }

  isAtEdge(row, column) {
    if (row === 0
      || row === this.rows - 1
      || column === 0
      || column === this.columns - 1) {
      return true
    }
    return false
  }
}

export default Board
