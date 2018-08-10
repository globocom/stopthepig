import React from 'react'
import sampleFarmerAlgorithm from '!raw-loader!../../engine/algorithms/sample-farmer-algorithm'
import samplePigAlgorithm from '!raw-loader!../../engine/algorithms/sample-pig-algorithm'
import pigImage from '!file-loader!../../logo.png'

import Editor from '../components/editor'
import Board from '../components/board'
import { MOVES } from '../constants'

import './home.css'

const movePig = () => {
  const message = MOVES[0]
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

      <button
        className="Button"
        onClick={() => movePig()}
      >TESTAR
      </button>
    </header>

    <Board />

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
