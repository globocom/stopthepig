class Board {
  constructor() {
    this.width = 7
    this.height = 6
    this.maxMoves = this.width * this.height
    this.matrix = this.buildMatrix()
  }

  push(player, column) {
    const row = this.matrix[column].lastIndexOf(null)

    if (row < 0) return false

    this.matrix[column][row] = player.char

    return [column, row]
  }

  cloneBoard() {
    const clone = []
    for (const column in this.matrix) {
      clone.push(this.matrix[column].slice(0))
    }
    return clone
  }

  buildMatrix() {
    const matrix = []

    for (let i = 0; i < this.width; i++) { // columns
      matrix[i] = []
      for (let j = 0; j < this.height; j++) { // rows
        matrix[i][j] = null
      }
    }

    return matrix
  }

  getAvailableColumns() {
    const positions = []

    for (const column in this.matrix) {
      if (this.matrix[column].lastIndexOf(null) >= 0)
        positions.push(parseInt(column))
    }

    return positions
  }

  draw() {
    for (const row = 0; row < this.height; row++) {
      for (const column = 0; column < this.width; column++) {
        const cell = this.matrix[column][row] || ' '
        process.stdout.write("| " + cell + " ")
      }
      process.stdout.write("\n")
    }
  }

  getAvailableColumns() {
    const positions = []

    for (const column in this.matrix) {
      if (this.matrix[column].lastIndexOf(null) >= 0)
        positions.push(parseInt(column))
    }

    return positions
  }

  draw() {
    for (const row = 0; row < this.height; row++) {
      for (const column = 0; column < this.width; column++) {
        const cell = this.matrix[column][row] || ' '
        process.stdout.write("| " + cell + " ")
      }
      process.stdout.write("\n")
    }
  }
}

export default Board
