var app =angular.module('FCIWEB', ['ui.router', 'ui.bootstrap']).run(['$window',

    function($window){
        $window.fbAsyncInit = function() {
            FB.init({
                appId: '370286126480606',
                xfbml: true,
                version: 'v2.0',
                status: true
            });
        };

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }
]).config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
 //   $urlRouterProvider.otherwise('/');
        var user={
            name: 'user',
            url : '/user',
            templateUrl : '../partials/new.html',
            controller : 'homeCtrl'
        };
    var home={
        name: 'home',
        url : '/',
        templateUrl : '../partials/home.html',
        controller : 'loginCtrl'
    };
        $stateProvider.state(user);
    $stateProvider.state(home);
        }]).run(['$state', function ($state) {
    $state.transitionTo('home');
}]);
/*
angular.module('FCIWEB');*/

