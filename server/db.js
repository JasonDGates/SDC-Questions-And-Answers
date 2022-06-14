require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: 'jasongates',
  password: '',
  host: 'localhost',
  database: 'questionsandanswers',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
