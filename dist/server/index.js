'use strict';

const path = require('path');
const cors = require('cors');
const express = require('express');
const compression = require('compression');

const app = express();
const port = 8080;

// Since this is local, allow everything. Change if hosting publically.
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

const routes = require('./routes')(app);

app.listen(port);
console.log('App started on http://localhost:8080');
