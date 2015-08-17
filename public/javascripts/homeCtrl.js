/**
 * Created by mi pc on 18/12/2014.
 */
app.controller('homeCtrl', [
    '$scope',
    '$http',
    function($scope ,$http ){
        $scope.username = "";
        $scope.apps=[];
        $scope.userid="";
        fbinit();
        $scope.logout= function(){
            FB.logout(function(response) {
                window.location.replace('/index.html');
            });
        };
        function verifyAdmin(){
            if($scope.userid=="10152479324038483"){
                var query = {_id : req.body.userId};
                var update = {'$push' : {'apps' : req.body.app}};

                db.collection('users').update(query, update,
                    function(err, updated){
                        if(err){
                            res.status(501).send({'err' : err});
                        }
                        else{
                            if(updated == 1){
                                query = {
                                    _id : new ObjectID.createFromHexString(req.body.station._id)
                                };
                                update = {
                                    '$push' : {
                                        users : ObjectID.createFromHexString(req.body.userId)
                                    }
                                };
                                db.collection('stations').update(query, update,
                                    function(err, updated){
                                        if(err){
                                            res.status(501).send({'err' : err});
                                        }
                                        else{
                                            if(updated == 1){

                                                res.status(200).send({'updated' : updated});
                                            }else{
                                                res.status(404).send({'error' : 'User not updated'});
                                            }
                                        }
                                    }
                                );
                            }
                            else{
                                res.status(404).send({'error' : 'User not updated'});
                            }
                        }
                    }
                );
            }
        }
        function fbinit(){
            try{
                FB.getLoginStatus(
                    function(response1) {
                        if (response1 && !response1.error) {
                            FB.api(
                                "/me",
                                function (response) {
                                    $scope.username = response.first_name;
                                    $scope.userid =response.id;



                                });
                        }
                    }
                );
            }catch(err)
            {

            }
        };

    }]);