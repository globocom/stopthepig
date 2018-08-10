import React from 'react'

import UnityLoader from 'unity-loader'
import UnityProgress from 'unity-progress'

// require("file?name=unity.json!../../../unity/Build/test_communication.json");
import unitBuild from '!file-loader!../../../unity/Build/test_communication.json'

import { PIG_FLYING_IMAGE } from '../../constants'


const message = { board: 9, 'initial_state': [{ x: 3, 'y': 3 }, { 'x': 3, 'y': 4 }, { x: 3, y: 5 }, { x: 4, y: 3 }, { 'x': 5, 'y': 3 }, { x: 5, y: 4 }, { 'x': 5, 'y': 5 }], moves: [{ player: 'P', 'action': 'move', 'x': 5, 'y': 5 }, { 'player': 'F', 'action': 'block', x: 10, 'y': 10 }, { player: 'P', action: 'move', 'x': 6, y: 5 }, { player: 'F', 'action': 'block', x: 10, y: 9 }, { player: 'P', 'action': 'move', x: 7, 'y': 5 }, { 'player': 'F', action: 'block', 'x': 10, y: 8 }, { 'player': 'P', 'action': 'move', 'x': 8, y: 5 }, { player: 'F', action: 'block', x: 10, y: 7 }, { player: 'P', action: 'move', 'x': 9, y: 5 }, { player: 'F', action: 'block', 'x': 10, 'y': 6 }, { player: 'P', action: 'finish', 'x': 10, y: 5 }], winner: 'P', 'score': { P: { 'score': 5 }, 'F': { score: 5 } } };
let instance = null

const sendMessage = (instance, message) => {
  instance.SendMessage(
    'GameManager',
    'GameRenderer',
    JSON.stringify(message)
  )
}

console.log(unitBuild)

const initUnit = () => {
  instance = UnityLoader.instantiate(
    'gameContainer',
    unitBuild, {
      onProgress: UnityProgress
    }
  )
}

const Board = () => (
  <div className="Board">
    <div id="gameContainer"></div>
    <img src={PIG_FLYING_IMAGE} alt="Pig Loader" />
  </div>
)

initUnit();

export default Board
