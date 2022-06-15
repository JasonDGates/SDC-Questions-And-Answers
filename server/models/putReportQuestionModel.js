/* eslint-disable max-len */
/* eslint-disable camelcase */
const db = require('../db');

module.exports = function putQuestionHelpfulModel(questionId) {
  const helpfulUpdate = `
    UPDATE
      questions
      SET
        reported = 1
      WHERE
      id = $1;
  `;

  return db.query(helpfulUpdate, [questionId]);
};
