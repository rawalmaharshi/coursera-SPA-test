(function (){
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);
    
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
    
    
// Redirect to home page if no other URL matches
$urlRouterProvider.otherwise('/');
    
// *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.html'
  })  

    .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.html',
    controller: 'CategoriesController as catCtrl',
    resolve: {
        categories: ['MenuDataService', function (MenuDataService){
            return MenuDataService.getAllCategories();
            }]
        }
  })
    .state('items', {
    url: '/items/{shortName}',
    templateUrl: 'src/templates/items.html',
    controller: 'ItemsController as itemsCtrl',
    resolve: {
            items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.shortName);
//                .then(function (categories) {
//                  return categories[$stateParams.shortName];
//                });
            }]
    }
  });

}


})();