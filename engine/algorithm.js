export class Algorithm {
  constructor(algorithmType, klass) {
    try {
      if (klass.constructor == Function) {
        this.instance = new klass()
      } else {
        // hydrate text code
        const _klass = (new Function('window', 'document', `${klass};return ${algorithmType};`)).call({}, {}, {})
        this.instance = new _klass()
      }
    } catch (error) {
      throw new Error(`Error loading ${algorithmType}: ${klass} - ${error}`)
    }
  }
}


export class SampleFarmerAlgorithm {

  setInitialFencesPosition(availablePositions, board) {
    return [
      {row:4, column:4},
      {row:4, column:5},
      {row:4, column:6},
      {row:6, column:4},
      {row:6, column:5},
      {row:6, column:6},
      {row:5, column:4},
    ]
  }

  setFencesPosition(availablePositions, board) {
    const randomPositionIndex = Math.round((availablePositions.length - 1) * Math.random())
    const randomPosition = availablePositions[randomPositionIndex]
    return {
      row: randomPosition.row,
      column: randomPosition.column,
    }
  }
}


export class SamplePigAlgorithm {

  move(availableMoves, board) {
    const randomMoveIndex = Math.round((availableMoves.length - 1) * Math.random())
    const randomMove = availableMoves[randomMoveIndex]
    return {
      row:randomMove.row,
      column:randomMove.column
    }
  }
}
