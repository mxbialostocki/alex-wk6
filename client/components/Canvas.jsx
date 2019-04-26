import React from 'react'
import { retrieveOracles } from '../api'

class Canvas extends React.Component {
oracleDeck = []
componentDidMount () {
  retrieveOracles()
    .then(oracles => {
      console.log('Canvas.jsx', oracles)
    })
}

render () {
  return (
    <h1>This renders Canvas Component</h1>
  )
}
}

export default Canvas
