import React from 'react'
import { render } from 'react-dom'

import Editor from './components/editor'

const rootNode = document.createElement('div')

document.body.appendChild(rootNode)

render(
  <Editor initialSource="const add = (x, y) => x + y" />,
  rootNode,
)
