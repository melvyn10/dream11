const path = require("path");
require('dotenv').config({ path: path.resolve(__dirname, '../config/.env') });

const environment = process.env.NODE_ENV || "development";
const config = require("./knexfile.js")[environment];
module.exports = require("knex")(config);