/**
 * Created by mi pc on 18/12/2014.
 */
app.controller('homeCtrl', [
    '$scope',
    function($scope ){
        $scope.username = "";
        $scope.apps=[];
        fbinit();
        $scope.logout= function(){
            FB.logout(function(response) {
                window.location.replace('/index.html');
            });
        };
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