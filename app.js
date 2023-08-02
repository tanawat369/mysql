const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const rut955 = require('./rut955/rut955')
const cors = require('cors')
const morgan = require('morgan')

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors())

app.use('/site1',rut955)
app.use(morgan('dev'))

module.exports = app