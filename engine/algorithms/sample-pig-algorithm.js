class SamplePigAlgorithm {
  move(availableMoves, board) {
    const randomMoveIndex = Math.round((availableMoves.length - 1) * Math.random())
    const randomMove = availableMoves[randomMoveIndex]
    return {
      row: randomMove.row,
      column: randomMove.column
    }
  }
}

export default SamplePigAlgorithm
