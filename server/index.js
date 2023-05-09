/**
 * @file index.js is the root file for this server app
 * @description This file is the root file for this server app
 */


/**
 * @description Import dependencies
 * @param {object} http - The http module
 * @param {object} app - The app module
 * @param {object} logger - The logger module
 */
require('dotenv').config()
const http = require('http') // http is a built-in package
const app = require('./app') // app is a custom module
const server = http.createServer(app) // createServer is a method of http
const logger = require('./utils/logger.util') // logger is a custom module
const dbconfig = require('./config/db.config') // db is a custom module


/**
 * @description Define constants
 */
const PORT = process.env.PORT || 5000 // PORT is an environment variable


/**
 * @description Connect to the database
 * @param {object} dbconfig - The dbconfig module
 * @returns {void}
 * @async
 */
dbconfig.connectDB()



/**
 * @description Start the server
 * @param {number} PORT - The port number to listen on
 * @returns {void}
 * @async
 */
server.listen(PORT, () => {
	logger.info(`Server running on PORT ${PORT}`)
})


/**
 * @description Handle server errors
 * @param {object} error - The error object
 * @returns {void}
 * @async
 */
server.on('error', (error) => {
	logger.console.error(error.message)
	logger.console.error(error.stack)
})


/**
 * @description Handle unhandled promise rejections
 * @param {object} error - The error object
 * @returns {void}
 * @async
 */
process.on('uncaughtException', (error) => {
	logger.console.error('UNCAUGHT EXCEPTION! Shutting down...');
	logger.console.warn('UNCAUGHT EXCEPTION! Shutting down...');
	server.close(() => {
		process.exit(1)
	}
	)
})


/**
 * @description Handle unhandled promise rejections
 * @param {object} error - The error object
 * @returns {void}
 * @async
 */
process.on('unhandledRejection', (error) => {
	logger.console.error('UNHANDLED REJECTION! Shutting down...');
	logger.console.warn('UNHANDLED REJECTION! Shutting down...');
	server.close(() => {
		process.exit(1)
	}
	)
}
)


/**
 * @description Handle SIGTERM signals
 * @param {object} error - The error object
 * @returns {void}
 * @async
 */
process.on('SIGTERM', (error) => {
	logger.console.error('SIGTERM RECEIVED. Shutting down gracefully...');
	logger.console.warn('SIGTERM RECEIVED. Shutting down gracefully...');
	server.close(() => {
		logger.console.warn('Process terminated!')
	}
	)
}
)

