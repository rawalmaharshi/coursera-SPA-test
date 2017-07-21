(function (){   
"use strict";
    
angular.module('public')
.service('signUpService', signUpService);
//.constant('ApiPath', 'https://mrawal-angularjs.herokuapp.com');
    

signUpService.$inject = ['$http'];    
function signUpService($http){
    var service = this;
    service.userinfo = {};
    //console.log("save status: " + service.registration);
    
    service.saveUserData = function(user,registrationComplete){
        service.userinfo = user;
        service.registration = true;
        //console.log("User data in service is: " + JSON.stringify(service.userinfo));
    }
    
    service.returnUserData = function(){
        return service.userinfo;
    }
    
}
})();