import React from 'react'

const buttonStyle = {
  width: '38px',
  height: '38px',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '0'
}

export default class Form extends React.Component {
  submit (e) {
    e.preventDefault()
  }

  render () {
    return (
      <form onSubmit={ this.submit.bind(this) }
        className="form-inline bg-light text-dark p-3 justify-content-between">
        <div className="form-group">
          <label htmlFor="name" className="h5 mr-2">Name:</label>
          <input id="name" className="form-control" type="text" />
        </div>
        <button type="submit" className="btn btn-danger rounded-circle ml-2"
          style={ buttonStyle }>+</button>
      </form>
    )
  }
}
