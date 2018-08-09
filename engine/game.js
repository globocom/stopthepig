import Board  from './board'


class Game {
  constructor(pig, farmer) {
    this.winner = null
    this.board = new Board()
    this.players = [pig, farmer]
    this.moves = []
  }

  run() {
    const maxMoves = this.board.maxMoves

    for (const currentMove = 0; currentMove < maxMoves; currentMove++) {
      const currentPlayer = this.players[currentMove % 2]
    }

    return {
      winner: this.winner,
      board: this.board,
      score: this.score
    }
  }
}


export default Game
