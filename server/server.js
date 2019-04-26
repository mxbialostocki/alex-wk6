const path = require('path')
const express = require('express')
const cors = require('cors')

const homeRoutes = require('./routes/routes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors())

// server.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../server/public/index.html'))
// })

server.use('/api', homeRoutes)

module.exports = server
