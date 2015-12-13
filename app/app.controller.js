(function () {
  'use strict';
  
  angular
    .module('app.controllers')
    .controller('AppController', AppController);
  
 // AppController.$inject = ['$rootScope'];
  
  function AppController ($rootScope) {
    // controller implementation
    jQuery.event.props.push('dataTransfer');
  }
  
})();