/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app.controller('RapidModalCtrl', [
    '$scope',
    '$modalInstance',
    function ($scope, $modalInstance) {

        $scope.items = [];
        
        $scope.search= function(){
            $modalInstance.close();
        };

        $scope.close = function () {
            $modalInstance.dismiss('cancel');
        };
}]);