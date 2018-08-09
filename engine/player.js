class Player {
  constructor(char) {
    this.char = char
    this.row = null
    this.column = null
  }

  setPosition(row, column) {
    this.row = row
    this.column = column
  }
}

class Pig extends Player {
  constructor() {
    super("P")
    this.row = 5
    this.column = 5
  }

  getPossibleMovements(availablePositions) {
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
      ]);
    } else {
      possibleMovements = possibleMovements.concat([
        { row: this.row - 1, column: this.column - 1 },
        { row: this.row + 1, column: this.column - 1 }
      ]);
    }

    let _availablePositions = availablePositions.map(
      position => `${position.row}:${position.column}`
    )

    return possibleMovements.filter(position => {
      return _availablePositions.includes(`${position.row}:${position.column}`)
    })
  }
}

class Farmer extends Player {
  constructor() {
    super("F")
  }
}

export {Pig, Farmer}
