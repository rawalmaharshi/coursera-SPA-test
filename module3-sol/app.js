(function (){
'use strict';   
    
angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

    
function FoundItemsDirective(){
  var ddo = {
    templateUrl: 'foundItems.html',
      restrict: 'E',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'nidc',
    bindToController: true
  };

  return ddo;
}    

function FoundItemsDirectiveController(){
    var nidc = this;
      nidc.nothingFound = function(){
        if(nidc.found.length === 0 || nidc.searchTerm === null)
            return true;
        return false;
    };
   
}    
NarrowItDownController.$inject = ['MenuSearchService'];    
function NarrowItDownController(MenuSearchService){
    var nidc = this; 
    var found = [];
    nidc.searchTerm = "";
    nidc.getMatchedMenuItems = function(searchTerm){
    var promise = MenuSearchService.getMatchedMenuItem(searchTerm);
    if (nidc.searchTerm === null || nidc.searchTerm.length === 0)
        { 
            found.splice(0,found.length);
            return found;}
        else{
    promise.then(function(response){
        //console.log(response.status);
        console.log(response.data);
        var responseLength = response.data.menu_items.length;
        nidc.found = [];
        found.splice(0,found.length);
        console.log(responseLength);
         for(var i=0; i<responseLength ;i++)
        {
            var description = response.data.menu_items[i].description;
            if(description.toLowerCase().indexOf(nidc.searchTerm) !== -1 )
            {    
            var item = {
            name: response.data.menu_items[i].name,
            description: response.data.menu_items[i].description,
            shortName: response.data.menu_items[i].short_name
                    };   
            found.push(item);   
            }
        };
        console.log(found); 
        
    })
    .catch(function(error){
    console.log("Error Occured during retrieval of list from server")    
    });
    };
    
    }
    nidc.removeItem = function (itemIndex) {
    found.splice(itemIndex, 1);
  };
    
   nidc.itemsInFound = function(){
        return found;
    };   
}    

MenuSearchService.$inject = ['$http','ApiBasePath'];
function MenuSearchService($http,ApiBasePath){
    var service = this;
    service.getMatchedMenuItem = function(searchTerm){
         var response = $http({
            method: "GET",
            url: (ApiBasePath + "/menu_items.json"),
             params: {
                category: searchTerm
                    }
        });
        return response;
    };

}
})();


//
//MUCH BETTER WAY:
//(function() {
//'use strict';
//
//angular.module('NarrowItDownApp', [])
//.controller('NarrowItDownController', NarrowItDownController)
//.service('MenuSearchService', MenuSearchService)
//.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
//.directive('foundItems', FoundItems);
//
//function FoundItems() {
//  var ddo = {
//    templateUrl: 'foundItems.html',
//    scope: {
//      items: '<',
//      message: '<',
//      onRemove: '&'
//    },
//    controller: NarrowDownDirectiveController,
//    controllerAs: 'list',
//    bindToController: true
//  };
//  return ddo;
//}
//
//function NarrowDownDirectiveController() {
//  var list = this;
//}
//
//NarrowItDownController.$inject = ['MenuSearchService'];
//function NarrowItDownController(MenuSearchService) {
//  var list = this;
//  list.showMessage = true;
//  list.searchTerm = '';
//  list.foundItems = [];
//
//  list.removeItem = function (itemIndex) {
//    MenuSearchService.removeItem(itemIndex);
//  };
//
//  list.getMatchedItems = function(searchTerm) {
//    MenuSearchService.getMatchedMenuItems(searchTerm).then(function(data) {
//        list.foundItems = data;
//        list.showMessage = list.foundItems.lenth>0
//    });
//  };
//}
//
//MenuSearchService.$inject = ['$http', 'ApiBasePath']
//function MenuSearchService($http, ApiBasePath) {
//  var menuSearch = this;
//  var foundItems = [];
//
//  menuSearch.getMatchedMenuItems = function(searchTerm) {
//    foundItems = [];
//
//    return $http({
//      method: "GET",
//      url: (ApiBasePath + "/menu_items.json")
//    }).then(function (result) {
//      if (searchTerm) {
//        var menuItems = result.data.menu_items;
//        for (var i=0; i<menuItems.length; i++) {
//          var description = menuItems[i].description;
//          if (description.indexOf(searchTerm)!==-1) {
//            foundItems.push(menuItems[i]);
//          }
//        }
//        return foundItems;
//      } else {
//        return foundItems;
//      }
//    });
//  };
//
//  menuSearch.removeItem = function(itemIndex) {
//    foundItems.splice(itemIndex, 1);
//  }
//}
//
//})();
