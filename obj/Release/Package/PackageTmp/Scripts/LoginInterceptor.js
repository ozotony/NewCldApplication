'use strict';
var app = angular.module('app');
app.factory('authInterceptorService', ['$q', '$location', '$rootScope', 'localStorageService', function ($q, $location, $rootScope, localStorageService) {

    var authInterceptorServiceFactory = {};

    var _request = function (config) {

        config.headers = config.headers || {};

        // var authData = localStorageService.get('authorizationData');
       
        if (localStorageService.get("access_token") == null) {
            $rootScope.token = localStorageService.get("access_token")

        }
      //  alert(localStorageService.get("access_token"))
        var authData = localStorageService.get("access_token");
        //  swal("token =" + authData)


        if (authData) {
            //  config.headers.Authorization = 'Bearer ' + authData.token;
         
            config.headers.Authorization = 'Bearer ' + authData;
        }

        return config;
    }

    var _responseError = function (rejection) {
        // alert(rejection.status)
        if (rejection.data.error_description) {
            swal("Cancelled", rejection.data.error_description, "error")

        }

        else {
            swal("Cancelled", rejection.data.Message, "error")

        }
        //if (rejection.status == 401 || rejection.status == 400) {
        //   // ajaxindicatorstop();
        //    swal(rejection.statusText)
        //  //  $location.path('login');
        //}
        return $q.reject(rejection);
    }


    var _response2 = function (response) {
        // alert(rejection.status)
      //  alert("response =" + response.status)
        //  swal("response =" + response.status)

        return response


    }

    authInterceptorServiceFactory.request = _request;
    authInterceptorServiceFactory.responseError = _responseError;

    authInterceptorServiceFactory.response = _response2;

    return authInterceptorServiceFactory;
}]);