// script.js

    // create the module and name it scotchApp
    var scotchApp = angular.module('animateApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Whats up!';
    });

    scotchApp.controller('aboutController', function($scope) {
        $scope.message = 'This is about page. !! ';
    });

    scotchApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! This is just a demo. !! ';
    });