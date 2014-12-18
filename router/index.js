var RequestsHandler = require('./api');


module.exports = function(app, db) {
  var reqHandler = new RequestsHandler(db);


  app.post('/login', reqHandler.logUser);
  app.post('/register',reqHandler.registerUser);
  app.post('/home',reqHandler.apps);
};
// JSON API for list of lis

// JSON API for getting a single poll




// JSON API for creating a new poll


//JSON API for getting a single poll
