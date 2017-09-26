angular.module('MyApp', ['ngRoute','paypal-button','720kb.socialshare'])
  .config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'partials/homev1.html'
      })
      .otherwise({
        templateUrl: 'partials/404.html'
      });
  })
  .run(function($rootScope, $window) {
    if ($window.localStorage.user) {
      $rootScope.currentUser = JSON.parse($window.localStorage.user);
    }
  });
