#!/bin/env node
/**
 * Module dependencies.
 */

var router = require('./router/index')
    ,express = require('express')
    , http = require('http')
    , mongoClient = require('mongodb').MongoClient
    , path = require('path');

var myapp = express();
//var mongoose = require('mongoose');
// all environments
connection_string = '127.0.0.1:27017/nodejs';
// if OPENSHIFT env variables are present, use the available connection info:
if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
    connection_string = 'admin' + ":" +
    process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
    process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
    process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
    process.env.OPENSHIFT_APP_NAME;
}
mongoClient.connect('mongodb://'+ connection_string,
    function(err, db){
        if(err){
            throw err;
        }
        console.log('DB up.');

        myapp.set('port', process.env.PORT );
//myapp.set('ipaddr', ipaddr);
        myapp.set('views', __dirname + '/public/partials');
        myapp.use(express.favicon(path.join(__dirname, 'public/images/favicon.ico')));
        myapp.use(express.logger('dev'));
        myapp.use(express.bodyParser());
//myapp.use(express.methodOverride());

        http.createServer(myapp);
        myapp.use(express.static(__dirname+ '/public'));

// development only
//myapp.render('index', {title: 'FCI WEB'});


//app.get('/', router.index);
        router(myapp,db);
//myapp.use(router);
//
        ipaddress= process.env.OPENSHIFT_NODEJS_IP;
      if (typeof ipaddress === "undefined") {
            //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
            //  allows us to run/test the app locally.
            console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
           ipaddress = "127.0.0.1";
        };

        myapp.listen(process.env.OPENSHIFT_NODEJS_PORT  ,ipaddress , function(){
            console.log('Express server listening on port ' +process.env.OPENSHIFT_NODEJS_PORT );
        });
    }
);
//var reqHandler = new user(db);
// app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
// app.set('ipaddr', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");
//var ipaddr = process.env.HEROKU_NODEJS_IP || "localhost";
//var port = process.env.PORT || process.env.HEROKU_NODEJS_PORT || 8000;

