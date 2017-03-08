(function(){ 
'use strict'; 
 
angular.module('ShoppingListCheckOff' , [])
.controller('ToBuyController' , ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)  
    
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
    var tbc = this;
    tbc.itemName = "";
    tbc.itemQuantity = "";
    tbc.toBuyItems = ShoppingListCheckOffService.showToBuyItems();
    
    tbc.buyItem = function(itemIndex,itemName,itemQuantity){
        ShoppingListCheckOffService.buyItem(itemIndex,itemName,itemQuantity);
    };
    
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];    
function AlreadyBoughtController(ShoppingListCheckOffService){
    var abc = this;
    abc.alreadyBoughtItems = ShoppingListCheckOffService.showAlreadyBoughtItems();    
}

function ShoppingListCheckOffService()
{
    var service = this;
    
    var toBuyItems = [
        {
            name: "Cookies",
            quantity: "10"
        },
        {
            name: "Chocolates",
            quantity: "20"
        },
        {
            name: "Pastries",
            quantity: "5"
        },
        {
            name: "Candies",
            quantity: "100"
        },
        {
            name: "Chips",
            quantity: "10"
        }
    ];
    var alreadyBoughtItems = [];

    service.buyItem = function(itemIndex,itemName,itemQuantity){
        var item = {
        name: itemName,
        quantity: itemQuantity
        };
     alreadyBoughtItems.push(item);
      toBuyItems.splice(itemIndex,1);    
    };
    service.showToBuyItems = function () {
        return toBuyItems;
    };
    service.showAlreadyBoughtItems = function() {
        return alreadyBoughtItems;
    };
}
   
})();