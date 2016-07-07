'use strict';
// OVERVIEW CONTROLLER
// Description: Define the following functionalities:
// Make service call to retrieve user's information
routerApp.controller('profileCtrl', function($scope,$http,session) {
    var username = session.get("user");
    $http.get('/api/profile')
        .success(function(data) {
            if(username == data.profiles[0].username){
                $scope.fullname = data.profiles[0].fullname;
                $scope.nickname = data.profiles[0].nickname;
                $scope.profileImage = data.profiles[0].profileImage;
            }else if (username == data.profiles[1].username){
                $scope.fullname = data.profiles[1].fullname;
                $scope.nickname = data.profiles[1].nickname;
                $scope.profileImage = data.profiles[1].profileImage;
            }
        })
});