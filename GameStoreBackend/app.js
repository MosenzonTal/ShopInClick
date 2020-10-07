const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const app = express();

// import Routes
const productsRoute = require('./routes/products');
const usersRoute = require('./routes/orders');

// Use Routes
app.use('/api/products', productsRoute);
app.use('/api/users', usersRoute);

app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'OPTIONS', 'PATCH', 'DELETE', 'PUT'],
    credentials: true,
    allowedHeaders: 'Content-type, Authorization, origin, X-Requested-With, Accept'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;
