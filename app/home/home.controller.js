(function () {
  'use strict';

  angular
    .module('app.controllers')
    .controller('HomeController', HomeController);

  function HomeController($scope, $state) {
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

    vm.closeStickerDialog = function () {
      vm.showStickerDialog = false;
    }

    vm.showDialog = function () {
      vm.showStickerDialog = true;

    }

    /**
     * Check whether profile image is loaded
     * @param   {[[Type]]} obj [[Description]]
     * @returns {Boolean}  [[Description]]
     */
    var profileLoaded = function (obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
          return false;
      }

      return true;
    }

    /**
     *Delete the sticker selected
     * @param {[[Type]]} sticker [[Description]]
     */
    vm.removeSticker = function (index) {
      //vm.stickersArray.pop(sticker);
      vm.stickersArray.splice(index, 1);
    }

    /**
     * Clear all
     */
    vm.clearAll = function () {
      $state.reload();
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