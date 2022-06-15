/* eslint-disable max-len */
/* eslint-disable camelcase */
const db = require('../db');

module.exports = function postPhotoModel(answerId, url) {
  const photoInsert = `
    INSERT INTO photos(answer_id, url)
    VALUES($1, $2);
  `;

  return db.query(photoInsert, [answerId, url]);
};
