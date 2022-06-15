/* eslint-disable camelcase */
const { postAnswerModel } = require('../models');

module.exports = function postAnswer(req, res) {
  console.log(req.body);
  postAnswerModel(req.body)
    .then(() => res.status(201).send('created'))
    .catch((error) => console.log(error));
};
