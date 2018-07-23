var port = process.env.PORT || 3000 // define a porta
// var morgan = require('morgan') // automatically log requests to the console (express4)
// var winston = require('winston) // mannually log stuff and save in a File
// configuration =================
var app = require('./config/express')()
var connection = require('./config/sequelize')()
var tables = require('./db/tables.js')(connection)
var controllers = require('./controllers')(tables)
require('./routes')(app, controllers)

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
