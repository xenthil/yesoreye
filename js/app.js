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

app.controller('AppsListController',function($scope)
{
	$scope.appsList = [{ name : 'Apply Birth Certificate' , department: 'Sanitation'},
		{	name : 'Apply Death Certificate' },
		{	name : 'Book Marriage Hall' },
		{	name : 'Book Mortuary' },
		{	name : 'Important Announcements',department: 'General'},
		{name:'Govt. Orders'},
		{name:'New schemes'},
		{name:'Lodge a Complaint'},
		{name: 'City Details'},
		{name:'Ward Details'},
		{name:'Events & Programms by CMA'}

	];
	
});
