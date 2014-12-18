/**
 * Created by mi pc on 18/12/2014.
 */
app.controller('homeCtrl', [
    '$scope',
    function($scope ){
        $scope.username = "";
        fbinit();

        function fbinit(){
            try{
                FB.getLoginStatus(
                    function(response1) {
                        if (response1 && !response1.error) {
                            FB.api(
                                "/me",
                                function (response) {
                                    $scope.username = response.first_name;

                                    console.log($scope.username+"  r4");


                                });
                        }
                    }
                );
            }catch(err)
            {

            }
        };

    }]);