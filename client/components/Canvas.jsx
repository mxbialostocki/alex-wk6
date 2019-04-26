import React from 'react'
import { retrieveOracles } from '../api'

class Canvas extends React.Component {
  state = {
    cards: []
  }

  componentDidMount () {
    retrieveOracles()
      .then(oracles => {
        this.setState({
          cards: oracles // drawThree(oracles)
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
