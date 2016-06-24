'use strict';
// AUTHENTICATE SERVICE
// Description: Define the authenticateService that has 3 functionalities: login, logout, and islogged 

var app = angular.module("routerApp");
app.factory('authenticate', function($http, session) {
    var res;

    return {
        getUser: function() {
            var user = session.get('user');
            var psw = session.get('psw');
            var promise = $http.post('/api/login', {
        userName: user,
        password: psw
    });
    promise.then(function(response) {
        res = response.data.authentication;

    }, function() {
        console.log("Ooooops");
    });
            return res;
        }
    };
});