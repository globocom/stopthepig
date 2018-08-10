class SampleFarmerAlgorithm {
  setInitialFencesPosition(availablePositions, board) {
    return [
      { row: 4, column: 4 },
      { row: 4, column: 5 },
      { row: 5, column: 5 },
      { row: 4, column: 6 },
      { row: 6, column: 4 },
      { row: 6, column: 5 },
      { row: 6, column: 6 },
      { row: 5, column: 4 }
    ]
  }

  setFencesPosition(availablePositions, board) {
    const randomPositionIndex = Math.round((availablePositions.length - 1) * Math.random())
    const randomPosition = availablePositions[randomPositionIndex]
    return {
      row: randomPosition.row,
      column: randomPosition.column
    }
  }
}

export default SampleFarmerAlgorithm
