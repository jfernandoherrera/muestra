/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app.controller('CSSModalCtrl', [
    '$scope',
    '$modalInstance',
    function ($scope, $modalInstance) {

        $scope.items = [];
        
        $scope.search= function(){
           window.location.assign("https://contactsoft.azurewebsites.net") ;
        };

        $scope.close = function () {
            $modalInstance.dismiss('cancel');
        };
}]);