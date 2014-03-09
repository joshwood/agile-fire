angular.module('app', [
  'firebase',
  'users',
  'sprints',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.tpl.html',
      controller: 'MainController'
    })
    .when('/home', {
      templateUrl: 'views/main.tpl.html',
      controller: 'MainController'
    })
    .when('/users', {
      templateUrl: 'views/users.tpl.html',
      controller: 'UserController'
    })
    .when('/sprints', {
      templateUrl: 'views/sprints.tpl.html',
      controller: 'SprintsController'
    })
    .otherwise({
      redirectTo: '/'
    });
})
.controller('MainController', ['$scope', function($scope) {


}]);