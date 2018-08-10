import React from 'react'
import sampleFarmerAlgorithm from 'raw-loader!../../engine/algorithms/sample-farmer-algorithm'
import samplePigAlgorithm from 'raw-loader!../../engine/algorithms/sample-pig-algorithm'

import Editor from '../components/editor'
import Board from '../components/board'

import './home.css'

const Home = () => (
  <main>
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
