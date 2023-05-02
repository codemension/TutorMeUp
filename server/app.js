require('dotenv').config({
    path: __dirname + '/.env'
})
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.static('build'))

app.get('/', (req, res) => {
    res.send('<h1>Server is Running</h1>')
})

module.exports = app