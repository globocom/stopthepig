import React from 'react'
import { render } from 'react-dom'

import Home from './pages/home'

import './app.css'

const rootNode = document.createElement('div')

document.body.appendChild(rootNode)

render(
  <Home />,
  rootNode,
)
