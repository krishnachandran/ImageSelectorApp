
(function () {
  'use strict';

  angular
    .module('app.directives')
    .directive('dropSpace', drop);

  function drop() {

    return {
      restrict: "A",
      link: function (scope, element, attributes, ctlr) {
        /*element.attr("droppable", true);

        element.bind("dragenter", function (eventObject) {
          eventObject.stopPropagation();
          eventObject.preventDefault();
           eventObject.dataTransfer.dropEffect = "copy";
        });

        element.bind("dragover", function (eventObject) {
          eventObject.stopPropagation();
          eventObject.preventDefault();
          eventObject.dataTransfer.dropEffect = "copy";
         // return false;
        });

        element.bind("dragleave", function (eventObject) {
          
        });

        element.bind("drop", function (eventObject) {
          eventObject.dataTransfer.dropEffect = "copy";
          eventObject.stopPropagation();
          eventObject.preventDefault();

          var data = eventObject.dataTransfer.getData("text");
          var image = document.getElementById(data);
          
         // eventObject.target.appendChild(image);
        });*/

        element.droppable({
          hoverClass: "drop-hover",
          tolerance: "fit",
          drop: function (event, ui) {
            /*$(this).append($(ui.helper).clone().draggable({
              containment: ".image_wrapper"
            }));*/
            //make the dropped item draggable
            var clone = $(ui.helper).clone().addClass("dropped").draggable({
              containment: ".image_wrapper"
            });
            /*clone.css('left', ui.position.left);
            clone.css('top', ui.position.top);*/

            $(this).append(clone);
            $(ui.helper).remove();
          }
        });

      }
    };

  }

})();