import React from 'react'
import constants from '../constants'

import Editor from '../components/editor'
import Board from '../components/board'
import Button from '../components/button'


import './home.css'

const Home = () => (
  <main>
    <Board />

    <section className="Algorithms-area">

      <div className="Algorithm">
        <h2 className="Algorithm-title">
          Farmer Algorithm
        </h2>
        <Editor initialSource={constants.farmerAlgorithm} />
      </div>

      <div className="Algorithm">
        <h2 className="Algorithm-title">
          Pig Algorithm
        </h2>
        <Editor initialSource={constants.pigAlgorithm} />
      </div>
    </section>

  </main>
)

export default Home
