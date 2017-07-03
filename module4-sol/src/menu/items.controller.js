(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['items'];
function ItemsController(items) {
  var itemsCtrl = this;
  itemsCtrl.items = items.menu_items;
  console.log("Items in the controller are:" + JSON.stringify(items));    
}

})();


//(function () {
//'use strict';
//
//angular.module('ShoppingList')
//.controller('ItemDetailController', ItemDetailController);
//
//// 'item' is injected through state's resolve
//ItemDetailController.$inject = ['item']
//function ItemDetailController(item) {
//  var itemDetail = this;
//  itemDetail.name = item.name;
//  itemDetail.quantity = item.quantity;
//  itemDetail.description = item.description;
//}
//
//})();
