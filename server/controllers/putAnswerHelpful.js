const { putAnswerHelpfulModel } = require('../models');

module.exports = function putAnswerHelpful(req, res) {
  putAnswerHelpfulModel(req.params.answer_id)
    .then(() => res.status(204).send('NO CONTENT'))
    .catch((error) => console.log(error));
};
