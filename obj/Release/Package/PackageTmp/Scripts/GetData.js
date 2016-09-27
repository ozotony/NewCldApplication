'use strict';
var app = angular.module('app');


app.factory('authService', ['$http', '$q', '$rootScope', 'localStorageService', function ($http, $q, $rootScope, localStorageService) {

    var serviceBase = 'http://88.150.164.30/NewTrademark/';
//var serviceBase = 'http://localhost:24322/';

   


    var authServiceFactory = {};

    var _authentication = {
        isAuth: false,
        userName: ""
    };

    var _saveRegistration = function (registration) {
        var dd = "";
        return $http.post(serviceBase + 'api/account/register2', registration, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };

    var _saveRegistration2 = function (registration) {
        var dd = "";
        return $http.post(serviceBase + 'api/account/register3', registration, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };

   


    var _saveRegistration3 = function (registration) {
        var dd = "";
        return $http.post(serviceBase + 'api/account/register4', registration, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };

    var _saveClient = function (registration) {
        var dd = "";
        return $http.post(serviceBase + 'api/account/AddClients', registration, {
            //transformRequest: angular.identity,
            //headers: { 'Content-Type': undefined }
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };
   


    var _saveRoles = function (registration) {
        var dd = "";
        return $http.post(serviceBase + 'api/account/CreateRole', registration, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };

    var _saveRoles2 = function (registration) {
        var dd = "";
        return $http.post(serviceBase + 'api/account/CreateRole2', registration, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };

    var _saveMenu = function (registration) {
        var dd = "";
        return $http.post(serviceBase + 'api/account/CreateMenu', registration, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };


    var _assignRoles = function (registration) {
        var dd = "";
        return $http.post(serviceBase + 'api/account/AssignUserRole', registration, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };

    var _saveProduct = function (registration) {
        // var serviceBase2 = "http://localhost:24322/";

        return $http.post(serviceBase + 'api/account/AddProduct', registration, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };

    

    var _SaveTransaction = function (registration) {
        var dd = "";
        return $http.post(serviceBase + 'api/account/AddTransaction', registration, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };


    var _SaveTransaction2 = function (registration) {
        var dd = "";
        return $http.post(serviceBase + 'api/account/AddTransaction2', registration, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };

    var _SaveTransaction3 = function (registration) {
        var dd = "";
        return $http.post(serviceBase + 'api/account/AddTransaction3', registration, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };
    


    var _SaveBank = function (registration) {
        var dd = "";
        return $http.post(serviceBase + 'api/account/AddBank', registration, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };

    var _SaveInstitutionType = function (registration) {
        var dd = "";
        return $http.post(serviceBase + 'api/account/AddInstutionType', registration, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };

    var _SaveSubscription = function (registration) {
        var dd = "";
        return $http.post(serviceBase + 'api/account/AddSubscription', registration, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };


    var _UpdateSubscription = function (registration) {
        var dd = "";
        return $http.post(serviceBase + 'api/account/UpdateSubscription', registration, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };


      var _UpdateInstitution = function (registration) {
        var dd = "";
        return $http.post(serviceBase + 'api/account/UpdateInstitution', registration, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };



    var _UpdateInstitutionType = function (registration) {
        var dd = "";
        return $http.post(serviceBase + 'api/account/UpdateInstitutionType', registration, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };



    var _SaveAdditionalFee = function (registration) {
        var dd = "";
        return $http.post(serviceBase + 'api/account/AddAdditionalFee', registration, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };

    var _GetSpecificProduct = function (registration) {
        // var serviceBase2 = "http://localhost:24322/";

        return $http.post(serviceBase + 'api/account/PostSelectProduct', registration, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };


    var _GetMerchantProduct = function (registration) {
        // var serviceBase2 = "http://localhost:24322/";

        return $http.post(serviceBase + 'api/account/PostSelectProduct2', registration, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };

    var _GetYear = function () {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();


        $http.get(serviceBase + 'api/account/GetYear', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _ReturnUrl = function () {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();


        $http.get(serviceBase + 'api/account/ReturnUrl', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _ReturnUrl2 = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

           var data = {
            property1: dd
        };

           $http.get(serviceBase + 'api/account/ReturnUrl2', { params: data },{ headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _GetFee = function () {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();


        $http.get(serviceBase + 'api/account/GetFee', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _GetAllMerchant = function () {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();


        $http.get(serviceBase + 'api/account/GetAllMerchant', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

  


    var _GetClient = function () {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();


        $http.get(serviceBase + 'api/account/GetClient', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _GetInstitution = function () {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();


        $http.get(serviceBase + 'api/account/GetInstitution', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };


    var _GetInstitution3 = function () {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();


        $http.get(serviceBase + 'api/account/GetInstitution3', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _GetInstitution33 = function () {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();


        $http.get(serviceBase + 'api/account/GetInstitution33', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _GetTransaction2 = function () {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();


        $http.get(serviceBase + 'api/account/GetTransaction2', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _GetTransaction12 = function () {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();


        $http.get(serviceBase + 'api/account/GetTransaction12', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _GetTransaction3 = function () {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();


        $http.get(serviceBase + 'api/account/GetTransaction3', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _GetTransaction3b = function (dd,dd2,dd3,dd4,dd5,dd6) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            start_date: dd,
            end_date: dd2,
            studentnumber: dd3,
            institution: dd4,
            subscription: dd5,
            paymentstatus: dd6
        };


        $http.get(serviceBase + 'api/account/GetTransaction3b', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _GetTransaction3bb = function (dd, dd2, dd3, dd4, dd5, dd6) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            start_date: dd,
            end_date: dd2,
            studentnumber: dd3,
            institution: dd4,
            subscription: dd5,
            paymentstatus: dd6
        };


        $http.get(serviceBase + 'api/account/GetTransaction3bb', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };


    var _SearchUpload = function (dd, dd2,dd3) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            service: dd,
            year: dd2,
            Institution: dd3
        };


        $http.get(serviceBase + 'api/account/SearchUpload', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };


    var _SearchUpload2 = function (dd, dd2, dd3) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            service: dd,
            year: dd2,
            Institution: dd3
        };


        $http.get(serviceBase + 'api/account/SearchUpload2', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _SearchResult = function (dd, dd2, dd3,dd4) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            service: dd,
            year: dd2,
            Institution: dd3,
            studentid: dd4
        };


        $http.get(serviceBase + 'api/account/SearchResult', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _SearchResult3 = function (dd, dd2, dd3, dd4,dd5) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            service: dd,
            year: dd2,
            Institution: dd3,
            studentid: dd4,
            email: dd5
        };


        $http.get(serviceBase + 'api/account/SearchResult3', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _SearchResult2 = function (dd, dd2, dd3) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            service: dd,
           
            Institution: dd2,
            studentid: dd3
        };


        $http.get(serviceBase + 'api/account/SearchResult2', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _SearchResult4 = function (dd, dd2, dd3,dd4) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            service: dd,

            Institution: dd2,
            studentid: dd3,
            email: dd3
        };


        $http.get(serviceBase + 'api/account/SearchResult4', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };


    var _DelUpload = function (dd, dd2, dd3) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            service: dd,
            year: dd2,
            Institution: dd3
        };


        $http.get(serviceBase + 'api/account/DelUpload', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _AppUpload = function (dd, dd2, dd3) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            service: dd,
            year: dd2,
            Institution: dd3
        };


        $http.get(serviceBase + 'api/account/AppUpload', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _GetTransaction5 = function () {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();


        $http.get(serviceBase + 'api/account/GetTransaction5', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _GetTransaction6 = function () {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();


        $http.get(serviceBase + 'api/account/GetTransaction6', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };



    var _GetTransaction4 = function () {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();


        $http.get(serviceBase + 'api/account/GetTransaction4', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {



            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
      

        return deferred.promise;

    };


    var _GetSubscriptionDetailCount = function () {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();


        $http.get(serviceBase + 'api/account/GetSubscriptionDetailCount', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {



            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });


        return deferred.promise;

    };


    



    var _SaveAgreement = function (registration) {
        var dd = "";
        return $http.post(serviceBase + 'api/account/Aggrement', registration, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };

    var _SaveUploadData = function (registration) {
        var dd = "";
        return $http.post(serviceBase + 'api/account/PostUploadPartnerData', registration, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };


   

    var _AssignedUser = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/GetRoles3' , { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _CheckChangePassword = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/CheckChangePassword', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _ConfirmUser = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/UserConfirm', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };


    var _GetCountResult = function (dd,dd2,dd3,dd4) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd,
            property2: dd2,
            property3: dd3,
            property4: dd4
        };


        $http.get(serviceBase + 'api/account/GetCountResult', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

                   deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
      

        return deferred.promise;

    };


    var _GetCountResult2b = function (dd, dd2, dd3) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd,
            property2: dd2,
            property3: dd3
           
        };


        $http.get(serviceBase + 'api/account/GetCountResult2b', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };


    var _GetCountResult2 = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/GetCountResult2', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };


    var _GetCountResult22 = function (dd,dd2,dd3) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd,
            property2: dd2,
            property3: dd3
        };


        $http.get(serviceBase + 'api/account/GetCountResult22', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _SaveSubscriptionDetail2 = function (registration, registration2) {
        var dd = "";

        var data2 = {
            property1: registration2
        };

        return $http.post(serviceBase + 'api/account/AddSubscription_Detail2', registration, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };

    var _DeleteClient = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/DeleteClients', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };


    var _RawXml = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/GetRawXml', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };


     var _GetPageUrl = function (dd,dd2) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd,
            property2: dd2
        };


         $http.get(serviceBase + 'api/account/GetPageUrl', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };


    var _UpdateSubscriptionCode = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/UpdateSubscriptionCode', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };


    var _ResetPassword = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/ResetPassword', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };


    var _DeleteUser = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/DeleteUser', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };


    var _DeleteSubscription = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/DeleteSubscription', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _DeleteRole = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/DeleteRole', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _DeleteAgrement = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/DeleteAggrement', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };


    var _DeleteInstitutionType = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/DeleteInstitutionType', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };



    var _GetUserCount = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/GetUserCount', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _GetLoggedUser = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/GetLoginUser', { params: data }, { headers: { 'Content-Type': 'application/json' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _GetSubscriptionCount = function (dd,dd2) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd,
            property2: dd2
        };


        $http.get(serviceBase + 'api/account/GetSubscriptionCount', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {
      //  $http.get(serviceBase + 'api/account/GetSubscriptionCount', { property1: dd, property2: dd2 }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };
   

    var _GetUserRight = function (menuname, voperation) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();




        //  $http.get(serviceBase + 'api/account/GetSubscriptionCount', { property1: dd, property2: dd2 }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

        //  alert("tony response ="+response);
        //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });
        var pix = false;
        var dd = "";
        if (localStorageService.get("username") != null) {
            var kq2 = localStorageService.get("access_right2");
            var kq3 = localStorageService.get("access_right");
            if (localStorageService.get("username") == null) {
                menuname = "";
                voperation = "";
                deferred.resolve(pix);
            }

            if (menuname == "Verify Result" && kq3.length == 0) {
                pix = true;
                deferred.resolve(pix);
            }

            if (menuname == "Print Transcript" && kq3.length == 0) {
                pix = true;
                deferred.resolve(pix);
            }

            if (menuname == "Generate Certificate" && kq3.length == 0) {
                pix = true;
                deferred.resolve(pix);
            }
            //angular.forEach(kq2, function (item) {
            if (kq2 != null) {

                for(var item of kq2) {


                    if (voperation == "View") {
                        if (menuname == item.Menu_Code && item.View == "true") {
                            pix = true;

                        }

                    }

                    if (voperation == "CreateNew") {
                        if (menuname == item.Menu_Code && item.CreateNew == "true") {
                            pix = true;

                        }

                    }

                    if (voperation == "UpadateNew") {
                        if (menuname == item.Menu_Code && item.UpadateNew == "true") {
                            pix = true;

                        }

                    }

                    if (voperation == "DeleteNew") {
                        if (menuname == item.Menu_Code && item.DeleteNew == "true") {
                            pix = true;

                        }

                    }

                }
                deferred.resolve(pix);
            }
            //).error(function (err, status) {

            //    deferred.reject(err);
            //});
            //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
            //    return response;
            //});
        }
        else {
             deferred.resolve(pix);
        }
        return deferred.promise;

    };

    

    var _GetService = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
           
        };


        $http.get(serviceBase + 'api/account/GetService', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _GetClient3 = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd

        };


        $http.get(serviceBase + 'api/account/GetClient2', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };


    var _GetTransaction = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/GetTransaction', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };


    var _GetSubscriptionCode= function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/GetSubscriptionCode', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };


    var _GetInstitution2 = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/GetInstitution2', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };


    var _GetInstitution3 = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/GetInstitution3', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };


    var _GetBankDetails = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/GetBankDetails', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };


    var _login = function (loginData) {

        var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        var AgentsData = {

            "username": loginData.userName,
            "password": loginData.password


        };

        $http.post(serviceBase + 'api/account/GetLoginToken2', AgentsData, { headers: { 'Content-Type': 'application/json' } }).success(function (response) {

            //  alert(response.access_token);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });

            //  alert(response.access_token);

            if (response.Email == null || response.Email == undefined) {

                swal("", "Invalid Username/Password", "error")

                return;
            }
          //  $rootScope.token = response.access_token;
           // localStorageService.set("access_token", response.access_token);
            $rootScope.username = response.Email;
            alert(response.Email)
            localStorageService.set("username", response.Email);

            $rootScope.login = true;

         

            $rootScope.username = response.Email;

            $rootScope.islogin = true;

            $rootScope.islogout = false;


         

            _authentication.isAuth = true;
            _authentication.userName = response.Email;

            deferred.resolve(response);

        }).error(function (err, status) {
            _logOut();
            deferred.reject(err);
        });




        return deferred.promise;

    };


    var _checkout= function (applicant,shoppingcart,agent) {

      

        var deferred = $q.defer();
        var AgentsData = {


            bb: applicant,
            cc: shoppingcart,
            dd: agent

        };
       
        

        $http.post(serviceBase + 'api/account/AddFeeList',AgentsData, { headers: { 'Content-Type': 'application/json' } }).success(function (response) {

            //  alert(response.access_token);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });

            //  alert(response.access_token);

            



          

            deferred.resolve(response);

        }).error(function (err, status) {
           // _logOut();
            deferred.reject(err);
        });




        return deferred.promise;

    };

    var _ProceedToPayment = function (applicant, shoppingcart, agent, twallet) {



        var deferred = $q.defer();
        var AgentsData = {


            bb: applicant,
            cc: shoppingcart,
            dd: agent,
            ee:twallet

        };



        $http.post(serviceBase + 'api/account/ProceedToPayment', AgentsData, { headers: { 'Content-Type': 'application/json' } }).success(function (response) {

            //  alert(response.access_token);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });

            //  alert(response.access_token);







            deferred.resolve(response);

        }).error(function (err, status) {
            // _logOut();
            deferred.reject(err);
        });




        return deferred.promise;

    };


    var _PaymentDetail = function (applicant, shoppingcart, agent, twallet, InterSwitchPostFields) {



        var deferred = $q.defer();
        var AgentsData = {


            bb: applicant,
            cc: shoppingcart,
            dd: agent,
            ee: twallet,
            ff: InterSwitchPostFields

        };



        $http.post(serviceBase + 'api/account/PaymentDetail', AgentsData, { headers: { 'Content-Type': 'application/json' } }).success(function (response) {

            //  alert(response.access_token);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });

            //  alert(response.access_token);







            deferred.resolve(response);

        }).error(function (err, status) {
            // _logOut();
            deferred.reject(err);
        });




        return deferred.promise;

    };


    var _formx = function (applicant, shoppingcart, agent, twallet, InterSwitchPostFields) {



        var deferred = $q.defer();
        var AgentsData = {


            bb: applicant,
            cc: shoppingcart,
            dd: agent,
            ee: twallet,
            ff: InterSwitchPostFields

        };



        $http.post(serviceBase + 'api/account/formx', AgentsData, { headers: { 'Content-Type': 'application/json' } }).success(function (response) {

            //  alert(response.access_token);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });

            //  alert(response.access_token);







            deferred.resolve(response);

        }).error(function (err, status) {
            // _logOut();
            deferred.reject(err);
        });




        return deferred.promise;

    };

    var _PostPayment = function () {



        var deferred = $q.defer();
       
        var aa = $("#form1").submit();
        deferred.resolve(aa);

    

        alert("submited")

      


        return deferred.promise;

    };


    var _changepassword = function (loginData) {

       // var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();
       // $http.post(serviceBase + 'api/account/AddSubscription_Detail2', registration, {
        $http.post(serviceBase + 'api/account/ChangePassword', loginData, { headers: { 'Content-Type': 'application/json' } }).success(function (response) {

           
           

            deferred.resolve(response);

        }).error(function (err, status) {
            _logOut();
            deferred.reject(err);
        });




        return deferred.promise;

    };



    var _contactus = function (loginData) {

        // var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();
        // $http.post(serviceBase + 'api/account/AddSubscription_Detail2', registration, {
        $http.post(serviceBase + 'api/account/ContactUs', loginData, { headers: { 'Content-Type': 'application/json' } }).success(function (response) {




            deferred.resolve(response);

        }).error(function (err, status) {
            _logOut();
            deferred.reject(err);
        });




        return deferred.promise;

    };





    var _check_access = function () {

        // var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        $http.get(serviceBase + 'api/account/GetMerchant', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };


    var _GetAggrement = function () {

        // var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        $http.get(serviceBase + 'api/account/GetAggrement', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };


    var _facebook = function () {

        // var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();
        var dd = "Facebook";

      //  var data = "Provider=" + dd ;

      

        $http.get(serviceBase + 'api/account/GetExternalLogin2',  { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert(response.access_token);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });

            //  alert(response.access_token);
            $rootScope.token = response.access_token;
            $rootScope.username = loginData.userName;

            Session.set("token", response.access_token);

            Session.set("username", loginData.userName);

            _authentication.isAuth = true;
            _authentication.userName = loginData.userName;

            deferred.resolve(response);

        }).error(function (err, status) {
            _logOut();
            deferred.reject(err);
        });


        //$http.get(serviceBase + 'api/account/ExternalLogin2', { headers: { 'Access-Control-Allow-Origin': true, 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

        //    //  alert("tony response ="+response);
        //    //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


        //    deferred.resolve(response);

        //}).error(function (err, status) {

        //    deferred.reject(err);
        //});

        return deferred.promise;

    };



    var _Get_Product = function () {

        // var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        $http.get(serviceBase + 'api/account/GetProduct', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };

    var _Get_Role = function () {

        // var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        $http.get(serviceBase + 'api/account/GetRoles', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };

    var _Get_Role2 = function () {

        // var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        $http.get(serviceBase + 'api/account/GetAllRoles2', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };

    var _GetTopMenu = function () {

        // var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        $http.get(serviceBase + 'api/account/GetTopMenu', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };

    var _GetTopMenu2 = function (reg) {

        // var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        var data = {
            property1: reg
           
        };

        $http.get(serviceBase + 'api/account/GetTopMenu2', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {
       

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };

    var _GetTopMenu3 = function (reg) {

        // var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        var data = {
            property1: reg

        };

        $http.get(serviceBase + 'api/account/GetTopMenu3', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {


            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };



    var _Get_Users = function () {

        // var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        $http.get(serviceBase + 'api/account/GetAllUser', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };

    var _Get_Institution4 = function () {

        // var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        $http.get(serviceBase + 'api/account/GetInstitution4', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };

    var _GetService4 = function () {

        // var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        $http.get(serviceBase + 'api/account/GetService4', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };


    var _Get_Subscription = function () {

        // var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        $http.get(serviceBase + 'api/account/GetSubscription', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };

    var _Get_AdditionalFee = function () {

        // var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        $http.get(serviceBase + 'api/account/GetAdditionalFee', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };

    var _Get_Subscription3 = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
           
        };


        $http.get(serviceBase + 'api/account/GetSubscription2', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _Get_Subscription2 = function (dd,dd2) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd,
            property2: dd2
        };


        $http.get(serviceBase + 'api/account/GetUserSubscribe', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };


    var _GetTransaction = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/GetTransaction', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };


    var _Subscription_Type = function () {

        // var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        $http.get(serviceBase + 'api/account/GetSubscriptionType', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };

    var _Get_Role2 = function () {

        // var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        $http.get(serviceBase + 'api/account/GetRoles2', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };


    var _Get_Bank = function () {

        // var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        $http.get(serviceBase + 'api/account/GetBank', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };

    var _Get_InstitutionType = function () {

        // var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        $http.get(serviceBase + 'api/account/GetInstitutionType', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };



    var _GetMerchant = function () {

        // var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        $http.get(serviceBase + 'api/account/GetAllMerchant', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };

    var _logOut = function () {

        //  localStorageService.remove('authorizationData');
        $rootScope.token = "";
        $rootScope.username = "";
        _authentication.isAuth = false;
        _authentication.userName = "";

    };

    var _fillAuthData = function () {

        var authData = localStorageService.get('authorizationData');
        if (authData) {
            _authentication.isAuth = true;
            _authentication.userName = authData.userName;
        }

    }

    authServiceFactory.saveRegistration = _saveRegistration;

    authServiceFactory.saveRegistration3 = _saveRegistration3;

    
    authServiceFactory.login = _login;
    authServiceFactory.logOut = _logOut;
    authServiceFactory.fillAuthData = _fillAuthData;
    authServiceFactory.authentication = _authentication;

    authServiceFactory.checkaccess = _check_access;

    authServiceFactory.GetAllMerchant = _GetMerchant;

    authServiceFactory.saveProduct = _saveProduct;

    authServiceFactory.GetProduct = _Get_Product;

    authServiceFactory.GetSpecificProduct = _GetSpecificProduct;

    authServiceFactory.GetAllMerchant2 = _GetAllMerchant;


    authServiceFactory.GetMerchantProduct = _GetMerchantProduct;


    authServiceFactory.SaveRoles = _saveRoles;

    authServiceFactory.facebook = _facebook;

    authServiceFactory.Get_Role = _Get_Role;

    authServiceFactory.Get_Role2 = _Get_Role2;

    authServiceFactory.assignRoles = _assignRoles;

    authServiceFactory.AssignedUser = _AssignedUser;

    authServiceFactory.SaveBank = _SaveBank;

    authServiceFactory.Get_Bank = _Get_Bank;
    authServiceFactory.Subscription_Type = _Subscription_Type;
    authServiceFactory.SaveSubscription = _SaveSubscription;

    authServiceFactory.Get_Subscription = _Get_Subscription;

    authServiceFactory.SaveClient = _saveClient;

    authServiceFactory.GetClient = _GetClient;

    authServiceFactory.DeleteClient = _DeleteClient;

    authServiceFactory.GetInstitution = _GetInstitution;

    authServiceFactory.GetInstitution2 = _GetInstitution2;

    authServiceFactory.GetInstitution3 = _GetInstitution3;
   
    authServiceFactory.GetBankDetails = _GetBankDetails;

    authServiceFactory.GetSubscriptionCode = _GetSubscriptionCode;

    authServiceFactory.SaveTransaction = _SaveTransaction;

    authServiceFactory.GetTransaction = _GetTransaction;

    authServiceFactory.GetTransaction2 = _GetTransaction2;
    authServiceFactory.SaveSubscriptionDetail2 = _SaveSubscriptionDetail2;

    authServiceFactory.GetSubscriptionCount = _GetSubscriptionCount;

    authServiceFactory.UpdateSubscriptionCode = _UpdateSubscriptionCode;

    authServiceFactory.GetInstitution3 = _GetInstitution3;

    authServiceFactory.GetTransaction3 = _GetTransaction3;

    authServiceFactory.GetTransaction3b = _GetTransaction3b

    authServiceFactory.GetTransaction4 = _GetTransaction4;

    authServiceFactory.GetTransaction5 = _GetTransaction5;
    

    authServiceFactory.Changepassword = _changepassword;

    authServiceFactory.SaveRegistration2 = _saveRegistration2;

    authServiceFactory.Get_Institution4 = _Get_Institution4;


    authServiceFactory.GetPageUrl = _GetPageUrl;


    authServiceFactory.SaveTransaction2 = _SaveTransaction2;

    authServiceFactory.SaveAgreement = _SaveAgreement;

    authServiceFactory.GetAggrement = _GetAggrement;

    authServiceFactory.ConfirmUser = _ConfirmUser;

    authServiceFactory.GetCountResult = _GetCountResult;

    authServiceFactory.GetCountResult2 = _GetCountResult2


    authServiceFactory.Get_Users = _Get_Users;

    authServiceFactory.DeleteUser = _DeleteUser;
    authServiceFactory.Get_Subscription2 = _Get_Subscription2;
    authServiceFactory.SaveTransaction3 = _SaveTransaction3;
    authServiceFactory.ResetPassword = _ResetPassword;

    authServiceFactory.GetTransaction12 = _GetTransaction12;
    authServiceFactory.RawXml2 = _RawXml;

    authServiceFactory.GetService = _GetService;

    authServiceFactory.GetUserCount = _GetUserCount;

    authServiceFactory.Contactus = _contactus;
    authServiceFactory.SaveInstitutionType = _SaveInstitutionType;
    
    authServiceFactory.Get_InstitutionType = _Get_InstitutionType;

    authServiceFactory.GetTransaction6 = _GetTransaction6;
    authServiceFactory.Get_AdditionalFee = _Get_AdditionalFee;

    authServiceFactory.SaveAdditionalFee = _SaveAdditionalFee;
    
    authServiceFactory.GetLoggedUser = _GetLoggedUser ;

    authServiceFactory.GetCountResult22 = _GetCountResult22;
    authServiceFactory.GetCountResult2b = _GetCountResult2b ;

    authServiceFactory.DeleteSubscription = _DeleteSubscription ;

    authServiceFactory.UpdateSubscription = _UpdateSubscription;

    authServiceFactory.DeleteInstitutionType = _DeleteInstitutionType;

    authServiceFactory.UpdateInstitutionType = _UpdateInstitutionType;

    authServiceFactory.UpdateInstitution = _UpdateInstitution;

    authServiceFactory.GetService4 = _GetService4 ;

    authServiceFactory.SaveUploadData = _SaveUploadData;
    authServiceFactory.SearchUpload = _SearchUpload;

    authServiceFactory.DelUpload = _DelUpload

    
    authServiceFactory.GetInstitution33 = _GetInstitution33;
    
    authServiceFactory.SearchResult = _SearchResult;

    authServiceFactory.SearchResult2 = _SearchResult2;

    authServiceFactory.SearchResult3 = _SearchResult3;

    authServiceFactory.SearchResult4 = _SearchResult4;
    
    authServiceFactory.DeleteRole = _DeleteRole;
    
    authServiceFactory.saveMenu = _saveMenu
    
    authServiceFactory.GetTopMenu = _GetTopMenu ;
    
    authServiceFactory.GetTopMenu2 = _GetTopMenu2
    
    authServiceFactory.SaveRoles2 = _saveRoles2
    
    authServiceFactory.GetUserRight = _GetUserRight;
   
    authServiceFactory.GetClient3 = _GetClient3;
    authServiceFactory.GetYear = _GetYear ;

    authServiceFactory.Get_Subscription3 = _Get_Subscription3;

    authServiceFactory.CheckChangePassword = _CheckChangePassword;

    authServiceFactory.AppUpload = _AppUpload;
    
    authServiceFactory.GetTransaction3bb = _GetTransaction3bb;

    authServiceFactory.Get_Role2 = _Get_Role2;

    authServiceFactory.GetTopMenu3 = _GetTopMenu3;

    authServiceFactory.GetSubscriptionDetailCount = _GetSubscriptionDetailCount;

    authServiceFactory.DeleteAgrement = _DeleteAgrement;

    authServiceFactory.GetFee = _GetFee;

    authServiceFactory.checkout = _checkout

    authServiceFactory.ProceedToPayment =_ProceedToPayment;

    authServiceFactory.PaymentDetail = _PaymentDetail;

    authServiceFactory.formx = _formx;

    authServiceFactory.PostPayment = _PostPayment

    authServiceFactory.ReturnUrl = _ReturnUrl;
    authServiceFactory.ReturnUrl2 = _ReturnUrl2;

    return authServiceFactory;
}]);

