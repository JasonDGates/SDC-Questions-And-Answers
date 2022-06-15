/* eslint-disable max-len */
/* eslint-disable camelcase */
const db = require('../db');

module.exports = function putReportAnswerModel(answerId) {
  const helpfulUpdate = `
    UPDATE
      answer
      SET
        reported = 1
      WHERE
      id = $1;
  `;

  return db.query(helpfulUpdate, [answerId]);
};
