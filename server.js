#!/bin/env node
/**
 * Module dependencies.
 */

var router = require('./router/index')
    ,express = require('express')
    , http = require('http')
    , path = require('path');

var myapp = express();
var mongoose = require('mongoose');
// all environments
var dbHost = process.env.OPENSHIFT_MONGODB_DB_URL || "mongodb://localhost:27017/";
var dbName = process.env.OPENSHIFT_APP_NAME       || "FCIWEB";
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

myapp.set('port', port);
myapp.set('ipaddr', ipaddr);
myapp.set('views', __dirname + '/public/views');
myapp.use(express.favicon(path.join(__dirname, 'public/images/favicon.ico')));
myapp.use(express.logger('dev'));
myapp.use(express.bodyParser());
//myapp.use(express.methodOverride());

http.createServer(myapp);
myapp.use(express.static(__dirname+ '/public'));

// development only
//pp.render('index', {title: 'FCI WEB'});


//app.get('/', router.index);
router(myapp,db);
//myapp.use(router);
//
myapp.listen(myapp.get('port'), myapp.get('ipaddr'), function(){
  console.log('Express server listening on port ' + myapp.get('port'));
});
