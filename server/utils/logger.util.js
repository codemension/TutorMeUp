/**
 * @fileoverview Logger Util
 * @description Logger Util
 * @module utils/logger.util
 */


/**
 * @description Import dependencies
 * @param {object} pino - The pino module
 */
const pino = require('pino');

/**
 * @description Create the logger
 * @param {object} pino - The pino module
 * @returns {object} logger - The logger object
 */
const logger = pino({
  transport : {
    target : 'pino-pretty',
    options : {
      colorize : true,
      ignore : 'pid,hostname'
    }
  }
});


module.exports = logger;