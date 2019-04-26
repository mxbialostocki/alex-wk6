import React from 'react'
import Homepage from './Homepage'
import Main from './Main'

import { Route } from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <React.Fragment >
        <h1>Welcome to Matakite</h1>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Canvas" render={() =>
          <Main />}/>

      </React.Fragment>
    )
  }
}

export default App
