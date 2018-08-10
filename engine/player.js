export class Player {
  constructor(char, algorithm) {
    this.char = char
    this.algorithm = algorithm
    this.score = 0
  }
}

export class Pig extends Player {
  constructor(algorithm) {
    super('P', algorithm)
    this.row = 5
    this.column = 5
  }

  setPosition(row, column) {
    this.row = row
    this.column = column
  }

  getPossibleMovements(availablePositions) {
    // BUG: we have a wird bug here

    // Board Setp
    // |   |   |   |   |   |   |   |   |   |   |
    // |   |   |   |   |   |   |   |   |   |   |
    // |   |   |   |   |   |   |   |   |   |   |
    // |   |   |   |   |   |   |   |   |   |   |
    // |   |   |   |   | F | F | F |   |   |   |
    // |   |   |   |   | F | P | F |   |   |   |
    // |   |   |   |   | F |   | F |   |   |   |
    // |   |   |   |   |   |   |   |   |   |   |
    // |   |   |   |   |   |   |   |   |   |   |
    // |   |   |   |   |   |   |   |   |   |   |
    // |   |   |   |   |   |   |   |   |   |   |


    // Move 0 - Player P
    // |   |   |   |   |   |   |   |   |   |   |
    // |   |   |   |   |   |   |   |   |   |   |
    // |   |   |   |   |   |   |   |   |   |   |
    // |   |   |   |   |   |   |   |   |   |   |
    // |   |   |   |   | F | F | F |   |   |   |
    // |   |   |   |   | F |   | P |   |   |   |
    // |   |   |   |   | F |   | F |   |   |   |
    // |   |   |   |   |   |   |   |   |   |   |
    // |   |   |   |   |   |   |   |   |   |   |
    // |   |   |   |   |   |   |   |   |   |   |
    // |   |   |   |   |   |   |   |   |   |   |

    // FIX: why did the P go to the right?

    let possibleMovements = [
      { row: this.row, column: this.column - 1 },
      { row: this.row, column: this.column + 1 },
      { row: this.row - 1, column: this.column },
      { row: this.row + 1, column: this.column }
    ]

    if (this.row % 2) {
      possibleMovements = possibleMovements.concat([
        { row: this.row - 1, column: this.column + 1 },
        { row: this.row + 1, column: this.column + 1 }
      ])
    } else {
      possibleMovements = possibleMovements.concat([
        { row: this.row - 1, column: this.column - 1 },
        { row: this.row + 1, column: this.column - 1 }
      ])
    }

    const _availablePositions = availablePositions.map(
      position => `${position.row}:${position.column}`
    )

    return possibleMovements.filter(position => _availablePositions.includes(`${position.row}:${position.column}`))
  }

  play(availablePositions, board) {
    this.score += 1
    return this.algorithm.move(
      this.getPossibleMovements(availablePositions),
      board,
    )
  }
}

export class Farmer extends Player {
  constructor(algorithm) {
    super('F', algorithm)
  }

  getInitialFencesPosition(availablePositions, board) {
    return this.algorithm.setInitialFencesPosition(
      availablePositions,
      board,
    )
  }

  play(availablePositions, board) {
    this.score += 1
    return this.algorithm.setFencesPosition(
      availablePositions,
      board,
    )
  }
}
