'use strict';
// GETUSER SERVICE
// Description: Define the getUserService that has 1 functionality: 
// making service calls to retrieve the logged-in users' information
var app = angular.module('routerApp');

app.factory('getUser',function($resource,session){
	var user = session.get('user');
	return $resource('/api/getuser',{},{
         getUser: {
         	method:'GET',
         	params:{
         		user: user
         	}
         }
	});
