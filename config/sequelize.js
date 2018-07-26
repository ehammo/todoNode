var Sequelize = require('sequelize') 
const config = require('./')
// const env = process.env.NODE_ENV || 'development'

module.exports = () => {
  // Create connection with the information set on config
  var connection = new Sequelize(config.db, config.user, config.password, {
    host: config.host,
    dialect: config.dialect,
    dialectOptions: config.dialectOptions,
    operatorsAliases:config.operatorsAliases
  })
  // app.use(passport.initialize())
  // app.use(passport.session())

  // Authenticate connection
  connection
    .authenticate()
    .then(function () {
      console.log('Connection has been established successfully.')
    })
    .catch(function (err) {
      console.log('Unable to connect to the database:', err)
    })
  return connection
}
