const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function retrieveOracles (db = connection) {
  return db('oracles')
    .select()
}

function randomOracles (db = connection, howMany) {
  return db('oracles')
    .orderByRaw('random()')
    .limit(howMany)
}

module.exports = {
  retrieveOracles: retrieveOracles,
  randomOracles
}
