/* eslint-disable camelcase */
const returnAnswers = require('../models/returnAnswers');

module.exports = function getAnswers(req, res) {
  const { question_id } = req.params;
  returnAnswers(question_id)
    .then((data) => {
      if (data.results === null) {
        res.status(404).send('resource not found');
      } else {
        res.status(200).send(data);
      }
    })
    .catch((error) => console.log(error));
};
