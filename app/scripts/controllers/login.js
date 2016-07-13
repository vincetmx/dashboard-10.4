'use strict';
// LOGIN CONTROLLER
// Description: Define the following functionalities:
// Making service calls to login a user

routerApp.controller('login', function($scope, $location, authenticate, session) {
    $scope.submitForm = function() {
        authenticate.login($scope.username, $scope.password, function(response) {
            if(response.authentication == "success") {
                session.set("user", $scope.username);
                session.set("password", $scope.password);
                $location.path("/root/work");
            }else{
                $scope.error = "Could login please check your username and password";
            }
        });
    }
});