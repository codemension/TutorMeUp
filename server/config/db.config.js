/**
 * @description This file contains the database configuration
 * @module db.config 
 */


/**
 * @description Import dependencies
 * @param {object} dotenv - The dotenv module
 * @param {object} mongoose - The mongoose module
 */
require('dotenv').config();
const mongoose = require('mongoose');


/**
 * @description configuration object for the database for different environments
 */
const configs = {
  "development": {
    uri : process.env.DEV_DB_URI,
    options : {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  },
  "test": {
    uri : process.env.TEST_DB_URI,
    options : {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  },
  "production": {
    uri : process.env.PROD_DB_URI,
    options : {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  }
}



/**
 * @description Connect to the database
 * @param {object} mongoose - The mongoose module
 * @param {object} configs - The configuration object for the database for different environments
 * @returns {void}
 * @throws {error} - Any error that prevents the connection to the database
 * @async
 */
const connectDB = async () => {
  try {
    console.log(configs[process.env.NODE_ENV]);
    const conn = await mongoose.connect(
      configs[process.env.NODE_ENV].uri, 
      configs[process.env.NODE_ENV].options
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};


/**
 * @description Export the modules
 * @module
 * @exports {function} connectDB - Connect to the database
 * @exports {object} configs - The configuration object for the database for different environments
 */
module.exports = {
  connectDB,
  configs
};