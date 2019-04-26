import React from 'react'
import shuffle from 'lodash.shuffle'
import take from 'lodash.take'
import Card from './Card'

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
      <React.Fragment>
        <body>
          <div className= 'container'>
            <div className='section'>

              <div className='canvas'>
                <div className="columns">
                  {this.state.cards.map(card => {
                    return <Card key={card.id} image_url={card.image_url} message={card.message}/>
                  })}
                </div>

              </div>
              <div className='message'>
                <div className='tile is-parent'>
                  <article className='tile is-child box'>
                    <p className='title'>Reading:</p>
                    <p className='subtitle'>there needs to be a message in here Bam</p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </body>
      </React.Fragment>
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
