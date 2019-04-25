import React from 'react'
import Canvas from './Canvas'

import Homepage from './Homepage'

class App extends React.Component {
  render () {
    return (
      <React.Fragment >
        <h1>Hello THIS World!</h1>
        <Homepage/>
        <Canvas />
      </React.Fragment>
    )
  }
}

export default App
