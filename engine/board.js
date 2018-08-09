class Board {
  constructor() {
    this.width = 11
    this.height = 11
    this.maxMoves = this.width * this.height
    this.matrix = this.buildMatrix()
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
