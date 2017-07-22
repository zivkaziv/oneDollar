var express = require('express');
var path = require('path');
var logger = require('morgan');
var compression = require('compression');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var dotenv = require('dotenv');
var mongoose = require('mongoose');
var paypal = require('paypal-rest-sdk');

// Load environment variables from .env file
dotenv.load();

// Controllers
var contactController = require('./controllers/contact');
var paymentController = require('./controllers/payment');
var paypalController = require('./controllers/paypal');

var app = express();


mongoose.connect(process.env.MONGODB);
mongoose.connection.on('error', function() {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});
app.set('port', process.env.PORT || 8000);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/contact', contactController.contactPost);
app.post('/paid', paymentController.paidPost);
app.post('/paypal/webhook', paypalController.paypalWebhookPost);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'app', 'index.html'));
});

app.get('*', function(req, res) {
  res.redirect('/#' + req.originalUrl);
});

// Production error handler
if (app.get('env') === 'production') {
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.sendStatus(err.status || 500);
  });
}

var paypalMode = app.get('env') === 'production' ?'live':'sandbox';
paypal.configure({
    mode: paypalMode, // Sandbox or live
    client_id: process.env.PAYPAL_CLIENT_ID ,
    client_secret: process.env.PAYPAL_SECRET});


app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
