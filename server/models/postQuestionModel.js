/* eslint-disable max-len */
/* eslint-disable camelcase */
const db = require('../db');

module.exports = function postQuestionModel(data) {
  const dates = new Date().getTime();
  const {
    product_id, body, name, email,
  } = data;
  const text = `
    INSERT INTO questions(product_id, question_body, asker_name, asker_email, question_date)
    VALUES($1, $2, $3, $4, $5)
  `;

  return db.query(text, [product_id, body, name, email, dates])
    .then((response) => response)
    .catch((error) => console.log(error));
};
