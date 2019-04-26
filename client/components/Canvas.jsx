import React from 'react'
import { retrieveOracles } from '../api'

class Canvas extends React.Component {
  state = {
    cards: []
  }

  componentDidMount () {
    retrieveOracles()
      .then(oracles => {
        console.log(oracles)
        this.setState({
          cards: drawThree(oracles)
        })
        console.log(this.state.cards)
      })
  }

  render () {
    return (
      <h1>This renders Canvas Component</h1>
    )
  }
}

export default Canvas

// function drawThree (oracleDeck) {
//   const drawThree = []
//   while (drawThree.length < 4) {
//     drawThree.push(oracleDeck[Math.floor(Math.random() * oracleDeck.length)])
//   }
//   return drawThree
// }

function drawThree (cards) {
  const selection = []

  for (let i = 0; i < 3; i++) {
    const randomCard = cards[Math.floor(Math.random() * cards.length)]
    if (!selection.includes(randomCard)) {
      selection.push(randomCard)
    } else {
      i--
    }
  }

  return selection
}
