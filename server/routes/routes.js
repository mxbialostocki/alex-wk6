const express = require('express')
const db = require('../../db')
const router = express.Router()

router.get('/', (req, res) => {
  console.log('Root route')
  db.randomOracles(undefined, 3)
  // .retrieveOracles()
    .then(oracleDeck => {
      console.log(oracleDeck)
      res.send(oracleDeck)
    })
})

module.exports = router
