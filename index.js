const express = require('express');
const personRouter = require('./person/router');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());

app.use('/api', personRouter);

mongoose.connect(process.env.DB_URL).then(function() {
  app.listen(PORT, function() {
    console.log('server listening on port ' + PORT);
  });
}).catch(function(err) {
  console.log('failed to connect to db');
})