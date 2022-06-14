/* eslint-disable camelcase */
const { returnQuestions } = require('../models');

module.exports = function getQuestions(req, res) {
  const { product_id } = req.query;
  returnQuestions(product_id)
    .then((data) => {
      if (data.results === null) {
        res.status(404).send('resource not found');
      } else {
        res.status(200).send(data);
      }
    })
    .catch((error) => console.log(error));
};
