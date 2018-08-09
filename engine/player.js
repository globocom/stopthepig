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
  }
}

class Farmer extends Player {
  constructor() {
    super("F")
  }

  setPosition(row, column) {
    this.row = row
    this.column = column
  }
}

export {Player, Pig}
