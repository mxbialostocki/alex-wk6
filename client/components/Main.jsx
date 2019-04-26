import React from 'react'

export default class Main extends React.Component {
  render () {
    return (
      <body>
        <div className= 'container'>
          <div className='section'>

            <div className='canvas'>
              <div className="columns">
                <div className="column is-one-third">
                  <div className='card large'>
                    <div className="card-image">
                      <figure className='image'>
                        <img src="https://imgix.bustle.com/rehost/2016/10/21/38e410b9-178f-4d1b-9f4d-0b3c3569b9d4.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70" alt="card1"/>
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="column is-one-third">
                  <div className='card large'>
                    <div className="card-image">
                      <figure className='image'>
                        <img src="https://imgix.bustle.com/rehost/2016/10/21/38e410b9-178f-4d1b-9f4d-0b3c3569b9d4.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70" alt="card2"/>
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="column is-one-third">
                  <div className='card large'>
                    <div className="card-image">
                      <figure className='image'>
                        <img src={'https://imgix.bustle.com/rehost/2016/10/21/38e410b9-178f-4d1b-9f4d-0b3c3569b9d4.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70'} alt="card3"/>
                      </figure>
                    </div>
                  </div>
                </div>
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

    )
  }
}
