/* eslint-disable camelcase */
const { postQuestionModel } = require('../models');

module.exports = function postQuestion(req, res) {
  console.log(req.body);
  postQuestionModel(req.body)
    .then(() => res.status(201).send('CREATED'))
    .catch((error) => console.log(error));
};
