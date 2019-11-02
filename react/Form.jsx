import React from 'react'
import app from 'app'

const buttonStyle = {
  width: '38px',
  height: '38px',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '0'
}

export default class Form extends React.Component {
  constructor () {
    super()
    this.state = {
      nameInput: ''
    }
  }

  submit (e) {
    e.preventDefault()
    app.service('todos').create({ name: this.state.nameInput })
  }

  onNameChange (e) {
    this.setState({
      nameInput: e.target.value
    })
  }

  render () {
    return (
      <form onSubmit={ this.submit.bind(this) }
        className="form-inline bg-light text-dark p-3 justify-content-between">
        <div className="form-group">
          <label htmlFor="name" className="h5 mr-2">Name:</label>
          <input onChange={ this.onNameChange.bind(this) } id="name" className="form-control" type="text" />
        </div>
        <button type="submit" className="btn btn-success rounded-circle ml-2"
          style={ buttonStyle }>+</button>
      </form>
    )
  }
}
