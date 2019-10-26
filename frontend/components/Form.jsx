import React, { Component } from 'react'

export default class Form extends Component {
  onSubmit () {
    console.log('clicked submit')
  }

  render () {
    return (
      <form id="Form" className="bg-dark">
        <h2 className="text-light">Sign Up</h2>
        <div className="form-group">
          <label htmlFor="email_input"></label>
          <input type="input" id="email_input" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="passwd_input"></label>
          <input type="password" id="passwd_input" placeholder="Passsword" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}
