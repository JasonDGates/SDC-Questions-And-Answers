/* eslint-disable max-len */
/* eslint-disable camelcase */
const db = require('../db');

module.exports = function returnAnswers(question_id, count = 5) {
  const text = `COALESCE((SELECT * FROM answers WHERE question_id=${question_id} LIMIT ${count}), '[]')`;

  return db.query(text)
    .then((response) => response.rows)
    .catch((error) => console.log(error));
};
