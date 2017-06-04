(function() {
    var app = angular.module('siteApp', ['site-sections', 'ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider
        .when("/home", {
            templateUrl: 'sections/home/home.html',
            controller: 'HomeController'
        })
        .when("/news", {
            templateUrl: 'sections/news/press.html',
            controller: 'NewsController'
        })
        .otherwise({
            redirectTo: '/home'
        })
    });

    /* Controllers */

    app.controller('HomeController', function($scope) {

        // this.greeting = "Welcome!";
        $scope.greeting = "Welcome to the official website of the Federation of the International Cable TV and Telecommunications Association of the Philippines!";

        $scope.sliderImages = [
            {img: '002'},
            {img: '003'},
            {img: '004'},
            {img: '005'},
            {img: '006'}
        ];

        $scope.featuredImages = [
            {img: '001'},
            {img: '002'},
            {img: '003'},
            {img: '004'},
            {img: '005'},
            {img: '006'},
            {img: '007'},
            {img: '008'},
            {img: '009'},
            {img: '010'},
            {img: '011'},
            {img: '012'}
        ];

        // var newsItems = this;
        // newsItems.news = [];
        
        // // get all news item from JSON data
        // $http.get('static/data/news.json').then(function(data) {
        //     newsItems.news = data;
        // });

    });
})();