const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');


const mountRoutes = require('./routes');
const corsOptions = {
    origin: 'http://localhost:5001',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
        extended: true,
    })
);
mountRoutes(app);

module.exports = app;
