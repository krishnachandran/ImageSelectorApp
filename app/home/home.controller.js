(function () {
  'use strict';

  angular
    .module('app.controllers')
    .controller('HomeController', HomeController);

  function HomeController($scope) {
    var vm = this;
    vm.pro_image;
    vm.showModal = false;
    vm.showStickerDialog = false;
    vm.stickersArray = JSON.parse(localStorage.getItem("stickers")) || [];
    vm.stickersLibrary = [];
    vm.stickerTitle;

    vm.openGallery = function () {

      vm.showModal = true;

    }
    
    vm.closeStickerDialog = function() {
      vm.showStickerDialog = false;
    }

    vm.showDialog = function () {
      vm.showStickerDialog = true;

    }
    
    /**
     *Delete the sticker selected
     * @param {[[Type]]} sticker [[Description]]
     */
    vm.removeSticker = function(sticker, index) {
      //vm.stickersArray.pop(sticker);
      vm.stickersArray.splice(index, 1);
    }

    /**
     * Clear all
     */
    vm.clearAll = function () {
      vm.stickersArray = [];
      vm.pro_image = "";
      $scope.apply();
    }

    /**
     * Add sticker to the library
     */
    vm.addSticker = function () {

      if (vm.stickerTitle && vm.sticker) {
        var stickerObject = {
          title: vm.stickerTitle,
          sticker: vm.sticker
        }
        vm.stickersArray = vm.stickersArray || [];
        vm.stickersArray.push(stickerObject);
        
        localStorage.setItem("stickers", JSON.stringify(vm.stickersArray));
        
        /*for (var member in stickerObject) {
          delete stickerObject[member];
        }*/
        vm.stickersLibrary = [];
        vm.stickerTitle = "";
        
        
        vm.closeStickerDialog();
      } else {
        alert("Please fill in all fields and submit");
      }
    }
  }

})();