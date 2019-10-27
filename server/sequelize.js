const Sequelize = require('sequelize')

module.exports = app => {
  const connectionString = 'postgres://todo-app@localhost:5432/todo-app'

  const sequelize = new Sequelize(connectionString, {
    dialect: 'postgres',
    define: {
      freezeTableName: true
    }
  })

  sequelize.sync()

  app.set('sequelize', sequelize)
  app.set('paginate', {
    default: 10,
    max: 50
  })
}
