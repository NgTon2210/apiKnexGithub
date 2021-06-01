var express = require('express');
const router = require('./routes')
var bodyParser = require('body-parser');

var knex = require('./db/knexfile');
var app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router)
app.listen(1000, ()=> console.log('server listening on port 1000'))