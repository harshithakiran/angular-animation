
var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);


// ROUTING ===============================================
animateApp.config(function($routeProvider ,$locationProvider) {

 $locationProvider.html5Mode(true);   
 
    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })

        // about page
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })

        // contact page
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        })

        // upload page
        .when('/upload', {
            templateUrl: 'pages/upload.html',
            controller: 'uploadController'
        })

});

// CONTROLLERS ============================================
// home page controller
animateApp.controller('mainController', function($scope) {
    $scope.pageClass = 'home';
    $scope.profile_pic="";
});

// about page controller
animateApp.controller('aboutController', function($scope) {
    $scope.pageClass = 'about';
});

// contact page controller
animateApp.controller('contactController', function($scope) {
    $scope.pageClass = 'contact';
});
// upload page controller
animateApp.controller('uploadController', function($scope) {
    $scope.pageClass = 'upload';
});