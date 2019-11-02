import React from 'react'
import PropTypes from 'prop-types'

export default class Todo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isCompleted: this.props.todo.completed
    }
  }

  clicked (e) {
    const isChecked = e.target.checked

    this.setState({
      isCompleted: isChecked
    })

    this.props.setCompleted(isChecked, this.props.todo.id)
  }

  render () {
    const style = {
      color: null, textDecoration: null
    }

    if (this.state.isCompleted) {
      style.color = '#666'
      style.textDecoration = 'line-through'
    } else {
      style.color = 'black'
      style.textDecoration = 'none'
    }

    return (
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        style={style}>
        { this.props.todo.name }
        <input
          type="checkbox"
          onClick={ this.clicked.bind(this) }
          defaultChecked={ this.state.isCompleted || null }
        />
      </li>
    )
  }
}

Todo.propTypes = {
  todo: PropTypes.object,
  setCompleted: PropTypes.func
}
