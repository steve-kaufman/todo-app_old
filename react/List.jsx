import React from 'react'
import Todo from './components/Todo.jsx'

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

  setCompleted (isCompleted, id) {
    app.service('todos').patch(id, {
      completed: isCompleted
    })
  }

  render () {
    return (
      <ul className="list-group text-dark">
        { this.state.todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              todo={todo}
              setCompleted={this.setCompleted.bind(this)}
            />
          )
        })}
      </ul>
    )
  }
}
