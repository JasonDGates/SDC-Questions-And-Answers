/* eslint-disable max-len */
/* eslint-disable camelcase */
const db = require('../db');

module.exports = function putQuestionHelpfulModel(answerId) {
  const helpfulUpdate = `
    UPDATE
      answers
      SET
        helpfulness = helpfulness + 1
      WHERE
      id = $1;
  `;

  return db.query(helpfulUpdate, [answerId]);
};
