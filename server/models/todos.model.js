const Sequelize = require('sequelize')

module.exports = app => {
  const sequelize = app.get('sequelize')
  const todos = sequelize.define('todos', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    completed: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    hooks: {
      beforeCount (options) {
        options.raw = true
      }
    }
  })

  return todos
}
