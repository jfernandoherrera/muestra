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
        $routeProvider.when('/new',             { templateUrl: 'partials/new.html',  controller: loginCtrl }).
            otherwise({ redirectTo: '/new' });
        }]);
/*
angular.module('FCIWEB');*/

    function loginCtrl($scope,$http,$resource) {
        $scope.logIn = function () {
            FB.login(function (response) {
                    if (response.authResponse) {
                        console.log("dasers");
                        $http.post('/login', {userId: response.authResponse.userID})
                            .success(
                            function (data, status) {

//                                $window.location.href = '/home.html';
                            }
                        )
                            .error(
                            function (data) {
                                if (data.err == "User not found.") {
                                    FB.api(
                                        "/me",
                                        function (response1) {
                                            if (response1 && !response1.error) {
                                                var user = {
                                                    userId: response1.id,
                                                    cc: "11111",
                                                    email: response1.email,
                                                    name: response1.first_name
                                                };
                                                $http.post('/register', user)
                                                    .success(
                                                    function (data, status) {
                                                        //$state.go('/list');
//                                                            $window.location.href = '/home.html';
                                                    }
                                                )
                                                    .error(
                                                    function (data, status) {
                                                    }
                                                );
                                            }
                                        }
                                    );
                                }
                            }
                        );
                    } else {
                        console.log('User cancelled login or did not fully authorize.');
                    }
                },
                {scope: 'email,user_friends'});
        };
    }

