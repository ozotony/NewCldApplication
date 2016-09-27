(function (window) {



    var app = angular.module('starter', ['ionic', 'ui.router', 'ngAnimate', 'ngSanitize', 'mgcrea.ngStrap', 'LocalStorageModule', 'ngMessages', 'angular-loading-bar', 'facebook', 'smart-table', 'ngModal', '720kb.datepicker']);

    app.run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })


    app.config(function (localStorageServiceProvider) {
        localStorageServiceProvider
          .setStorageType('sessionStorage');
    });



    app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
    ]);





    app.config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptorService');
    });







    app.config(
                 ['$stateProvider',
                  '$urlRouterProvider',

         function ($stateProvider,
                   $urlRouterProvider) {

             //$locationProvider.html5Mode(true);

             $stateProvider

                 .state('app', {
                     url: '/app',
                     abstract: true,
                     templateUrl: 'templates/menu.html',
                     controller: 'AppCtrl'
                 })

.state('app.home', {
    url: '/',
    views: {
        'menuContent': {
            templateUrl: 'partial/Index2.html',
            controller: 'Home3Controller'
        }
    }
})

                 .state('app.profile', {
    url: '/profile',
    views: {
        'menuContent': {
            templateUrl: 'partial/profile.html',
            controller: 'Home4Controller'
        }
    }
})


               .state('app.Applicant', {
                   url: '/Applicant',
                   views: {
                       'menuContent': {
                           templateUrl: 'partial/Applicant.html',
                           controller: 'ApplicantController'
                       }
                   }
               })

                   .state('app.Fee', {
                       url: '/Fee',
                       views: {
                           'menuContent': {
                               templateUrl: 'partial/Fee.html',
                               controller: 'FeeController'
                           }
                       }
                   })

                  .state('app.Minvoice', {
                      url: '/Minvoice',
                      views: {
                          'menuContent': {
                              templateUrl: 'partial/Minvoice.html',
                              controller: 'MinvoiceController'
                          }
                      }
                  })


                 .state('app.ProceedToPayment', {
                     url: '/ProceedToPayment',
                     views: {
                         'menuContent': {
                             templateUrl: 'partial/ProceedToPayment.html',
                             controller: 'ProceedToPaymentController'
                         }
                     }
                 })

                
                  .state('app.PaymentDetail', {
                      url: '/PaymentDetail',
                      views: {
                          'menuContent': {
                              templateUrl: 'partial/PaymentDetail.html',
                              controller: 'PaymentDetailController'
                          }
                      }
                  })


                  .state('app.Formx', {
                      url: '/Formx',
                      views: {
                          'menuContent': {
                              templateUrl: 'partial/Formx.html',
                              controller: 'FormxController'
                          }
                      }
                  })



                 .state('app.ReturnUrl', {
                     url: '/ReturnUrl',
                     views: {
                         'menuContent': {
                             templateUrl: 'partial/ReturnUrl.html',
                             controller: 'ReturnUrlController'
                         }
                     }
                 })


                   .state('app.SelectedItem', {
                       url: '/SelectedItem',
                       views: {
                           'menuContent': {
                               templateUrl: 'partial/SelectedItem.html',
                               controller: 'SelectedItemController'
                           }
                       }
                   })

              .state('app.form', {
                  url: '/form',
                  views: {
                      'menuContent': {
                          templateUrl: 'partial/form.html',
                          controller: 'formController'
                      }
                  }
              })




                   .state('app.logout', {
                       url: '/logout',
                       views: {
                           'menuContent': {
                               templateUrl: 'partial/logout.html',
                               controller: 'logoutController'
                           }
                       }
                   })



             


              

             //  /AssignRole/Data
             // $urlRouterProvider.otherwise('/');

             $urlRouterProvider.otherwise('/');
         }]);






    app.controller('logoutController', function ($scope, $http, $rootScope, localStorageService, authService, $location) {
        //   $facebook.parse();
        localStorageService.set("username", null);
        localStorageService.set("user", null);
        localStorageService.set("vurl", null);
        localStorageService.set("vurl2", null);

        localStorageService.set("applicant", null);


        $rootScope.islogin = false;

        $rootScope.islogout = true;
        localStorageService.set("access_token", null);
        localStorageService.set("access_right", null);

        localStorageService.set("loginuser", null);
        $rootScope.SearchAll = false;
        $rootScope.AdminAll = false;
        $rootScope.PartnerSearch = false;
        $rootScope.SearchResultTransaction = false;
        $rootScope.SearchTranscriptTransaction = false;
        $rootScope.SearchCertificateTransaction = false;

        $rootScope.isAdmin = false;
        $rootScope.isInstitution = false;


        $location.path("/")


    });


    app.controller('ForgotPasswordController', function ($scope, $http, $rootScope, localStorageService, authService, $location) {


        $scope.submitForm = function (vform, isValid) {

            if (isValid) {


                authService.ResetPassword(vform.email).then(function (data, status) {

                    swal("", "A new password has been sent to your email", "success");

                },
 function (response) {
     //  ajaxindicatorstop();

     var errors = [];
     for (var key in response.data.modelState) {
         for (var i = 0; i < response.data.modelState[key].length; i++) {
             errors.push(response.data.modelState[key][i]);
         }
     }
     $scope.message = "Failed to register user due to:" + errors.join(' ');
 });



            }
        };
        var kq = localStorageService.get("access_right");
        for (var key in kq) {

            if (kq[key] == "ADMIN") {

                $rootScope.isAdmin = true;
            }


            if (kq[key] == "PARTNER") {

                $rootScope.isInstitution = true;
            }


            // alert($rootScope.Roles[key])
        }


        if (localStorageService.get("username") == null) {
            //  alert("username=" + localStorageService.get("username"))

            $rootScope.islogin = false;

            $rootScope.islogout = true;
        }

        else {

            $rootScope.islogin = true;

            $rootScope.islogout = false;
            $rootScope.username = localStorageService.get("username")
        }
    });



    app.controller('AboutController', function ($scope, $http, $rootScope, localStorageService, authService, $location) {
        $rootScope.vhome2 = true;
        $rootScope.vhome = false;
        $rootScope.vhome3 = false;
        var kq = localStorageService.get("access_right");
        //for (var key in kq) {

        //    if (kq[key] == "ADMIN") {

        //        $rootScope.isAdmin = true;
        //    }


        //    if (kq[key] == "PARTNER") {

        //        $rootScope.isInstitution = true;
        //    }


        //    // alert($rootScope.Roles[key])
        //}

        if (localStorageService.get("username") == null) {
            //  alert("username=" + localStorageService.get("username"))

            $rootScope.islogin = false;

            $rootScope.islogout = true;
        }

        else {

            $rootScope.islogin = true;

            $rootScope.islogout = false;
            $rootScope.username = localStorageService.get("username")
        }
    });


    app.controller('MinvoiceController', function ($scope, $http, $rootScope, localStorageService, authService, $location) {


        $scope.Shopping_card3 = localStorageService.get("Shopping_card2")

        $scope.applicant = localStorageService.get("applicant");
        $scope.agent = localStorageService.get("user");
        $scope.twallet = localStorageService.get("twallet");

        $scope.itemsByPage = 100;
        $scope.ListAgent = $scope.Shopping_card3;

        $scope.displayedCollection = [].concat($scope.ListAgent);

        $scope.vTotal = 0;

        angular.forEach($scope.Shopping_card3, function (item) {

            $scope.vTotal = $scope.vTotal + parseFloat(item.amt);


        });



        $scope.submitForm = function () {
            var Shopping_card = []
            Shopping_card = localStorageService.get("Shopping_card2");
            var applicant = localStorageService.get("applicant");
            var agent = localStorageService.get("user");
            var twallet = localStorageService.get("twallet");






            authService.ProceedToPayment(applicant, Shopping_card, agent, twallet).then(function (data, status) {
                var dd = data;
                localStorageService.set("InterSwitchPostFields", data);

                $location.path("/ProceedToPayment");



            });





        }



        if (localStorageService.get("username") == null) {
            //  alert("username=" + localStorageService.get("username"))

            $rootScope.islogin = false;

            $rootScope.islogout = true;
        }

        else {

            $rootScope.islogin = true;

            $rootScope.islogout = false;
            $rootScope.username = localStorageService.get("username")

            var dx = localStorageService.get("user");

            $rootScope.vurl = dx.imageurl + dx.Principal;
            $rootScope.vurl2 = dx.imageurl + dx.logo;
            //  authService2.CheckAccess();

        }
    });

    app.controller('ProceedToPaymentController', function ($scope, $http, $rootScope, localStorageService, authService, $location) {


        $scope.Shopping_card3 = localStorageService.get("Shopping_card2")

        $scope.applicant = localStorageService.get("applicant");
        $scope.agent = localStorageService.get("user");
        $scope.twallet = localStorageService.get("twallet");



        angular.forEach($scope.Shopping_card3, function (item) {

            $scope.vTotal = $scope.vTotal + parseFloat(item.amt);


        });


        $scope.getdata = function (obj) {

            $scope.food = obj.target.value;

            alert($scope.food)


            var Shopping_card = []
            Shopping_card = localStorageService.get("Shopping_card2");
            var applicant = localStorageService.get("applicant");
            var agent = localStorageService.get("user");
            var twallet = localStorageService.get("twallet");

            var InterSwitchPostFields = localStorageService.get("InterSwitchPostFields");






            authService.PaymentDetail(applicant, Shopping_card, agent, twallet, InterSwitchPostFields).then(function (data, status) {
                var dd = data;
                //  localStorageService.set("InterSwitchPostFields", data);

                $location.path("/PaymentDetail");



            });
        }



        $scope.submitForm = function () {






        }



        if (localStorageService.get("username") == null) {
            //  alert("username=" + localStorageService.get("username"))

            $rootScope.islogin = false;

            $rootScope.islogout = true;
        }

        else {

            $rootScope.islogin = true;

            $rootScope.islogout = false;
            $rootScope.username = localStorageService.get("username")

            var dx = localStorageService.get("user");

            $rootScope.vurl = dx.imageurl + dx.Principal;
            $rootScope.vurl2 = dx.imageurl + dx.logo;
            //  authService2.CheckAccess();

        }
    });

    app.controller('PaymentDetailController', function ($scope, $http, $rootScope, localStorageService, authService, $location) {


        $scope.Shopping_card3 = localStorageService.get("Shopping_card2")

        $scope.applicant = localStorageService.get("applicant");
        $scope.agent = localStorageService.get("user");
        $scope.twallet = localStorageService.get("twallet");



        $scope.InterSwitchPostFields = localStorageService.get("InterSwitchPostFields");
        $scope.vTotal2 = 0;

        angular.forEach($scope.Shopping_card3, function (item) {

            $scope.vTotal2 = $scope.vTotal2 + parseFloat(item.amt);


        });
        // $scope.amount2 = parseFloat($scope.InterSwitchPostFields.amount / 100)
        $scope.isw_conv_fee2 = parseFloat($scope.InterSwitchPostFields.isw_conv_fee)

        $scope.vtotal = ((parseFloat($scope.vTotal2) + parseFloat($scope.isw_conv_fee2)));






        $scope.submitForm = function () {

            $location.path("/Formx");




        }



        if (localStorageService.get("username") == null) {
            //  alert("username=" + localStorageService.get("username"))

            $rootScope.islogin = false;

            $rootScope.islogout = true;
        }

        else {

            $rootScope.islogin = true;

            $rootScope.islogout = false;
            $rootScope.username = localStorageService.get("username")

            var dx = localStorageService.get("user");

            $rootScope.vurl = dx.imageurl + dx.Principal;
            $rootScope.vurl2 = dx.imageurl + dx.logo;
            //  authService2.CheckAccess();

        }
    });
    app.controller('FormxController', function ($scope, $http, $rootScope, localStorageService, authService, $location) {


        $scope.Shopping_card3 = localStorageService.get("Shopping_card2")

        var Shopping_card = $scope.Shopping_card3;

        $scope.applicant = localStorageService.get("applicant");
        var applicant2 = $scope.applicant
        $scope.agent = localStorageService.get("user");
        var agent2 = $scope.agent
        $scope.twallet = localStorageService.get("twallet");
        var twallet2 = $scope.twallet



        $scope.InterSwitchPostFields = localStorageService.get("InterSwitchPostFields");
        var InterSwitchPostFields2 = $scope.InterSwitchPostFields

        alert($scope.applicant.applicantname)
        $scope.tech_amt = 0.0;
        $scope.init_amt = 0.0;

        angular.forEach($scope.Shopping_card3, function (item) {

            $scope.tech_amt = $scope.tech_amt + parseFloat(item.tech_amt);
            $scope.init_amt = $scope.init_amt + parseFloat(item.init_amt);


        });
        $scope.tech_amt = $scope.tech_amt * 100;
        $scope.init_amt = $scope.init_amt * 100;


        authService.formx(applicant2, Shopping_card, agent2, twallet2, InterSwitchPostFields2).then(function (data, status) {
            var dd = data;
            $scope.vdata = data;
            //  localStorageService.set("InterSwitchPostFields", data);

            //  $location.path("/PaymentDetail");



        });

        // $scope.amount2 = parseFloat($scope.InterSwitchPostFields.amount / 100)







        $scope.submitForm = function () {


            authService.PostPayment().then(function (data, status) {
                var dd = data;
                // $scope.vdata = data;
                //  localStorageService.set("InterSwitchPostFields", data);

                //  $location.path("/PaymentDetail");



            });
            //alert("about")
            //$("#form1").submit();

            //alert("submited")






        }



        if (localStorageService.get("username") == null) {
            //  alert("username=" + localStorageService.get("username"))

            $rootScope.islogin = false;

            $rootScope.islogout = true;
        }

        else {

            $rootScope.islogin = true;

            $rootScope.islogout = false;
            $rootScope.username = localStorageService.get("username")

            var dx = localStorageService.get("user");

            $rootScope.vurl = dx.imageurl + dx.Principal;
            $rootScope.vurl2 = dx.imageurl + dx.logo;
            //  authService2.CheckAccess();

        }
    });


    app.controller('ReturnUrlController', function ($scope, $http, $rootScope, localStorageService, authService, $location) {

        $scope.Shopping_card3 = localStorageService.get("Shopping_card2")

        $scope.visible2 = false;

        $scope.visible3 = false;



        $scope.applicant = localStorageService.get("applicant");

        $scope.agent = localStorageService.get("user");

        $scope.twallet = localStorageService.get("twallet");




        $scope.InterSwitchPostFields = localStorageService.get("InterSwitchPostFields");

        $scope.itemsByPage = 100;
        $scope.ListAgent = $scope.Shopping_card3;

        $scope.displayedCollection = [].concat($scope.ListAgent);

        $scope.vTotal = 0;

        angular.forEach($scope.Shopping_card3, function (item) {

            $scope.vTotal = $scope.vTotal + parseFloat(item.amt);


        });




        authService.ReturnUrl().then(function (data, status) {
            var dd = data;
            $scope.InterSwitchPostFields = dd;
            if (((dd.ResponseCode != "") && (dd.ResponseCode != null)) && (dd.ResponseCode == "00")) {

                $scope.visible2 = true;

                $scope.visible3 = false;

                swal("", "Payment Successful", "success");

            }


            if (((dd.ResponseCode != "") && (dd.ResponseCode != null)) && (dd.ResponseCode != "00")) {

                $scope.visible2 = false;

                $scope.visible3 = true;

                swal("", "Payment Not Successful", "error");
            }
            //  localStorageService.set("InterSwitchPostFields", data);

            //  $location.path("/PaymentDetail");



        });


    });

    app.controller('ApplicantController', function ($scope, $http, $rootScope, localStorageService, authService, $location) {

        $scope.submitForm = function () {

            if (($scope.applicantname == undefined || $scope.applicantname == "") && ($scope.applicantname == undefined || $scope.applicantname == "") && ($scope.email == undefined || $scope.email == "") && ($scope.mobile == undefined || $scope.mobile == "")) {

                swal("", "ALL FIELD MUST BE FILLED", "error")
                return;
            }
            else {

                var Applicant = new Object();
                Applicant.applicantname = $scope.applicantname;
                Applicant.address = $scope.address;
                Applicant.email = $scope.email;
                Applicant.mobile = $scope.mobile;

                localStorageService.set("applicant", Applicant);

                $location.path("/Fee");

            }


        }

        //for (var key in kq) {

        //    if (kq[key] == "ADMIN") {

        //        $rootScope.isAdmin = true;
        //    }


        //    if (kq[key] == "PARTNER") {

        //        $rootScope.isInstitution = true;
        //    }


        //    // alert($rootScope.Roles[key])
        //}




        if (localStorageService.get("username") == null) {
            //  alert("username=" + localStorageService.get("username"))

            $rootScope.islogin = false;

            $rootScope.islogout = true;
        }

        else {

            $rootScope.islogin = true;

            $rootScope.islogout = false;
            $rootScope.username = localStorageService.get("username")

            var dx = localStorageService.get("user");

            $rootScope.vurl = dx.imageurl + dx.Principal;
            $rootScope.vurl2 = dx.imageurl + dx.logo;
            //  authService2.CheckAccess();

        }
    });


    app.controller('SelectedItemController', function ($scope, $http, $rootScope, localStorageService, authService, $location) {
        $scope.Shopping_card3 = [];

        $scope.vTotal = 0;

        if (localStorageService.get("Shopping_card2") != null) {
            $scope.Shopping_card3 = localStorageService.get("Shopping_card2")

            $scope.itemsByPage = 100;


            $scope.displayedCollection2 = [].concat($scope.Shopping_card3);


            angular.forEach($scope.Shopping_card3, function (item) {

                $scope.vTotal = $scope.vTotal + parseFloat(item.amt);


            });

        }
        $scope.submitForm = function () {
            var Shopping_card = []
            Shopping_card = localStorageService.get("Shopping_card2");
            var applicant = localStorageService.get("applicant");
            var agent = localStorageService.get("user");






            authService.checkout(applicant, Shopping_card, agent).then(function (data, status) {
                var dd = data;
                localStorageService.set("twallet", data);

                $location.path("/Minvoice");



            });





        }



        if (localStorageService.get("username") == null) {
            //  alert("username=" + localStorageService.get("username"))

            $rootScope.islogin = false;

            $rootScope.islogout = true;
        }

        else {

            $rootScope.islogin = true;

            $rootScope.islogout = false;
            $rootScope.username = localStorageService.get("username")

            var dx = localStorageService.get("user");

            $rootScope.vurl = dx.imageurl + dx.Principal;
            $rootScope.vurl2 = dx.imageurl + dx.logo;
            //  authService2.CheckAccess();

        }


    });


    app.controller('FeeController', function ($scope, $http, $rootScope, localStorageService, authService, $location) {
        $scope.Shopping_card2 = []

        $scope.vcount = 0;
        $scope.submitForm = function () {
            var vno = 0;
            angular.forEach($scope.Shopping_card2, function (item) {
                var User_Status = new Object();
                item.amt = parseFloat(item.amt) * parseFloat(item.qty);
                item.sn = vno + 1;
                vno = vno + 1;

            });
            localStorageService.set("Shopping_card2", $scope.Shopping_card2);
            $location.path("/SelectedItem");




        }



        $scope.showbtn2 = function (row) {

            if (row.showbtn) {

                return true;
            }

            else {

                return false;
            }


        }



        $scope.EditRow = function (row) {

            if (isNumber(row.qt_code)) {


            }

            else {
                swal("", "Quantity Field Invalid", "error");
                return;

            }

            if (row.qt_code == "" || parseInt(row.qt_code) <= 0) {

                swal("", "Quantity Field Invalid", "error");
                return;
            }

            angular.forEach($scope.displayedCollection, function (item) {
                var User_Status = new Object();
                if (item.item_code == row.item_code && item.sn == row.sn) {
                    item.showbtn = false;
                    item.showbtn2 = true;

                    var Shopping_card = new Object();
                    Shopping_card.amt = item.amt;
                    Shopping_card.init_amt = item.init_amt;
                    Shopping_card.item_code = item.item_code;
                    Shopping_card.item_desc = item.xdesc;
                    Shopping_card.qty = item.qt_code;
                    Shopping_card.tech_amt = item.tech_amt;
                    Shopping_card.xid = item.xid;
                    Shopping_card.sn = item.sn;

                    $scope.Shopping_card2.push(Shopping_card);
                    $scope.vcount = $scope.Shopping_card2.length;



                }







            });

        }


        $scope.EditRow2 = function (row) {



            angular.forEach($scope.displayedCollection, function (item) {
                var User_Status = new Object();
                if (item.item_code == row.item_code && item.sn == row.sn) {
                    item.showbtn = true;
                    item.showbtn2 = false;

                    item.qt_code = "";


                    var Shopping_card = new Object();
                    Shopping_card.amt = item.amt;
                    Shopping_card.init_amt = item.init_amt;
                    Shopping_card.item_code = item.item_code;
                    Shopping_card.item_desc = item.xdesc;
                    Shopping_card.qty = item.qt_code;
                    Shopping_card.tech_amt = item.tech_amt;
                    Shopping_card.xid = item.xid;

                    var index = $scope.Shopping_card2.indexOf(Shopping_card);
                    $scope.Shopping_card2.splice(index, 1);
                    $scope.vcount = $scope.Shopping_card2.length;
                    // alert($scope.Shopping_card2.length)

                }


                //if (item.description == "Acceptance") {

                //    User_Status.online_id = item.oai_no;
                //    User_Status.Status = "Acceptance"
                //    User_Status.Recordid = item.RecordalID;

                //    event2s.push(User_Status)
                //    vcount = vcount + 1;
                //    //alert(item.oai_no)
                //}






            });

        }

        $scope.showbtn3 = function (row) {

            if (row.showbtn2) {

                return true;
            }

            else {

                return false;
            }


        }


        authService.GetFee().then(function (data, status) {
            var dd = data;

            $scope.itemsByPage = 100;
            $scope.ListAgent = dd;

            $scope.displayedCollection = [].concat($scope.ListAgent);


        });


        //for (var key in kq) {

        //    if (kq[key] == "ADMIN") {

        //        $rootScope.isAdmin = true;
        //    }


        //    if (kq[key] == "PARTNER") {

        //        $rootScope.isInstitution = true;
        //    }


        //    // alert($rootScope.Roles[key])
        //}




        if (localStorageService.get("username") == null) {
            //  alert("username=" + localStorageService.get("username"))

            $rootScope.islogin = false;

            $rootScope.islogout = true;
        }

        else {

            $rootScope.islogin = true;

            $rootScope.islogout = false;
            $rootScope.username = localStorageService.get("username")

            var dx = localStorageService.get("user");

            $rootScope.vurl = dx.imageurl + dx.Principal;
            $rootScope.vurl2 = dx.imageurl + dx.logo;
            //  authService2.CheckAccess();

        }
    });



    app.controller('ContactController', function ($scope, $http, $rootScope, localStorageService, authService, $location) {


        //  $state.transitionTo("home")

        var kq = localStorageService.get("access_right");
        //for (var key in kq) {

        //    if (kq[key] == "ADMIN") {

        //        $rootScope.isAdmin = true;
        //    }


        //    if (kq[key] == "PARTNER") {

        //        $rootScope.isInstitution = true;
        //    }


        //    // alert($rootScope.Roles[key])
        //}


        if (localStorageService.get("username") == null) {
            //  alert("username=" + localStorageService.get("username"))

            $rootScope.islogin = false;

            $rootScope.islogout = true;
        }

        else {

            $rootScope.islogin = true;

            $rootScope.islogout = false;
            $rootScope.username = localStorageService.get("username")
        }


        localStorageService.set("test", "testing local storage");

        //  alert(localStorageService.get("test"))

        $scope.vlogin2 = false;
        $scope.vlogin = true;

        $scope.change3 = function () {
            var kkk = $('#password').val();
            var kkk2 = $('#passwd2').val();

            if (kkk != kkk2) {
                swal("", "Confirm Password does not match Password", "error")
                $scope.vform.password3 = "";

                return

            }


        }

        $scope.change2 = function () {
            var kkk = $('#password').val();

            if (kkk.length < 8) {
                swal("", "Password Must be a minimum of 8 characters", "error")
                $scope.vform.password2 = "";
                return;
            }

            var regex = /^(?=.*[A-Z]).+$/;
            if (!(regex.test(kkk))) {

                swal("", "Password Must  contain at least 1 capital letter", "error")
                $scope.vform.password2 = "";
                return;
            }

            //  var regex2 = /^(?=.*[0-9_\W]).+$/;

            var regex2 = new RegExp(/[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);

            //  var regex2 = new RegExp(/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/);
            if (!(regex2.test(kkk))) {

                swal("", "Password Must  contain  at least one special character", "error")
                $scope.vform.password2 = "";
                return;
            }

            var regex3 = /\d/;

            if (!(regex3.test(kkk))) {
                swal("", "Password Must  be   alphanumeric ", "error")
                $scope.vform.password2 = "";
                return;
            }

            var regex4 = /[a-z]/i;

            if (!(regex4.test(kkk))) {
                swal("", "Password Must  be   alphanumeric ", "error")
                $scope.vform.password2 = "";
                return;
            }


        }


        $scope.submitForm = function (vform, isValid) {
            localStorageService.set("access_right2", []);
            if (isValid) {

                var formData = new FormData();

                var AgentsData = {

                    userName: vform.username,
                    password: vform.password



                };

                //authService.ConfirmUser(vform.username).then(function (data, status) {
                //    var dd = data;

                //    if (dd=="true") {


                formData.append("RegisterBindingModel", JSON.stringify(AgentsData));


                authService.login(AgentsData).then(function (data, status) {

                    $scope.savedSuccessfully = true;
                    $scope.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";

                    localStorageService.set("loginuser", data.Email);

                    localStorageService.set("user", data);


                    $rootScope.vurl = data.imageurl + data.Principal;
                    $rootScope.vurl2 = data.imageurl + data.logo;
                    localStorageService.set("vurl", $rootScope.vurl);
                    localStorageService.set("vurl2", $rootScope.vurl2);

                    var ddata3 = data.Email;


                    //$location.path("/profile");
                    $location.path("/#");

                    //if (data.status == "200") {
                    //    swal("Record Saved Successfully");

                    //}


                    //   $location.path("/")
                    //  startTimer();

                },
            function (response) {
                //  ajaxindicatorstop();

                var errors = [];
                for (var key in response.data.modelState) {
                    for (var i = 0; i < response.data.modelState[key].length; i++) {
                        errors.push(response.data.modelState[key][i]);
                    }
                }
                $scope.message = "Failed to register user due to:" + errors.join(' ');
            });







            }

        }


        $scope.submitForm2 = function (vform, isValid) {

            if (isValid) {

                var formData = new FormData();

                var AgentsData = {

                    OldPassword: vform.password,
                    NewPassword: vform.password2,
                    ConfirmPassword: vform.password3


                };



                formData.append("RegisterBindingModel", JSON.stringify(AgentsData));


                authService.Changepassword(AgentsData).then(function (data, status) {


                    localStorageService.set("username", null);
                    $rootScope.islogin = false;

                    $rootScope.islogout = true;
                    localStorageService.set("access_token", null);
                    localStorageService.set("access_right", null);

                    localStorageService.set("loginuser", null);
                    $rootScope.SearchAll = false;
                    $rootScope.AdminAll = false;
                    $rootScope.PartnerSearch = false;
                    $rootScope.SearchResultTransaction = false;
                    $rootScope.SearchTranscriptTransaction = false;
                    $rootScope.SearchCertificateTransaction = false;

                    $rootScope.isAdmin = false;
                    $rootScope.isInstitution = false;
                    swal("", "Password successfully changed. Please re-login to continue", "success")


                    $location.path("/login")

                    //if (data.status == "200") {
                    //    swal("Record Saved Successfully");

                    //}


                    //   $location.path("/")
                    //  startTimer();

                },
            function (response) {
                //  ajaxindicatorstop();

                var errors = [];
                for (var key in response.data.modelState) {
                    for (var i = 0; i < response.data.modelState[key].length; i++) {
                        errors.push(response.data.modelState[key][i]);
                    }
                }
                $scope.message = "Failed to register user due to:" + errors.join(' ');
            });


            }

        }



    }







    );








}(window));