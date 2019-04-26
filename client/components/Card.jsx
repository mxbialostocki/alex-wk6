import React from 'react'

class Card extends React.Component {
  render () {
    return (
      <div className="column is-one-third">
        <div className='card large'>
          <div className="card-image">
            <figure className='image'>
              <img src={this.props.image_url} alt="card1"/>
            </figure>
          </div>
        </div>
      </div>
    )
  }
}

export default Card
