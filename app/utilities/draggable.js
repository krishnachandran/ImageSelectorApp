(function () {
  'use strict';

  angular
    .module('app.directives')
    .directive('draggableObject', draggable);

  function draggable() {

    return {
      restrict: "A",
      link: function (scope, element, attributes, ctlr) {

        element.draggable({
          cursor: "move",
          placeholder: "keep",
          //containment: ".image_wrapper",
          helper: "clone",
          appendTo: "body",
          revert:true,
          snap: ".image_wrapper",
          stack: ".sticker",
         /* revert: function (droppedElement) {
            var validDrop = droppedElement && droppedElement.hasClass("image_wrapper");
            return !validDrop;
          },*/
          start: function (event, ui) {},
          stop: function (event, ui) {
            //$(this).draggable().data()["ui-draggable"].cancelHelperRemoval = true;
          }
        });

      }
    };

  }

})();