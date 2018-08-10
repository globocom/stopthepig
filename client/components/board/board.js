import React from 'react'

import UnityLoader from 'unity-loader'
import UnityProgress from 'unity-progress'

import unitBuild from '../../../unity/Build/test_communication.json'

import { PIG_FLYING_IMAGE } from '../../constants'

let instance = null

const initUnit = () => {
  instance = UnityLoader.instantiate(
    'gameContainer',
    `./${unitBuild}`, {
      onProgress: UnityProgress
    }
  )
}

const Board = () => (
  <div className="Board">
    <div id="gameContainer" style={{ width: '100%', height: '100%' }} />
  </div>
)

initUnit()
window.instance = instance

export default Board
