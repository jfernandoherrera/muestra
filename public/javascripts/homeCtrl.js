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
                                    $scope.username = response.id;




                                });
                        }
                    }
                );
            }catch(err)
            {

            }
        };

    }]);