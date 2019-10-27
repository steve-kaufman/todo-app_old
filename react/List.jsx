import React from 'react'
import app from 'app'

export default class List extends React.Component {
  constructor () {
    super()
    this.state = {
      todos: []
    }

    app.service('todos').on('created', this.onCreate.bind(this))
  }

  componentDidMount () {
    this.onCreate()
  }

  async onCreate () {
    const todos = await app.service('todos').find()
    this.setState({
      todos: todos.data
    })
  }

  render () {
    return (
      <ul className="list-group text-dark">
        { this.state.todos.map((todo, index) => {
          return (
            <li key={index}
              className="list-group-item d-flex justify-content-between align-items-center">
              { todo.name }
              <input type="checkbox" />
            </li>
          )
        })}
      </ul>
    )
  }
}
