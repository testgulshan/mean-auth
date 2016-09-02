var app = angular.module('meanApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home/home.html',
      controller: 'HomeCtrl'
    })
    .when('/login', {
      templateUrl: 'views/login/login.html',
      controller: 'LoginCtrl'
    })
    .when('/register', {
      templateUrl: 'views/register/register.html',
      controller: 'RegisterCtrl'
    })
    .when('/profile', {
      templateUrl: 'views/profile/profile.html',
      controller: 'ProfileCtrl'
    })
    .otherwise({
      template: '404'
    })
});

app.controller('HomeCtrl', function ($scope) {
    $scope.title = 'Home Page';
  })
  .controller('ProfileCtrl', function ($scope) {
    $scope.title = 'ProfileCtrl'
  })
