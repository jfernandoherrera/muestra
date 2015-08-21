/**
 * Created by mi pc on 18/12/2014.
 */
app.controller('homeCtrl', [
    '$scope',
    '$http',
    '$modal',
    function($scope ,$http, $modal ){
       
        $scope.openCSSModal = function () {
            var modalInstance = $modal.open({
                templateUrl: 'CSSModal.html',
                controller: 'CSSModalCtrl'
            });

           
        }; 
      

    }]);