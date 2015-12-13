(function () {
  'use strict';
  
  angular.module('app').config(
    function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '/app/home/home.html',
          controller: 'HomeController',
          controllerAs: 'vm'
        });
      // default path to navigate (also used as a fallback for missing urls)
      $urlRouterProvider.otherwise('/');
    }
  );
  
})();