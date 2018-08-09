import React from 'react'
import { render } from 'react-dom'

const rootNode = document.createElement('div')

document.body.appendChild(rootNode)

render(
  <h1>Hello</h1>,
  rootNode,
)
