/**
 * @file index.js is the router for the server.
 * @description routes all requests to the correct controller.
 * @module routes/index
 * @requires express
 */
const router = require('express').Router();


/**
 * @description redirect to the correct route
 * @param {string} / - The route to the root
 * @param {object} router - The appropiate express router for each route
 * @returns {void}
 */
router.use('/auth', require('./auth.route'));
router.use('/tutor', require('./tutor.route'));
router.use('/student', require('./student.route'));


module.exports = router;