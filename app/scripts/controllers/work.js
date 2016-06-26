'use strict';
// WORK CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Work" section to display items and filter them

routerApp.controller('workController',function($scope, $http){
    $http.get('/api/work')
        .success(function(data) {
            $scope.myData = data;
        })
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
});
