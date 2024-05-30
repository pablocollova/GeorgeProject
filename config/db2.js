
const mysql2 = require('mysql2/promise');
const dbConfig = require('./db.config.js');

const pool = mysql2.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
  });
  
  module.exports = pool;