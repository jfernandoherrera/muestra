#!/bin/env node
/**
 * Module dependencies.
 */

var express = require('express')
    , router = require('./router')
    , user = require('./router/api')
    , http = require('http')
    , path = require('path');

var app = express();
var mongoose = require('mongoose');
// all environments
var dbHost = process.env.OPENSHIFT_MONGODB_DB_URL || "mongodb://localhost:27017/";
var dbName = process.env.OPENSHIFT_APP_NAME       || "tripList";
var dbUrl = "" + dbHost + dbName;

var db = mongoose.createConnection(dbUrl, function(err) {
    if (err) {
        console.log("[Error] MongoDB '" + dbUrl + "' connection failed : " + err);
    }
});
//var reqHandler = new user(db);
// app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
// app.set('ipaddr', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");
var ipaddr = process.env.OPENSHIFT_NODEJS_IP || "localhost";
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8000;

app.set('port', port);
app.set('ipaddr', ipaddr);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon(path.join(__dirname, 'public/images/favicon.ico')));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());

app.use(express.static(__dirname+ '/public'));

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}
//pp.render('index', {title: 'FCI WEB'});

//app.get('/', router.index);
router(app,db);
//
http.createServer(app).listen(app.get('port'), app.get('ipaddr'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
