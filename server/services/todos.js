const service = require('feathers-sequelize')
const createModel = require('../models/todos.model')
const hooks = require('../hooks/todos.hooks')

module.exports = app => {
  const Model = createModel(app)
  const paginate = app.get('paginate')

  app.use('/todos', service({ Model, paginate }))

  app.service('todos').hooks(hooks)
}
