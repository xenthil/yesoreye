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
    $routeProvider.when("/app/newbaby", {templateUrl: "partials/app/newbaby.html"});
    $routeProvider.when("/app/searchbaby", {templateUrl: "partials/app/searchbaby.html"});    
    $routeProvider.when("/app/newmother", {templateUrl: "partials/app/newmother.html"});
    $routeProvider.otherwise({redirectTo: '/home'});
});


app.controller('OneCMACtrl',function($scope)
{
	
});

app.controller('AppsListController',function($scope)
{
	$scope.appsList = [{ name : 'Apply Birth Certificate'},
		{	name : 'Enter New Baby Details' , appid: 'newbaby'},		
		{	name : 'Search Baby Details' , appid: 'searchbaby'},		
		{	name : 'Enter New Conceived Mother Details' , appid: 'newmother'},
		{	name : 'Apply Death Certificate' },
		{	name : 'Book Marriage Hall' },
		{	name : 'Book Mortuary' },
		{	name : 'Important Announcements',department: 'General'},
		{name:'Govt. Orders'},
		{name:'New schemes'},
		{name:'Lodge a Complaint'},
		{name: 'City Details'},
		{name:'Ward Details'},
		{name:'Burial Ground Booking'},
		{name:'Freezer Box booking'},
		{name:'Ward Details'},
		{name:'Events & Programms by CMA'}

	];
	
});
