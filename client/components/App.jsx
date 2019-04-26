import React from 'react'
import Header from './Header'
import Main from './Main'

class App extends React.Component {
  render () {
    return (
      <React.Fragment >
        <Header />
        <h1>Welcome to The Forshadowing</h1>
        
        <Main />


      </React.Fragment>
    )
  }
}

export default App
