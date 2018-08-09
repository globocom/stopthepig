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
    player.setPosition(row, column)
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
        process.stdout.write(`| ${cell} `)
      }
      process.stdout.write('\n')
    }
  }

  getAvailablePositions() {
    const positions = []
    for (let row = 0; row < this.rows; row++) {
      for (let column = 0; column < this.columns; column++) {
        if (this.matrix[column][row] === null) {
          positions.push({ row, column })
        }
      }
    }
    return positions
  }

  isAtEdge(player) {
    if (player.row === 0
      || player.row === this.rows - 1
      || player.column === 0
      || player.column === this.columns - 1) {
      return true
    }
    return false
  }
}

export default Board
