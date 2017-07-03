(function () {
'use strict';

angular.module('Data')
.component('itemsInCategory', {
  templateUrl: 'src/templates/items.list.template.html',
  bindings: {
    items: '<'
  }
});

})();