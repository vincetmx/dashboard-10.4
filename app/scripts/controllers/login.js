'use strict';
// LOGIN CONTROLLER
// Description: Define the following functionalities:
// Making service calls to login a user

app.controller('loginController', function($scope, $state, authenticate, session) {

    $scope.submitForm = function() {
        session.set("user", $scope.userName);
        session.set("psw", $scope.password);
        
        if (authenticate.getUser() == "success") {
           
            $state.go("root.work");            

        } else {

            console.log("error");
            
        }
    }

});