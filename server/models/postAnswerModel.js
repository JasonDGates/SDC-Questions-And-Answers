/* eslint-disable max-len */
/* eslint-disable camelcase */
const db = require('../db');

module.exports = function postAnswerModel(data) {
  const dates = new Date().getTime();
  const {
    question_id, body, name, email,
  } = data;

  const answerInsert = `
    INSERT INTO answers(question_id, body, date, answerer_name, answerer_email)
    VALUES($1, $2, $3, $4, $5)
    RETURNING id;
  `;
  return db.query(answerInsert, [question_id, body, dates, name, email]);
};
