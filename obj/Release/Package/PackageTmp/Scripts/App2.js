var app = angular.module('formApp', ['angularSpinner']);


var serviceBase = 'http://88.150.164.30/NewTrademark/';
//var serviceBase = 'http://localhost:24322/';
// configuring our routes 
// =============================================================================


// our controller for the form
// =============================================================================
app.controller('formController', function ($scope, $rootScope, $http, $location,usSpinnerService) {
    var cc = "";
    $(document).ready(function () {

        $scope.xname = $("input#xname").val();

       

        var cc = $scope.xname;
        var data = {
            property1: cc
        };



        $http.get(serviceBase + 'api/account/ReturnUrl2', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });

            var dd = response;
            $scope.AllField = dd;
          //  $scope.AllField.ff.site_redirect_url = dd.ff.site_redirect_url + "?txnRef2=" + dd.ee.transID;

            var totaltechamt = 0.0;
            var totalintamt = 0.0;

            angular.forEach(dd.pp, function (item) {

                totaltechamt = totaltechamt + (parseFloat(item.tech_amt) * parseFloat(item.xqty));
                totalintamt = totalintamt + (parseFloat(item.init_amt) * parseFloat(item.xqty));

               


            });
            $scope.tech_amt = totaltechamt * 100;
            $scope.init_amt = totalintamt * 100;
           
       //     $("#form1").submit();
          //  $("#form1").submit();


        }).error(function (err, status) {

            var pp = err;
        });

        //$scope.xname2 = $("input#xname3").val();

    });
    $scope.submitForm = function () {

        usSpinnerService.spin('spinner-1');
        var aa = $("#form1").submit();
        }

  
   


    $(document).ready(function () {
        var selectedVal = "";



    });




});






