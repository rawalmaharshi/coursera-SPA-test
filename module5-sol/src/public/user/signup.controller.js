(function(){
"use strict";
    
angular.module('public')
.controller('SignUpController', SignUpController);

    
SignUpController.$inject = ['signUpService','ApiPath', '$http'];
function SignUpController(signUpService, ApiPath, $http){
    var $ctrl = this;
    $ctrl.user = {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        fav: "",
    }
    
    $ctrl.statusText="";
    
    $ctrl.submit = function(){  
        $ctrl.registrationComplete = true;
        $ctrl.statusText = "Your information has been saved!.";
        signUpService.saveUserData($ctrl.user);  
    };
    
      $ctrl.getFavoriteItem = function(){
      return $http.get(ApiPath + '/menu_items/' + $ctrl.user.fav + '.json').then(function successCallback(response) {
        $ctrl.favItem = response.data;
        //console.log("Favorite Item: " + JSON.stringify($ctrl.favItem));
        $ctrl.user.favItem = $ctrl.favItem;
        //console.log("User Info now is: " + JSON.stringify($ctrl.user));
        $ctrl.serverResponseStatus = response.status;
        return response.data; 
      
    }, function errorCallback(response){
      $ctrl.serverResponseStatus = response.status;
      });
      
  };
    
};
    
})();

