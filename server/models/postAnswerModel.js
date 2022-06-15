/* eslint-disable max-len */
/* eslint-disable camelcase */
const db = require('../db');

const dates = new Date().getTime();

module.exports = function postAnswerModel(data) {
  const { question_id } = data;

  const text = `
    INSERT INTO answers(question_id, body, date, answerer_name, answerer_email)
    VALUES($1, $2, $3, $4, $5)
  `;
  return db.query(text, [question_id]);
};
