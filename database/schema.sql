DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS answers;

CREATE TABLE questions(
   id SERIAL PRIMARY KEY,
   product_id INT  NOT NULL,
   question_body TEXT NOT NULL,
   question_date BIGINT NOT NULL,
   asker_name TEXT NOT NULL,
   asker_email TEXT,
   reported INT DEFAULT 0,
   question_helpfulness INT DEFAULT 0
);

CREATE TABLE answers(
  id SERIAL PRIMARY KEY,
  question_id INT NOT NULL,
  body TEXT NOT NULL,
  "date" BIGINT NOT NULL,
  answerer_name TEXT NOT NULL,
  answerer_email TEXT,
  reported INT DEFAULT 0,
  helpfulness INT DEFAULT 0,
  CONSTRAINT fk_questions
    FOREIGN KEY(question_id)
      REFERENCES questions(id)
);

CREATE TABLE photos(
  id SERIAL PRIMARY KEY,
  answer_id INT NOT NULL,
  url TEXT,
  CONSTRAINT fk_answers
    FOREIGN KEY(answer_id)
      REFERENCES answers(id)
);

-- CREATE INDEX idx_product_id ON questions(product_id);
-- CREATE INDEX idx_question_id ON answers(question_id);
-- CREATE INDEX idx_answer_id ON photos(answer_id);
-- CREATE INDEX idx_answers_reported on answers(reported) WHERE reported = 0;