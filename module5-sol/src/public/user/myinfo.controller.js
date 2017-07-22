(function(){
"use strict";

angular.module('public')
//.constant('ApiPath', 'https://mrawal-angularjs.herokuapp.com')
.controller('MyInfoController', MyInfoController);
    
MyInfoController.$inject = ['signUpService','ApiPath'];
function MyInfoController(signUpService, ApiPath){
    var $ctrl = this;
    $ctrl.basePath = ApiPath;
    $ctrl.userInfo = signUpService.returnUserData();
   // console.log("User data in info controller: " + JSON.stringify($ctrl.userInfo));
    $ctrl.registrationStatus = signUpService.registration;
    //console.log("yeh hai:" + $ctrl.registrationStatus);
 }

})();

