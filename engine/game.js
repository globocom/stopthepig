import vm  from 'vm'

import Board  from './board'

const moveTimeout = 500

class Game {
  constructor(player1, player2) {
    this.player1Context = { Player: player1.klass }
    this.player2Context = { Player: player2.klass }

    vm.createContext(this.player1Context)
    vm.createContext(this.player2Context)

    vm.runInContext("const player = new Player", this.player1Context)
    vm.runInContext("const player = new Player", this.player2Context)

    player1.context = this.player1Context
    player2.context = this.player2Context

    this.board = new Board()
    this.players = [player1, player2]
    this.playerMoving = null
  }

  run() {
    const result = {
      winner: null,
      reason: null,
      moves: [],
      sequence: []
    }

    for (const play = 0; play < this.board.maxMoves; play++) {
      const currentPlayer = this.players[play % 2]
      this.playerMoving = currentPlayer

      const columns = this.board.getAvailableColumns()

      const currentBoard = this.board.cloneBoard()
      const currentColumns = columns.slice(0)
      const column = null

      currentPlayer.context.moveResult = null

      // We used json stringify/parse to avoid prototype copying.
      currentPlayer.context.board = JSON.stringify(currentBoard)
      currentPlayer.context.columns = JSON.stringify(currentColumns)

      const currentCode = ["const b = JSON.parse(board) " +
                           "const c = JSON.parse(columns) " +
                           "board = columns = null " +
                           "const moveResult = player.move(c, b)"].join('')
      try {

        vm.runInContext(currentCode,
                        currentPlayer.context,
                        { timeout: moveTimeout, displayErrors: false })

        column = currentPlayer.context.moveResult

      } catch (e) {
        console.log('Error running player:', currentPlayer.username, ', error: ' , e)
        column = null
      }

      if (column === null || columns.indexOf(column) < 0) {
        result.winner = { username: this.players[(play + 1) % 2].username }
        result.reason = Game.status.INVALID_MOVE
        result.invalidMove = column
        break
      }

      const move = this.board.push(currentPlayer, column)
      result.moves.push({
        username: currentPlayer.username,
        move: move
      })

      const matchSequence = this.matchAnalyzer()
      if (matchSequence) {
        result.winner = { username: currentPlayer.username }
        result.reason = Game.status.LIG4
        result.sequence = matchSequence
        break
      }
    }

    if (!result.winner) {
      result.reason = Game.status.DRAW
    }

    return result
  }

  matchAnalyzer() {
    const match = null

    for (let column = 0; column < this.board.width; column++) {
      const columns = this.board.matrix[column]

      if (match) {
        break
      }

      for (let row = 0; row < this.board.height; row++) {
        const position = columns[row]

        if (position == null) {
          continue
        }

        // vertical
        if (columns[row + 1] == position &&
          columns[row + 2] == position &&
          columns[row + 3] == position) {
          match = [[column, row], [column, row + 1],
                   [column, row + 2], [column, row + 3]]
          break
        }

        // horizontal
        if (this.board.matrix[column] &&
          this.board.matrix[column + 3] &&
          this.board.matrix[column + 1][row] == position &&
          this.board.matrix[column + 2][row] == position &&
          this.board.matrix[column + 3][row] == position) {
          match = [[column, row], [column + 1, row],
                   [column + 2, row], [column + 3, row]]
          break
        }

        // diagonal right
        if (this.board.matrix[column] &&
          this.board.matrix[column + 3] &&
          this.board.matrix[column + 1][row + 1] == position &&
          this.board.matrix[column + 2][row + 2] == position &&
          this.board.matrix[column + 3][row + 3] == position) {
          match = [[column, row], [column + 1, row + 1],
                   [column + 2, row + 2], [column + 3, row + 3]]
          break
        }
        // diagonal left
        if (this.board.matrix[column] &&
          this.board.matrix[column + 3] &&
          this.board.matrix[column + 1][row - 1] == position &&
          this.board.matrix[column + 2][row - 2] == position &&
          this.board.matrix[column + 3][row - 3] == position) {
          match = [[column, row], [column + 1, row - 1],
                   [column + 2, row - 2], [column + 3, row - 3]]
          break
        }
      }
    }

    return match
  }
}


export default Game
