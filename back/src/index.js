const express = require('express');
require('express-async-errors');

const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');
const routes = require('./routes');

const app = express();

app.use(express.json());
// This is the header that allows the CORS problem
// it is allowing the requests to be made on every port - WILDCARD
// Its important to define the CORS middleware before the routes, the order is important
app.use(cors);
app.use(routes);

// This is an Error Handler Middleware, because it has 4 arguments and starting with an error
app.use(errorHandler);

app.listen(3001, () => console.log('💻 Server is running at http://localhost:3001'));
