app.controller('loginCtrl', [
    '$scope',
    '$http',
    '$state',
    '$modal',
    
    function ($scope,$http, $state, $modal) {
        $scope.openCSSModal = function () {
            var modalInstance = $modal.open({
                templateUrl: 'CSSModal.html',
                controller: 'CSSModalCtrl'
            });

            modalInstance.result.then(function () {
          
               
            },
            function () {
            });
        };
           $scope.openRapidModal = function () {
            var modalInstance = $modal.open({
                templateUrl: 'RapidModal.html',
                controller: 'RapidModalCtrl'
            });

            modalInstance.result.then(function () {
          
               
            },
            function () {
            });
        };
        $scope.openFCIModal = function () {
            var modalInstance = $modal.open({
                templateUrl: 'FCIModal.html',
                controller: 'FCIModalCtrl'
            });

            modalInstance.result.then(function () {
          
               
            },
            function () {
            });
        };
           
         
    }]);
