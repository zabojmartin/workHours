angular.module('workHours', ['ngRoute', 'controller'])

.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'templates/home.html'
	})
	.when('/app', {
		templateUrl: 'templates/app.html',
		controller: 'BlogCtrl'
	})
	.otherwise({
		templateUrl: 'templates/404.html'
	})
})