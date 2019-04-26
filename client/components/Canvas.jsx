import React from 'react'
import shuffle from 'lodash.shuffle'
import take from 'lodash.take'

import { retrieveOracles } from '../api'

class Canvas extends React.Component {
  state = {
    cards: []
  }

  componentDidMount () {
    retrieveOracles()
      .then(oracles => {
        this.setState({
          cards: draw(oracles, 3) // drawThree(oracles)
        })
        console.log(this.state.cards)
      })
  }

  render () {
    return (
      <h1>Welcome </h1>
    )
  }
}

export default Canvas

// function drawThree (cards) {
//   const selection = []

//   for (let i = 0; i < 3; i++) {
//     const randomCard = cards[Math.floor(Math.random() * cards.length)]
//     if (!selection.includes(randomCard)) {
//       selection.push(randomCard)
//     } else {
//       i--
//     }
//   }

//   return selection
// }

function draw (cards, howMany) {
  return take(shuffle(cards), howMany)
}
