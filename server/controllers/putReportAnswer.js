const { putReportAnswerModel } = require('../models');

module.exports = function putReportAnswer(req, res) {
  putReportAnswerModel(req.params.answer_id)
    .then(() => res.status(204).send('NO CONTENT'))
    .catch((error) => console.log(error));
};
