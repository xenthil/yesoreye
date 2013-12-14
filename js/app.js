var app = angular.module('OneCMAApp',[]);


app.config(function($routeProvider)
{
	$routeProvider.when("/home", {templateUrl:"partials/home.html"});
	$routeProvider.when("/dashboard", {templateUrl:"partials/dashboard.html"});
	$routeProvider.when("/notifications", {templateUrl:"partials/notifications.html"});
	$routeProvider.when("/departments", {templateUrl:"partials/departments.html"});
	$routeProvider.when("/analytics", {templateUrl:"partials/analytics.html"});
    $routeProvider.when("/complaints", {templateUrl: "partials/complaints.html"});
    $routeProvider.when("/logout", {templateUrl: "partials/login.html"});
    $routeProvider.otherwise({redirectTo: '/home'});
});


app.controller('OneCMACtrl',function($scope)
{
	
});
