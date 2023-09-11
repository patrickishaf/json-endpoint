const express = require('express');
const personRouter = require('./person/router');

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());

app.use('/api', personRouter);

app.listen(PORT, function() {
  console.log('server listening on port ' + PORT);
})