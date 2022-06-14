/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const { Pool } = require('pg');
const copyFrom = require('pg-copy-streams').from;

const pool = new Pool({
  host: 'localhost',
  user: 'jasongates',
  database: 'questionsandanswers',
  password: '',
  port: 5432,
});

// This has to be done for each file seperatly
// Data loaded and integrity confirmed

pool.connect((err, client, done) => {
  const stream = client.query(copyFrom('COPY photos FROM STDIN CSV HEADER'));
  const fileStream = fs.createReadStream('answers_photos.csv');
  fileStream.on('error', done);
  stream.on('error', done);
  stream.on('finish', done);
  fileStream.pipe(stream);
});
