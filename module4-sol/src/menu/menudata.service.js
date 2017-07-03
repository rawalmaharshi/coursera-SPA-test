( function () {
'use strict';
    
angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['ApiBasePath', '$http' , '$q'];
function MenuDataService(ApiBasePath, $http, $q){
    var service = this;
    var categories = [];
    var items = [];
    service.getAllCategories = function(){
     return $http({
      method: 'GET',
      url: (ApiBasePath + "/categories.json")    
    }).then(function (response) {
        
        categories = response.data;
        console.log("categories:" + JSON.stringify(categories));
        return categories;
    },
     function error (response){
         console.log("Error aa gya categories mein" + response.statusText);
     });
 };
    
    
    
    service.getItemsForCategory = function(categoryShortName){
    return $http({
        method: 'GET',
        url: (ApiBasePath + "/menu_items.json?category="+categoryShortName)
    }).then(function (response) {
        
        //console.log("Response:"  + JSON.stringify(response));
        items = response.data;
        console.log("items:" + JSON.stringify(items));
        return items;
    },
     function error (response){
         console.log("Error aa gya items mein" + response.statusText);
     });      
    };
    
};
})();
