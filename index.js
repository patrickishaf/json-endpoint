const express = require('express');
const personRouter = require('./person/router');

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());

const apiRouter = express.Router();

apiRouter.use('/person', personRouter);
app.use('/api', apiRouter);

app.listen(PORT, function() {
  console.log('server listening on port ' + PORT);
})