const development = require('./env/development')
const production = require('./env/production')

var env
if (process.env.NODE_ENV != null) {
  env = process.env.NODE_ENV.trim()
} else {
  env = 'production'
}

module.exports = {
  development: development,
  production: production
}[env]
