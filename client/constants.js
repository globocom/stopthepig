export const PIG_RUNNING_IMAGE = 'https://camo.envatousercontent.com/0576285458c24547f047d7b880ddfb62b873d07d/687474703a2f2f7331322e726164696b616c2e72752f693138352f313631322f37622f3534326635373730353832312e676966'
export const PIG_FLYING_IMAGE = 'https://camo.envatousercontent.com/e6382e79b475267b4324e2dc3001c737ee2090f6/687474703a2f2f733031392e726164696b616c2e72752f693633362f313631322f61332f3131643635653664653039302e676966'

export const MOVES = [{
  board: 11,
  initial_state: [{ x: 4, y: 4 }, { x: 5, y: 4 }, { x: 6, y: 4 }, { x: 3, y: 5 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }],
  moves: [{
    player: 'P', action: 'move', x: 5, y: 5
  }, {
    player: 'F', action: 'block', x: 10, y: 10
  }, {
    player: 'P', action: 'move', x: 6, y: 5
  }, {
    player: 'F', action: 'block', x: 10, y: 9
  }, {
    player: 'P', action: 'move', x: 7, y: 5
  }, {
    player: 'F', action: 'block', x: 10, y: 8
  }, {
    player: 'P', action: 'move', x: 8, y: 5
  }, {
    player: 'F', action: 'block', x: 10, y: 7
  }, {
    player: 'P', action: 'move', x: 9, y: 5
  }, {
    player: 'F', action: 'block', x: 10, y: 6
  }, {
    player: 'P', action: 'finish', x: 10, y: 5
  }],
  winner: 'P',
  score: { P: { score: 5 }, F: { score: 5 } }
}]
