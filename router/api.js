
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
  this.apps=function(req,res){
    var app={
      name:'admin'
    };
    db.collection('apps').insert(app,  function(err, inserted){
      if(err){
        res.status(500).send({'error' : err});
      }

        var query = {
          _id : req.body.userId + ''
        };
        var update = {
          '$push' : {
            stations : inserted[0]
          }
        };
        db.collection('user').update(query, update,
            function(err, updated){
              if(err){
                res.status(500).send({'err' : err});
              }
              else if(updated){
                res.status(200).send(inserted[0]);
              }
              else{
                res.status(404).send({err : 'No user found.'});
              }
            }
        );
      });
  };
  this.registerUser = function(req, res) {

    var user = {
      _id : req.body.userId + '',
      email : req.body.email,
      name : req.body.username,
      cc : '543654654',
      apps : []
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

