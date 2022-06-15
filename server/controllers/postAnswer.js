/* eslint-disable camelcase */
const { postAnswerModel } = require('../models');
const { postPhotoModel } = require('../models');

module.exports = function postAnswer(req, res) {
  req.body.question_id = req.params.question_id;
  console.log(req.body);
  postAnswerModel(req.body)
    .then((response) => response.rows[0])
    .then((data) => {
      if (req.body.photos === undefined) {
        return data;
      }
      req.body.photos.forEach((url) => {
        postPhotoModel(data.id, url);
      });
      return data;
    })
    .then(() => res.status(201).send('CREATED'))
    .catch((error) => console.log(error));
};
