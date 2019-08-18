const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const connection = require('./connection');
const middleware = require('./middleware');
const endpoints = require('./endpoints');

const app = express();
const PORT = process.env.CENSUS_DATA_EXPLORER_REST_PORT || 7000;

app.use(cors());
app.use(bodyParser.json());

// middleware
app.use((req, res, next) => {
    middleware(req, res, next);
});

endpoints(app, connection);

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
});
