var siteApp = angular.module('siteApp', ['ngRoute']);

siteApp.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl: 'sections/home.html',
        controller: 'HomeController'
    })
    .otherwise({
        redirectTo: '/home'
    })
});

/* Controllers */

siteApp.controller('HomeController', function($scope) {
    $scope.greetings = "Welcome to the official website of the Federation of the International Cable TV and Telecommunications Association of the Philippines!";
});