import React from 'react'

export default class Header extends React.Component {
  render () {
    return (

      <navbar className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://www.youtube.com/watch?v=Ulr5gKLrIes">
            <img src="https://imgix.bustle.com/rehost/2016/10/21/38e410b9-178f-4d1b-9f4d-0b3c3569b9d4.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70" width="80" height="30" />
          </a>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href='/'>
                Home
            </a>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            {/* <div className="buttons"> */}
            <a className="tileTOP">
              <strong>Alex Team</strong>
            </a>
            <span> </span>
            <a className="tileTOP">
                  The  Forshadowing
            </a>
            {/* </div> */}
          </div>
        </div>

      </navbar>

    )
  }
}
