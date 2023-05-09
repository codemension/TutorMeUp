/**
 * @fileoverview This file is the main file of the server. It contains the express app and the routes.
 * @description This file is the main file of the server. It contains the express app and the routes.
 */


/**
 * @description Import dependencies
 * @param {object} dotenv - The dotenv module
 * @param {object} express - The express module
 * @param {object} cors - The cors module
 * @param {object} morgan - The morgan module
 * @param {object} routes - The routes module
 * @returns {void}
 */
require('dotenv').config({
    path: __dirname + '/.env'
})
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const routes = require('./routes')

/**
 * @description create the express app
 * @returns {object} app - The express app
 */
const app = express()


/**
 * @description add middlewares
 * @param {object} cors - The cors module
 * @param {object} morgan - The morgan module
 * @param {object} express.json - The express.json module
 * @param {object} express.static - The express.static module
 * @returns {void}
 */
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.static('build'))



/**
 * @description add routes
 * @param {object} routes - The routes module
 * @returns {void}
 */
app.get('/', (req, res) => {
    res.send('<h1>Server is Running</h1>')
})
app.use('/api', routes)


module.exports = app