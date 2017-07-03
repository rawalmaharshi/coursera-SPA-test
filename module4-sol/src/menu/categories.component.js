(function () {
'use strict';

angular.module('Data')
.component('menuCategories', {
  templateUrl: 'src/templates/categories.list.template.html',
  bindings: {
    categories: '<'
  }
});

})();
