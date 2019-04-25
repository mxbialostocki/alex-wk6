import React from 'react'

export default class Homepage extends React.Component {
  state= {
    username: '',
    message: ''
  }

  changeHandler = e => {
    const message = 'You have failed the first test - please enter a name not a number'
    if (e.target.name !== isNaN && e.target.value.length === 0) {
      console.log(message)
    }
  }
    submitHanlder = e => {
      const message = 'You have failed the first test - please enter a name not a number'
      e.preventDefault()
      this.setState({
        [e.target.name]: e.target.value,
        message
      })
    }
    render () {
      return (
        <React.Fragment>
          <form onSubmit={this.submitHanlder}>
            <input
              type="text"
              value = {this.state.username}
              onChange={this.changeHandler}
              placeholder="Your Name"
              name="username" />
            <input
              type="submit"
              value="submit"/>
          </form>
          <p>{this.state.message}</p>
        </React.Fragment>
      )
    }
}
