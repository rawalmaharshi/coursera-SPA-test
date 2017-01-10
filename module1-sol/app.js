(function(){ 
'use strict'; 
 
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController)

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
$scope.input1 = "";
$scope.message = "";
$scope.sayMessage = function()
{
    var itemsInArray = 0;
    if($scope.input1 == null || !$scope.input1)
        $scope.message="Please Enter data first!";
    else
    {    itemsInArray = calcNumberOfItems($scope.input1);
    
   if(itemsInArray <= 3 && itemsInArray >=1)
        $scope.message =  "Enjoy!"
    else if(itemsInArray > 3)
        $scope.message = "Too Much!"
    }
}
function calcNumberOfItems(string)
{
            var array1 = string.split(',');
            var no_of_items = array1.length ;
            return no_of_items;
}
           
} 
})();