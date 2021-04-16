const express = require('express');

const routes = require('./routes');
const parseRequest = require('./bodyParser');

const app = express();
const PORT = process.env.PORT || 3000; //первая часть нужна, чтобы на heroku задеплоить

parseRequest(app);
routes(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
})