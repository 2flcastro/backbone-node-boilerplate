var express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app;

app = express();
app.use(bodyParser.urlencoded({"extended": "true"}));
app.use(express.static(path.join(__dirname, 'app')));

// connect mongodb if hostig on Heroku + MonogoLab or local
mongooose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/...');

http.createServer(app).listen(process.env.PORT || 3000);

// create API:
