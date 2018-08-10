export const PIG_RUNNING_IMAGE = 'https://camo.envatousercontent.com/0576285458c24547f047d7b880ddfb62b873d07d/687474703a2f2f7331322e726164696b616c2e72752f693138352f313631322f37622f3534326635373730353832312e676966'
export const PIG_FLYING_IMAGE = 'https://camo.envatousercontent.com/e6382e79b475267b4324e2dc3001c737ee2090f6/687474703a2f2f733031392e726164696b616c2e72752f693633362f313631322f61332f3131643635653664653039302e676966'

export default {
  farmerAlgorithm: `'use strict';

/*
  * A função Algorithm encapsula a lógica das jogadas.
  * A instância do Algorithm persiste durante toda a partida.
  */

function Algorithm () {

    /*
      * Cada chamada de 'move' corresponde a uma peça jogada.
      * Esse recebe as colunas disponíveis do tabuleiro
      * e o estado atual do mesmo.
      */

    this.move = function (availableColumns, gameBoard) {

        /*
          * Exemplo dos argumentos passados
          *
          * availableColumns: [0, 1, 2, 3, 4, 5, 6]
          *
          * gameBoard: [
          *  [null, null, null, null, null, null], // 0
          *  [null, null, null, null, null, null], // 1
          *  [null, null, null, null, null, null], // 2
          *  [null, null, null, null, null, null], // 3
          *  [null, null, null, null, null, null], // 4
          *  [null, null, null, null, null, null], // 5
          *  [null, null, null, null, null, null], // 6
          * ]
          *
          * O retorno deve ser o índice númerico
          * de uma coluna válida, para que a jogada
          * seja realizada com sucesso.
          */

        return availableColumns[0];
    }
}
  `,
  pigAlgorithm: `import React from 'react'
import { render } from 'react-dom'

import Home from './pages/home'

import './app.css'

const rootNode = document.createElement('div')

document.body.appendChild(rootNode)

render(
  <Home />,
  rootNode,
)`
}
