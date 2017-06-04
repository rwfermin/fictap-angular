(function() {

    var app = angular.module('site-sections', []);

    // app.directive('featuredSlider', function() {
    //     return {
    //         restrict: 'A',
    //         templateUrl: 'sections/home/home.html'
    //     };
    // });

    app.directive('featuredSlider', function() {
        return {
            restrict: "A",
            controller: function() {
                
            }
        };
    });

    app.directive('homeNews', function() {
        return {
            restrict: "E",
            templateUrl: 'sections/home/latest-news.html'
        };
    });

})();