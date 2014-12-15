var app =angular.module('FCIWEB', []).run(['$window',

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
]).config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/',             { templateUrl: '../index.html',  controller: 'loginCtrl' }).
            otherwise({ redirectTo: '/' });
        }]);
/*
angular.module('FCIWEB');*/

