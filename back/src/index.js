const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

// This is an Error Handler Middleware, because it has 4 arguments and starting with an error
app.use((error, request, response, next) => {
  console.log('&&& Error Handler');
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log('💻 Server is running at http://localhost:3000'));
