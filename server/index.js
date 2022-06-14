const express = require('express');
require('dotenv').config();
const { getQuestions, getAnswers, postQuestion } = require('./controllers');

const app = express();

app.use(express.json());

app.get('/qa/questions', getQuestions);
app.get('/qa/questions/:question_id/answers', getAnswers);
app.post('/qa/questions', postQuestion);

app.listen(process.env.port, () => {
  console.log(`listening on Port: ${process.env.port}`);
});
