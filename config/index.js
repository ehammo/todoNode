const development = require('./env/development')
const production = require('./env/production')

if (process.env.NODE_ENV != null) {
  env = process.env.NODE_ENV.trim()
} else {
  env = 'production'
}

development.operatorsAliases = require('./operators')
production.operatorsAliases = require('./operators')

module.exports = {
  development: development,
  production: production
}[env]

/*

if (process.env.NODE_ENV != null) {
  env = process.env.NODE_ENV.trim()
} else {
  env = 'production'
}

development.operatorsAliases = require('./operators')
production.operatorsAliases = require('./operators')

module.exports = {
  development: development,
  production: production
}[env]


*/