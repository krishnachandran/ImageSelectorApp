/**
 *Droppable directive
**/

(function () {
  'use strict';

  angular
    .module('app.directives')
    .directive('dropSpace', drop);

  function drop() {

    return {
      restrict: "A",
      link: function (scope, element, attributes, ctlr) {
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
            
            /*.resizable({
              containment: ".image_wrapper",
              handles: "e, w"
            }).closest("div")*/
            
            //clone.css("z-index",10000);
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