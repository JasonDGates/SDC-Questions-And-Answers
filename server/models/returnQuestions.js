/* eslint-disable max-len */
/* eslint-disable camelcase */
const db = require('../db');

module.exports = function returnQuestions(product_id, count = 5) {
  const text = `
    SELECT json_build_object(
      'product_id', ${product_id},
      'results', (SELECT json_agg(json_build_object(
        'question_id', id,
        'question_body', question_body,
        'question_date', (to_timestamp(question_date/1000) at time zone 'UTC'),
        'asker_name', asker_name,
        'question_helfulness', question_helpfulness,
        'reported', reported,

        'answers', COALESCE((SELECT json_object_agg(answers.id, json_build_object(
          'id', answers.id,
          'body', answers.body,
          'date', (to_timestamp(answers.date/1000) at time zone 'UTC'),
          'answerer_name', answers.answerer_name,
          'helpfulness', answers.helpfulness,

          'photos', COALESCE((SELECT json_agg(json_build_object(
            'id', photos.id,
            'url', photos.url
          )) FROM photos WHERE photos.answer_id=answers.id), '[]')

        )) FROM answers WHERE question_id=questions.id), '[]')

      )) FROM questions WHERE product_id=${product_id} LIMIT ${count})
    )
  `;

  // const text = `
  // SELECT
  //   json_agg(
  //     json_build_object(
  //       'question_id', questions.id,
  //       'question_body', questions.question_body,
  //       'question_date', questions.question_date,
  //       'asker_name', questions.asker_name,
  //       'question_reported', questions.reported,
  //       'question_helpfulness', questions.question_helpfulness,
  //       )
  //     ),
  //     json_agg(
  //       json_build_object(
  //         'id', answers.id,
  //         'question_id', answers.question_id,
  //         'body', answers.body,
  //         'date', answers.date,
  //         'answerer_name', answers.answerer_name,
  //         'helpfulness', answers.helpfulness
  //       ) WHERE answers.question_id=questions.id
  //     )
  // FROM
  //   questions
  // LEFT JOIN
  //   answers
  //   ON
  //   answers.question_id=questions.id
  // LEFT JOIN
  //   photos
  //   ON
  //   photos.answer_id=answers.id
  // WHERE
  //   product_id=${product_id}
  // GROUP BY
  //   questions.id, answers.id
  // LIMIT
  //   ${count};
  // `;

  return db.query(text)
    .then((response) => response.rows[0])
    .catch((error) => console.log(error));
};
