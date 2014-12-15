
module.exports = function RequestsHandler(db) {
  //POST
  this.logUser = function (req, res) {

    var query = {
      _id: req.body.userId + ''
    };
    db.collection('user').findOne(query,
        function (err, foundUser) {
          if (err) {
            res.status(500).send({'err': err});
          }
          else if (foundUser) {
            res.status(200).send({'user': foundUser});
          }
          else {

            res.status(404).send({err: 'User not found.'});
          }
        }
    );
  }
  this.registerUser = function(req, res) {

    var user = {
      _id : req.body.userId + '',
      email : req.body.email,
      name : req.body.username,
      cc : '543654654'
    };
    db.collection('user').insert(user,
        function(err, inserted){
          if(err){
            console.log(err);
            res.status(500).send({'error' : err});
          }
          else{
            res.status(200).send({'inserted' : inserted});
          }
        }
    );
  };
};

