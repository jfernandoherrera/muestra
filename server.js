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
mongoClient.connect('mongodb://'+ self.connection_string,
    function(err, db){
        if(err){
            throw err;
        }
        console.log('DB up.');

        myapp.set('port', process.env.PORT );
//myapp.set('ipaddr', ipaddr);
        myapp.set('views', __dirname + '/public/views');
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
        myapp.listen(myapp.get('port'), myapp.get('ipaddr'), function(){
            console.log('Express server listening on port ' + myapp.get('port'));
        });
    }
);
//var reqHandler = new user(db);
// app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
// app.set('ipaddr', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");
//var ipaddr = process.env.HEROKU_NODEJS_IP || "localhost";
//var port = process.env.PORT || process.env.HEROKU_NODEJS_PORT || 8000;

