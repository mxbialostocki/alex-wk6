import React from 'react'
import Homepage from './Homepage'
import Canvas from './Canvas'


import { Route } from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <React.Fragment >
        <h1>Welcome to Tarot House</h1>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Canvas" render={() =>
          <Canvas />}/>

      </React.Fragment>
    )
  }
}

export default App
