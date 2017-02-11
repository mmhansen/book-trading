const express    = require('express')
const bodyParser = require('body-parser')
const config     = require('./config')
const http       = require('debug')('http')
const db         = require('debug')('db')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  res
    .status(200)
    .json({
      body: 'Cut it.'
    })
})

app.listen(config.port, () => {
  http('server running on port: ' + config.port)
})

module.exports = app
