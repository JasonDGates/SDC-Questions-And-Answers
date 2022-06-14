/* eslint-disable max-len */
/* eslint-disable camelcase */
const db = require('../db');

module.exports = function returnAnswers(question_id, count = 5, page = 1) {
  const text = `SELECT json_build_object(
      'question', ${question_id},
      'page', ${page || 1},
      'count', ${count || 5},
      'results', (SELECT json_agg(json_build_object(
        'answer_id', answers.id,
        'body', answers.body,
        'date', answers.date,
        'answerer_name', answers.answerer_name,
        'helpfulness', answers.helpfulness,

        'photos', COALESCE((SELECT json_agg(json_build_object(
          'id', photos.id,
          'url', photos.url
        )) FROM photos WHERE answer_id=answers.id), '[]')

      )) FROM answers WHERE question_id=${question_id} LIMIT ${count})
    )`;

  return db.query(text)
    .then((response) => response.rows[0].json_build_object)
    .catch((error) => console.log(error));
};
