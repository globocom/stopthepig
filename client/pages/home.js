import React from 'react'
import sampleFarmerAlgorithm from '!raw-loader!../../engine/algorithms/sample-farmer-algorithm'
import samplePigAlgorithm from '!raw-loader!../../engine/algorithms/sample-pig-algorithm'
import pigImage from '!file-loader!../../docs/logo.png'

import Editor from '../components/editor'
import Board from '../components/board'

import './home.css'

const movePig = () => {
  const message = { "board": 11, "initial_state": [ { "x": 4, "y": 4 }, { "x": 5, "y": 4 }, { "x": 6, "y": 4 }, { "x": 3, "y": 5 }, { "x": 4, "y": 6 }, { "x": 5, "y": 6 }, { "x": 6, "y": 6 } ], "moves": [ { "player": "P", "action": "move", "x": 5, "y": 5 }, { "player": "F", "action": "block", "x": 10, "y": 10 }, { "player": "P", "action": "move", "x": 6, "y": 5 }, { "player": "F", "action": "block", "x": 10, "y": 9 }, { "player": "P", "action": "move", "x": 7, "y": 5 }, { "player": "F", "action": "block", "x": 10, "y": 8 }, { "player": "P", "action": "move", "x": 8, "y": 5 }, { "player": "F", "action": "block", "x": 10, "y": 7 }, { "player": "P", "action": "move", "x": 9, "y": 5 }, { "player": "F", "action": "block", "x": 10, "y": 6 }, { "player": "P", "action": "finish", "x": 10, "y": 5 } ], "winner": "P", "score": { "P": { "score": 5 }, "F": { "score": 5 } } };
  const sendMessage = (instance, message) => {
    instance.SendMessage(
      'GameManager',
      'GameRenderer',
      JSON.stringify(message)
    )
  }
  sendMessage(window.instance, message)
}

const Home = () => (
  <main>
    <header>
      <img src={pigImage} alt="Logo" />
    </header>

    <Board />

    <button
      className="Button"
      onClick={() => movePig()}>TESTAR</button>

    <section className="Algorithms-area">

      <div className="Algorithm">
        <h2 className="Algorithm-title">
          Farmer Algorithm
        </h2>
        <Editor initialSource={sampleFarmerAlgorithm} />
      </div>

      <div className="Algorithm">
        <h2 className="Algorithm-title">
          Pig Algorithm
        </h2>
        <Editor initialSource={samplePigAlgorithm} />
      </div>
    </section>

  </main>
)

export default Home
