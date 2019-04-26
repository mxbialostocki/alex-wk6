import request from 'superagent'

export function retrieveOracles () {
  return request.get('/api/')
    .then(response => {
      console.log('api.js sends ' + response.body)
      const oracleDeck = response.body
      return oracleDeck
    })
    .catch(() => {
      throw Error('Requires / api route')
    })
}
