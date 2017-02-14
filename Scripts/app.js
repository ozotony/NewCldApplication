(function (window) {

    'use strict';

    var app = angular.module('app', ['ui.router', 'ngAnimate','ngSanitize', 'mgcrea.ngStrap', 'LocalStorageModule', 'ngMessages', 'angular-loading-bar', 'facebook', 'smart-table', 'ngModal', '720kb.datepicker','ngCsv']);


    app.config(function (localStorageServiceProvider) {
        localStorageServiceProvider
          .setStorageType('sessionStorage');
    });

    app.config(['$facebookProvider', function ($facebookProvider) {
        $facebookProvider.init({
            appId: '528982800546743' ,
            channel: 'http://localhost:24322/Channel.html'
        });
    }
    ]);


    app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
    ]);

    var exportTable = function(){
        var link = function($scope, elm, attr){
            $scope.$on('export-pdf', function(e, d){
                elm.tableExport({type:'pdf',separator: '', escape:'false'});
            });
            $scope.$on('export-excel', function(e, d){
                elm.tableExport({type:'excel', escape:false});
            });
            $scope.$on('export-doc', function(e, d){
                elm.tableExport({type: 'doc', escape:false});
            });
        }
        return {
            restrict: 'C',
            link: link
        }
    }

    app.directive('exportTable', exportTable);

    app.directive('masonry', function ($parse) {
        return {
            restrict: 'AC',
            link: function (scope, elem, attrs) {
                scope.items = [];
                var container = elem[0];
                var options = angular.extend({
                    itemSelector: '.item'
                }, JSON.parse(attrs.masonry));

                var masonry = scope.masonry = new Masonry(container, options);

                var debounceTimeout = 0;
                scope.update = function () {
                    if (debounceTimeout) {
                        window.clearTimeout(debounceTimeout);
                    }
                    debounceTimeout = window.setTimeout(function () {
                        debounceTimeout = 0;

                        masonry.reloadItems();
                        masonry.layout();

                        elem.children(options.itemSelector).css('visibility', 'visible');
                    }, 120);
                };
            }
        };
    }).directive('masonryTile', function () {
        return {
            restrict: 'AC',
            link: function (scope, elem) {
                elem.css('visibility', 'hidden');
                var master = elem.parent('*[masonry]:first').scope(),
                    update = master.update;

                imagesLoaded(elem.get(0), update);
                elem.ready(update);
            }
        };
    });

   app.directive('bindHeightToWidth', function () {
        var directive = {
            restrict: 'A',
            link: function (scope, instanceElement, instanceAttributes, controller, transclude) {
                var heightFactor = 1;

                if (instanceAttributes['bindHeightToWidth']) {
                    heightFactor = instanceAttributes['bindHeightToWidth'];
                }

                var updateHeight = function () {
                    instanceElement.outerHeight(instanceElement[0].getBoundingClientRect().width * heightFactor);
                };

                scope.$watch(instanceAttributes['bindHeightToWidth'], function (value) {
                    heightFactor = value;
                    updateHeight();
                });

                $(window).resize(updateHeight);
                updateHeight();

                scope.$on('$destroy', function () {
                    $(window).unbind('resize', updateHeight);
                });
            }
        };

        return directive;
    });
 
    app.config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptorService');
    });


       app .config(
                    ['$stateProvider',
                     '$urlRouterProvider',

            function ($stateProvider,
                      $urlRouterProvider) {

               //$locationProvider.html5Mode(true);

                $stateProvider

                    .state('home', {
                        url: '/',
                        templateUrl: 'partial/Index2.html',
                        controller: 'Home3Controller'
                    })

                      .state('TopMenu', {
                         url: '/TopMenu',
                         templateUrl: 'partial/TopMenu.html',
                        //resolve: {
                        //    articles: 'ArticlesService'
                        //},
                         controller: 'TopMenuController'
                    })

                     .state('profile', {
                         url: '/profile',
                         templateUrl: 'partial/profile.html',
                         controller: 'Home4Controller'
                     })

                       .state('Applicant', {
                           url: '/Applicant',
                           templateUrl: 'partial/Applicant.html',
                           controller: 'ApplicantController'
                       })

                     .state('Fee', {
                         url: '/Fee',
                         templateUrl: 'partial/Fee.html',
                         controller: 'FeeController'
                     })

                     .state('Minvoice', {
                         url: '/Minvoice',
                         templateUrl: 'partial/Minvoice.html',
                         controller: 'MinvoiceController'
                     })

                      .state('ProceedToPayment', {
                          url: '/ProceedToPayment',
                          templateUrl: 'partial/ProceedToPayment.html',
                          controller: 'ProceedToPaymentController'
                      })

                     .state('PaymentDetail', {
                         url: '/PaymentDetail',
                         templateUrl: 'partial/PaymentDetail.html',
                         controller: 'PaymentDetailController'
                     })


                       .state('Formx', {
                           url: '/Formx',
                           templateUrl: 'partial/Formx.html',
                           controller: 'FormxController'
                       })

                      .state('Formx2', {
                          url: '/Formx2?TransactionidID/xid',
                          templateUrl: 'partial/Formx2.html',
                          controller: 'Formx2Controller'
                      })
                     .state('ReturnUrl', {
                           url: '/ReturnUrl',
                           templateUrl: 'partial/ReturnUrl.html',
                           controller: 'ReturnUrlController'
                       })
                      

                       .state('SelectedItem', {
                           url: '/SelectedItem',
                           templateUrl: 'partial/SelectedItem.html',
                           controller: 'SelectedItemController'
                       })
                     .state('home33', {
                         url: '/info?:MessageID',

                         templateUrl: 'partial/Info.html',
                         controller: 'Contact33bController'
                     })

                    .state('form', {
                        url: '/form',
                        templateUrl: 'partial/form.html',
                        controller: 'formController'
                    })

                     .state('transaction', {
                         url: '/transaction',
                         templateUrl: 'partial/transaction.html',
                         controller: 'transactionController'
                     })

                    .state('transaction12', {
                        url: '/transaction12',
                        templateUrl: 'partial/transaction12.html',
                        controller: 'transaction12Controller'
                    })

                     .state('transaction2', {
                         url: '/transaction2',
                         templateUrl: 'partial/transaction2.html',
                         controller: 'transaction2Controller'
                     })

                    .state('transaction2b', {
                        url: '/transaction2b',
                        templateUrl: 'partial/transaction2b.html',
                        controller: 'transaction2bController'
                    })

                     .state('transaction4b', {
                         url: '/transaction4b',
                         templateUrl: 'partial/transaction4.html',
                         controller: 'transaction4bController'
                     })

                     .state('transaction3', {
                         url: '/transaction3',
                         templateUrl: 'partial/transaction3.html',
                         controller: 'transaction3Controller'
                     })
                     .state('form.search', {
                         url: '/search?service',
                     
                         templateUrl: 'partial/search.html'
                     })
                     .state('form.search2', {
                         url: '/search2?service',

                         templateUrl: 'partial/search2.html'
                     })

                     .state('form.search3', {
                         url: '/search3?service',

                         templateUrl: 'partial/search3.html'
                     })
                     .state('form.Result', {
                         url: '/Result',
                         templateUrl: 'partial/Result.html'
                     })

                     .state('form.Certificate', {
                         url: '/Certificate',
                         templateUrl: 'partial/Certificate.html'
                     })
                     .state('form.payment', {
                         url: '/payment',
                         templateUrl: 'partial/payment.html'
                     })

                     .state('form.payment2', {
                         url: '/payment2',
                         templateUrl: 'partial/payment2.html'
                     })

                  .state('form.error', {
                      url: '/error?MessageID2/TranDateTime2/ResponseDescription2/MerchantTranID2/OrderStatus2',
                      templateUrl: 'partial/error.html'
                  })

                      .state('form.cancel', {
                          url: '/error?MessageID2/TranDateTime2/ResponseDescription2/MerchantTranID2/OrderStatus2',
                          templateUrl: 'partial/error.html'
                      })
               
                      .state('form.success', {
                          url: '/success?MessageID/TranDateTime2/ResponseDescription2/MerchantTranID2',
                          templateUrl: 'partial/success.html'
                      })
               

                     .state('form.invoice', {
                         url: '/invoice',
                         templateUrl: 'partial/Invoice.html'
                     })
                     .state('home2', {
                         url: 'ups',
                         templateUrl: 'partial/Index2.html',
                         controller: 'Contact3Controller'
                     })

                     

                    .state('login', {
                        url: '/login',
                        templateUrl: 'partial/Login.html',
                        controller: 'ContactController',
                    })


                     .state('ChangePassword', {
                         url: '/ChangePassword',
                         templateUrl: 'partial/ChangePassword.html',
                         controller: 'ContactController',
                     })

                     .state('contact', {
                         url: '/contact',
                         templateUrl: 'partial/contact.html',
                         controller: 'Contact7Controller',
                     })
                      .state('about', {
                          url: '/About',
                          templateUrl: 'partial/About.html',
                          controller: 'AboutController',
                      })

                      .state('Register', {
                          url: '/Register',
                          templateUrl: 'partial/Register.html',
                          controller: 'Contact2Controller',
                      })

                     .state('Register3', {
                         url: '/Register3',
                         templateUrl: 'partial/Register3.html',
                         controller: 'Contact3bController',
                     })

                     .state('Register2', {
                         url: '/Register2',
                         templateUrl: 'partial/Register2.html',
                         controller: 'Contact3Controller',
                     })

                     .state('Agreement', {
                         url: '/Agreement',
                         templateUrl: 'partial/Agreement.html',
                         controller: 'AgreementController',
                     })

                      .state('UploadData', {
                          url: '/UploadData',
                          templateUrl: 'partial/UploadData.html',
                          controller: 'UploadDataController',
                      })

                     .state('ViewUploadData', {
                         url: '/ViewUploadData',
                         templateUrl: 'partial/ViewUploadData.html',
                         controller: 'ViewUploadDataController',
                     })

                     .state('ViewUploadData2', {
                         url: '/ViewUploadData2',
                         templateUrl: 'partial/ViewUploadData2.html',
                         controller: 'ViewUploadDataController2',
                     })
                     .state('ForgotPassword', {
                         url: '/ForgotPassword',
                         templateUrl: 'partial/ResetPassword.html',
                         controller: 'ForgotPasswordController',
                     })

                     .state('Product', {
                         url: '/Product',
                         templateUrl: 'partial/Products.html',
                         controller: 'ProductController',
                     })

                     .state('Bank', {
                         url: '/Bank',
                         templateUrl: 'partial/Bank.html',
                         controller: 'BankController',
                     })

                      .state('InstitutionType', {
                          url: '/InstitutionType',
                          templateUrl: 'partial/InstitutionType.html',
                          controller: 'InstitutionTypeController',
                      })
                      .state('Subscription', {
                          url: '/Subscription',
                          templateUrl: 'partial/Subscription.html',
                          controller: 'SubscriptionController',
                      })

                      .state('AdditionalFee', {
                          url: '/AdditionalFee',
                          templateUrl: 'partial/AdditionalFee.html',
                          controller: 'AdditionalFeeController',
                      })

                     .state('Client', {
                         url: '/Client',
                         templateUrl: 'partial/Clients.html',
                         controller: 'ClientController',
                     })
                      .state('AssignRole', {
                          url: '/AssignRole',
                          templateUrl: 'partial/Assign_Role.html',
                          controller: 'AssignRolesController',
                      })

                      .state('AssignRole.Data', {
                          url: '/ASSIGNData',
                          templateUrl: 'partial/Assign_Data.html',
                          controller: 'AssignRolesController',
                      })
                    .state('Role', {
                        url: '/Roles',
                        templateUrl: 'partial/Role.html',
                        //resolve: {
                        //    articles: 'ArticlesService'
                        //},
                        controller: 'RolesController'
                    })

                     .state('TopMenu', {
                         url: '/TopMenu',
                         templateUrl: 'partial/TopMenu.html',
                        //resolve: {
                        //    articles: 'ArticlesService'
                        //},
                         controller: 'TopMenuController'
                    })
                     .state('User', {
                         url: '/User',
                         templateUrl: 'partial/User.html',
                         //resolve: {
                         //    articles: 'ArticlesService'
                         //},
                         controller: 'UsersController'
                     })
                     .state('Role.Detail', {
                         url: '/Detail',
                         templateUrl: 'partial/Role_Detail.html',
                         //resolve: {
                         //    articles: 'ArticlesService'
                         //},
                         controller: 'RolesController'
                     })
                     .state('logout', {
                         url: '/logout',
                         templateUrl: 'partial/Index2.html',
                         controller: 'logoutController'
                     })
                    .state('articles.article', {
                        url: '/:pageName',
                        templateUrl: function ($stateParams) {
                            return '/partials/articles/' +
                                $stateParams.pageName + '.html';
                        }
                    });
              //  /AssignRole/Data
                // $urlRouterProvider.otherwise('/');

                $urlRouterProvider.otherwise('/');
            }]);

       app.controller('Contact13Controller', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $state) {
           swal("", "Account Activated", "success");
           if ($state.params.MessageID3 != null) {
               swal("", "Account Activated", "success");

           }
           //$rootScope.isAdmin = false;
           //$rootScope.isInstitution = false;


           var kq = localStorageService.get("access_right");
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();

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

           }


       });
       app.controller('Contact3Controller', function ($scope, $http, $rootScope, localStorageService, authService,authService2,$location, $state) {
           //   $facebook.parse();
         
        
          
           if ($state.params.MessageID3 != null) {
               swal("", "Account Activated", "success");

           }

   //        authService.GetInstitution().then(function (data, status) {

   //            $rootScope.varray4 = data;

   //        },
   //function (response) {

   //});

           $rootScope.isAdmin = false;
           $rootScope.isInstitution = false;
           var kq = localStorageService.get("access_right");
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();

           }
           //for (var key in kq) {

           //    if (kq[key] == "ADMIN") {

           //        $rootScope.isAdmin = true;
           //    }


           //    if (kq[key] == "PARTNER") {

           //        $rootScope.isInstitution = true;
           //    }


           //   // alert($rootScope.Roles[key])
           //}



        
           $scope.$on('$viewContentLoaded', function () {
               var mCarouselTO = setTimeout(function () {
                   $('.carousel').carousel({
                       interval: 2000,
                       cycle: true,
                   }).trigger('slide');
               }, 2000);
               var q = mCarouselTO;




           });


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

       app.controller('Contact33bController', function ($scope, $http, $rootScope, localStorageService, authService, authService2,  $state) {
           //   $facebook.parse();



           if ($state.params.MessageID != null) {
               swal("", "Account Activated", "success");

           }

           //        authService.GetInstitution().then(function (data, status) {

           //            $rootScope.varray4 = data;

           //        },
           //function (response) {

           //});

           var kq = localStorageService.get("access_right");
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();

           }
           //for (var key in kq) {

           //    if (kq[key] == "ADMIN") {

           //        $rootScope.isAdmin = true;
           //    }


           //    if (kq[key] == "PARTNER") {

           //        $rootScope.isInstitution = true;
           //    }


           //   // alert($rootScope.Roles[key])
           //}




           $scope.$on('$viewContentLoaded', function () {
               var mCarouselTO = setTimeout(function () {
                   $('.carousel').carousel({
                       interval: 2000,
                       cycle: true,
                   }).trigger('slide');
               }, 2000);
               var q = mCarouselTO;




           });


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


   

       app.controller('logoutController', function ($scope, $http, $rootScope, localStorageService, authService,authService2,  $location) {
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

       
       app.controller('ForgotPasswordController', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $location) {
         
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();

           }
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
       app.controller('Contact7Controller', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $location) {
           $rootScope.vhome3 = true;
           $rootScope.vhome2 = false;
           $rootScope.vhome = false;
           $scope.submitForm = function (vform, isValid) {
               var formData = new FormData();
               if (isValid) {


                   var formData = new FormData();

                   var AgentsData = {

                       firstname: vform.first_name,
                       surname: vform.surname,
                       message: vform.message,
                       vemail: vform.vemail


                   };

                   

                   authService.Contactus(AgentsData).then(function (data, status) {

                       swal("", "Message sent successfully", "success");

                       $location.path("/")

                   },
              function (response) {
                  //  ajaxindicatorstop();

                  var errors = [];
              
                  $scope.message = "Failed to register user due to:" + errors.join(' ');
              });






               }

           }

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
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();


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


       app.controller('AboutController', function ($scope, $http, $rootScope, localStorageService, authService,authService2,  $location) {
           $rootScope.vhome2 = true;
           $rootScope.vhome = false;
           $rootScope.vhome3 =false;
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
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();

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
       app.controller('Home3Controller', function ($scope, $http, $rootScope, localStorageService, authService,authService2,  $location) {


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

      app.controller('TopMenuController', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $state, $location) {

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

        
         

           $scope.submitForm = function (vform, isValid) {

               if (isValid) {
                   var formData = new FormData();

                   var AgentsData = {


                       Menu_Name: vform.role_name

                   };

                   formData.append("CreateRoleBindingModel", JSON.stringify(AgentsData));


                   authService.saveMenu(JSON.stringify(AgentsData)).then(function (data, status) {

                       $scope.savedSuccessfully = true;
                       $scope.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";

                       
                           // $state.transitionTo('Role');
                           swal("Record Saved Successfully");

                         //  $state.transitionTo('Role.Detail');

                           location.reload(true)


                      


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



       });

       app.controller('Home4Controller', function ($scope, $http, $rootScope, localStorageService, authService, authService2,  $location) {

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

       app.controller('MinvoiceController', function ($scope, $http, $rootScope, localStorageService, authService, authService2,  $location) {

         
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






                authService.ProceedToPayment(applicant, Shopping_card, agent,twallet).then(function (data, status) {
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

       app.controller('ProceedToPaymentController', function ($scope, $http, $rootScope, localStorageService, authService, authService2,  $location) {


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

       app.controller('PaymentDetailController', function ($scope, $http, $rootScope, localStorageService, authService, authService2,  $location) {


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
           $scope.isw_conv_fee2 = parseFloat($scope.InterSwitchPostFields.isw_conv_fee )

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
       app.controller('FormxController', function ($scope, $http, $rootScope, localStorageService, authService, authService2,  $location) {


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

         //  alert($scope.applicant.applicantname)
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

              
           });
          
        
         






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

       app.controller('Formx2Controller', function ($scope, $http, $rootScope, localStorageService, authService, $location, $state, $stateParams,$window) {
           
         
          


        //   alert($state.params.xid)

           var pp2 = $state.params.TransactionidID
           //   authService.formx(applicant2, Shopping_card, agent2, twallet2, InterSwitchPostFields2).then(function (data, status) {
           //    var dd = data;
           //    $scope.vdata = data;
              
           //});
          
           authService.ReturnUrl2(pp2).then(function (data, status) {
               var dd = data;
               $scope.AllField = dd;


               angular.forEach(dd.pp, function (item) {

                   $scope.tech_amt = $scope.tech_amt + (parseFloat(item.tech_amt) );
                   $scope.init_amt = $scope.init_amt +( parseFloat(item.init_amt) * parseFloat(item.xqty));


               });
               $scope.tech_amt = $scope.tech_amt * 100;
               $scope.init_amt = $scope.init_amt * 100;



              




           });

       

         







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


       app.controller('ReturnUrlController', function ($scope, $http, $rootScope, localStorageService, authService, authService2, $facebook, $location) {

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

       app.controller('ApplicantController', function ($scope, $http, $rootScope, localStorageService, authService, authService2, $facebook, $location) {

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


       app.controller('SelectedItemController', function ($scope, $http, $rootScope, localStorageService, authService, authService2, $facebook, $location) {
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


               



               authService.checkout(applicant, Shopping_card,agent).then(function (data, status) {
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


       app.controller('FeeController', function ($scope, $http, $rootScope, localStorageService, authService, authService2, $facebook, $location) {
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
       
       app.controller('AgreementController', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $facebook, $location) {

           $scope.DelAggrement = function (dd) {

               swal({
                   title: "Are You Sure You want To Delete Upload",
                   text: "",
                   type: "warning",
                   showCancelButton: true,
                   confirmButtonColor: "#DD6B55", confirmButtonText: "YES",
                   cancelButtonText: "No, cancel please!",
                   closeOnConfirm: true,
                   closeOnCancel: true
               },
         function (isConfirm) {
             if (isConfirm) {


                 authService.DeleteAgrement(dd).then(function (data, status) {
                     swal("", "Delete Successful", "success")

                     location.reload(true)
                 });



             }

         });

           }

           authService.GetAggrement().then(function (data, status) {

               $scope.itemsByPage = 50;
               $scope.ListAgent = data;
               $scope.displayedCollection = [].concat($scope.ListAgent);

             //  $state.transitionTo('Role.Detail');

           },
           function (response) {
               //  ajaxindicatorstop();

               var errors = [];
               for (var key in response.data.modelState) {
                   for (var i = 0; i < response.data.modelState[key].length; i++) {
                       errors.push(response.data.modelState[key][i]);
                   }
               }
             //  $scope.message = "Failed to register user due to:" + errors.join(' ');
           });

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
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();

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


           authService.Get_Institution4().then(function (data, status) {

               $scope.varray6 = data;

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


           $scope.submitForm = function (vform, isValid) {

               if (isValid) {

                   var formData = new FormData();



                   var AgentsData = {

                       Institution_Code: $scope.Institution



                   };
                  
                  

                   var totalFiles = document.getElementById("File1").files.length;
                   if (totalFiles == 0) {
                       alert("Upload File")
                       //  self.cac("");

                       return;

                   }

                   for (var i = 0; i < totalFiles; i++) {
                       var file = document.getElementById("File1").files[i];



                       formData.append("FileUpload", file);
                   }
                  
                   formData.append("RegisterBindingModel", JSON.stringify(AgentsData));
                   authService.SaveAgreement(formData).then(function (data, status) {

                       var dd = data;

                       swal("","File Uploaded Successfully","success")

                     //  $location.path("/login")

                   

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


       });

       app.controller('UploadDataController', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $facebook, $location) {

           if (localStorageService.get("username") == null) {


               $location.path("/login");
           }
         

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
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();

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


           authService.GetService4().then(function (data, status) {

               $scope.varray6 = data;

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


           $scope.submitForm = function (vform, isValid) {

               if (isValid) {

                   var formData = new FormData();

                 //  alert("institution = " + $scope.Institution) ;

                   var AgentsData = {

                       Service_Code: $scope.Institution



                   };



                   var totalFiles = document.getElementById("File1").files.length;
                   if (totalFiles == 0) {
                       alert("Upload File")
                       //  self.cac("");

                       return;

                   }

                   for (var i = 0; i < totalFiles; i++) {
                       var file = document.getElementById("File1").files[i];



                       formData.append("FileUpload", file);
                   }

                   formData.append("RegisterBindingModel", JSON.stringify(AgentsData));
                   authService.SaveUploadData(formData).then(function (data, status) {

                       var dd = data;

                       swal("", "Upload Sucessful", "success")

                       //  $location.path("/login")



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


       });

       app.controller('ViewUploadDataController', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $facebook, $location) {


           if (localStorageService.get("username") == null) {


               $location.path("/login");
           }
          

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
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();

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


           authService.GetService4().then(function (data, status) {

               $scope.varray6 = data;

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

           
           authService.GetYear().then(function (data, status) {

               $scope.varray4 = data;

           },
function (response) {

});


//           $scope.varray4 = [{ YearName: '1970', YearCode: '1970' }, { YearName: '1971', YearCode: '1971' } , { YearName: '1972', YearCode: '1972' } , { YearName: '1973', YearCode: '1973' } , { YearName: '1974', YearCode: '1974' } , { YearName: '1975', YearCode: '1975' } , { YearName: '1976', YearCode: '1976' } , { YearName: '1977', YearCode: '1977' } , { YearName: '1978', YearCode: '1978' } , { YearName: '1979', YearCode: '1979' } , { YearName: '1980', YearCode: '1980' } , { YearName: '1981', YearCode: '1981' } , { YearName: '1982', YearCode: '1982' } , { YearName: '1983', YearCode: '1983' } , { YearName: '1984', YearCode: '1984' } , { YearName: '1985', YearCode: '1985' } , { YearName: '1986', YearCode: '1986' } , { YearName: '1987', YearCode: '1988' } , { YearName: '1989', YearCode: '1989' } , { YearName: '1990', YearCode: '1990' } , { YearName: '1991', YearCode: '1991' } , { YearName: '1992', YearCode: '1992' } , { YearName: '1993', YearCode: '1993' } , { YearName: '1994', YearCode: '1994' } , { YearName: '1995', YearCode: '1995' } , { YearName: '1996', YearCode: '1996' } , { YearName: '1997', YearCode: '1997' } , { YearName: '1998', YearCode: '1998' } , { YearName: '1999', YearCode: '1999' } , { YearName: '2000', YearCode: '2000' } , { YearName: '2001', YearCode: '2001' } , { YearName: '2002', YearCode: '2002' } , { YearName: '2003', YearCode: '2003' } , { YearName: '2004', YearCode: '2004' } , { YearName: '2005', YearCode: '2005' } , { YearName: '2006', YearCode: '2006' } , { YearName: '2007', YearCode: '2007' } , { YearName: '2008', YearCode: '2008' } , { YearName: '2009', YearCode: '2009' } , { YearName: '2010', YearCode: '2010' } , { YearName: '2011', YearCode: '2011' } , { YearName: '2012', YearCode: '2012' } , { YearName: '2013', YearCode: '2013' } , { YearName: '2014', YearCode: '2014' } , { YearName: '2015', YearCode: '2015' } ,, { YearName: '2016', YearCode: '2016' },
//, { YearName: '2017', YearCode: '2017' }, { YearName: '2018', YearCode: '2018' }]

           authService.GetInstitution3().then(function (data, status) {

               $scope.varray13 = data;

           },
 function (response) {

 });
           $scope.search = function () {

               authService.SearchUpload( $scope.Service,$scope.Year,$scope.Institution).then(function (data, status) {

                  // $scope.varray19 = data;

                   $scope.itemsByPage = 2;
                   $scope.ListAgent = data;
                   if (data.length != 0) {

                       $scope.vshow = true;
                   }

                   else {

                       $scope.vshow = false;
                   }
                   $scope.displayedCollection = [].concat($scope.ListAgent);

                   var pp ="";

               },
   function (response) {

   });

           }

           $scope.Del = function () {

               swal({
                   title: "Are You Sure You want To Delete Upload",
                   text: "",
                   type: "warning",
                   showCancelButton: true,
                   confirmButtonColor: "#DD6B55", confirmButtonText: "YES",
                   cancelButtonText: "No, cancel please!",
                   closeOnConfirm: true,
                   closeOnCancel: true
               },
    function (isConfirm) {
        if (isConfirm) {


            authService.DelUpload($scope.Service, $scope.Year, $scope.Institution).then(function (data, status) {

                // $scope.varray19 = data;
                swal("", "Upload Deleted ", "success");
                location.reload(true)

            },
function (response) {

});


     

            //   window.location.assign("profile.aspx");


        }

    });

           }


       });

       app.controller('ViewUploadDataController2', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $facebook, $location) {


           if (localStorageService.get("username") == null) {


               $location.path("/login");
           }

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
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();

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


           authService.GetService4().then(function (data, status) {

               $scope.varray6 = data;

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


           authService.GetYear().then(function (data, status) {

               $scope.varray4 = data;

           },
function (response) {

});

//           $scope.varray4 = [{ YearName: '1970', YearCode: '1970' }, { YearName: '1971', YearCode: '1971' }, { YearName: '1972', YearCode: '1972' }, { YearName: '1973', YearCode: '1973' }, { YearName: '1974', YearCode: '1974' }, { YearName: '1975', YearCode: '1975' }, { YearName: '1976', YearCode: '1976' }, { YearName: '1977', YearCode: '1977' }, { YearName: '1978', YearCode: '1978' }, { YearName: '1979', YearCode: '1979' }, { YearName: '1980', YearCode: '1980' }, { YearName: '1981', YearCode: '1981' }, { YearName: '1982', YearCode: '1982' }, { YearName: '1983', YearCode: '1983' }, { YearName: '1984', YearCode: '1984' }, { YearName: '1985', YearCode: '1985' }, { YearName: '1986', YearCode: '1986' }, { YearName: '1987', YearCode: '1988' }, { YearName: '1989', YearCode: '1989' }, { YearName: '1990', YearCode: '1990' }, { YearName: '1991', YearCode: '1991' }, { YearName: '1992', YearCode: '1992' }, { YearName: '1993', YearCode: '1993' }, { YearName: '1994', YearCode: '1994' }, { YearName: '1995', YearCode: '1995' }, { YearName: '1996', YearCode: '1996' }, { YearName: '1997', YearCode: '1997' }, { YearName: '1998', YearCode: '1998' }, { YearName: '1999', YearCode: '1999' }, { YearName: '2000', YearCode: '2000' }, { YearName: '2001', YearCode: '2001' }, { YearName: '2002', YearCode: '2002' }, { YearName: '2003', YearCode: '2003' }, { YearName: '2004', YearCode: '2004' }, { YearName: '2005', YearCode: '2005' }, { YearName: '2006', YearCode: '2006' }, { YearName: '2007', YearCode: '2007' }, { YearName: '2008', YearCode: '2008' }, { YearName: '2009', YearCode: '2009' }, { YearName: '2010', YearCode: '2010' }, { YearName: '2011', YearCode: '2011' }, { YearName: '2012', YearCode: '2012' }, { YearName: '2013', YearCode: '2013' }, { YearName: '2014', YearCode: '2014' }, { YearName: '2015', YearCode: '2015' }, , { YearName: '2016', YearCode: '2016' },
//, { YearName: '2017', YearCode: '2017' }, { YearName: '2018', YearCode: '2018' }]

           authService.GetInstitution33().then(function (data, status) {

               $scope.varray13 = data;

           },
 function (response) {

 });
           $scope.search = function () {

               authService.SearchUpload($scope.Service, $scope.Year, $scope.Institution).then(function (data, status) {

                   // $scope.varray19 = data;

                   $scope.itemsByPage = 2;
                   $scope.ListAgent = data;
                   if (data.length != 0) {

                       $scope.vshow = true;
                   }

                   else {

                       $scope.vshow = false;
                   }
                   $scope.displayedCollection = [].concat($scope.ListAgent);

                   var pp = "";

               },
   function (response) {

   });

           }

           $scope.Del = function () {

               swal({
                   title: "Are You Sure You want To Delete Upload",
                   text: "",
                   type: "warning",
                   showCancelButton: true,
                   confirmButtonColor: "#DD6B55", confirmButtonText: "YES",
                   cancelButtonText: "No, cancel please!",
                   closeOnConfirm: true,
                   closeOnCancel: true
               },
    function (isConfirm) {
        if (isConfirm) {


            authService.DelUpload($scope.Service, $scope.Year, $scope.Institution).then(function (data, status) {

                // $scope.varray19 = data;
                swal("", "Upload Deleted ", "success");
                location.reload(true)

            },
function (response) {

});


           




            //   window.location.assign("profile.aspx");


        }

    });

           }


           $scope.Apps = function () {

               swal({
                   title: "Are You Sure You want To Approve Upload",
                   text: "",
                   type: "warning",
                   showCancelButton: true,
                   confirmButtonColor: "#DD6B55", confirmButtonText: "YES",
                   cancelButtonText: "No, cancel please!",
                   closeOnConfirm: true,
                   closeOnCancel: true
               },
    function (isConfirm) {
        if (isConfirm) {



            authService.AppUpload($scope.Service, $scope.Year, $scope.Institution).then(function (data, status) {

                // $scope.varray19 = data;
                swal("", "Upload Approved ", "success");
              //  location.reload(true)

            },
           function (response) {

           });







            //   window.location.assign("profile.aspx");


        }

    });

           }


       });

       app.controller('ContactController', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $facebook, $location) {
          
        
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
				return ;
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
        
         


      //     $scope.facebook = function () {

      ////         $facebook.api("/me").then( 
      ////function (response) {
      ////    alert(response.name)
      ////    $scope.welcomeMsg = "Welcome " + response.name;
      ////},
      ////function(err) {
      ////    $scope.welcomeMsg = "Please log in";
      ////});
           

      //         $facebook.login().then(
      //       function (response) {


      //                    $facebook.api("/me").then( 
      //           function (response) {
      //              // alert(response.access_token)
      //               $scope.welcomeMsg = "Welcome " + response.name;
      //               localStorageService.set("access_token", "response.access_token");
      //               $rootScope.username = response.email;

      //               localStorageService.set("username", response.email);

      //               $rootScope.login = true;



      //               $rootScope.username = response.email;

      //               $rootScope.islogin = true;

      //               $rootScope.islogout = false;

      //               $location.path("/")

      //           },
      //           function(err) {
      //               $scope.welcomeMsg = "Please log in";
      //           });
      //         //  $scope.loginResponse = response;
      //           // var pp = $facebook.getAuthResponse()

            
               


      //          // alert(response.status)
      //       },
      //       function (response) {
      //           $scope.loginError = response.error;
      //       }
      //   );

        

              
      //     };

  //             authService.facebook().then(function (data, status) {

  //                 $scope.savedSuccessfully = true;
  //                 $scope.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";

                

  //                 //   $location.path("/")
  //                 //  startTimer();

  //             },
  //function (response) {
  //    //  ajaxindicatorstop();

  //    var errors = [];
  //    for (var key in response.data.modelState) {
  //        for (var i = 0; i < response.data.modelState[key].length; i++) {
  //            errors.push(response.data.modelState[key][i]);
  //        }
  //    }
  //    $scope.message = "Failed to register user due to:" + errors.join(' ');
  //});

           }







       );


       app.controller('transaction2Controller', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $state, $location) {

           if (localStorageService.get("username") == null) {


               $location.path("/login");
           }

           $scope.EditRow = function (dd) {
               $scope.VEmail = "";

               authService.RawXml2(dd.Order_Id).then(function (data, status) {
                   $rootScope.vrawxml = data.rawxml_data;

                 //  location.reload(true)
               });
               $rootScope.TransactionCode = dd.Transaction_Code;
               $rootScope.Subscription_Code = dd.Subscription_Code;

               $rootScope.user_id = dd.User_Name;
               $scope.dialogShown = true;

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
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();

           }


           authService.Get_Subscription().then(function (data, status) {


               $scope.varray3 = data;




           },
           function (response) {
               //  ajaxindicatorstop();

               var errors = [];

           });

           authService.Get_Institution4().then(function (data, status) {

               $scope.varray2 = data;

           },
       function (response) {

       });

           $scope.varray44 = [{ Transaction_Status: 'Paid', Transaction_Status: 'Paid' }, { Transaction_Status: 'Pending', Transaction_Status: 'Pending' }]
           $scope.Export2 = function () {
               if (($scope.application_date == "") || ($scope.application_date == undefined)) {
                   $scope.application_date = "NA";
               }

               if (($scope.application_date2 == "") || ($scope.application_date2 == undefined)) {
                   $scope.application_date2 = "NA";
               }


               if (($scope.student_no == "") || ($scope.student_no == undefined)) {
                   $scope.student_no = "NA";
               }

               if (($scope.Institution == "") || ($scope.Institution == undefined)) {
                   $scope.Institution = "NA";
               }


               if (($scope.subscription == "") || ($scope.subscription == undefined)) {
                   $scope.subscription = "NA";
               }

               if (($scope.paymentstatus == "") || ($scope.paymentstatus == undefined)) {
                   $scope.paymentstatus = "NA";
               }
              doUrlPost3("../UPS/DownloadPdf3.aspx", $scope.application_date, $scope.application_date2, $scope.student_no, $scope.Institution, $scope.subscription, $scope.paymentstatus);
             //  doUrlPost3("../DownloadPdf3.aspx", $scope.application_date, $scope.application_date2, $scope.student_no, $scope.Institution, $scope.subscription, $scope.paymentstatus);

           }

           $scope.search = function () {

               if (($scope.application_date == "") || ($scope.application_date == undefined)) {
                   $scope.application_date = "NA";
               }

               if (($scope.application_date2 == "") || ($scope.application_date2 == undefined)) {
                   $scope.application_date2 = "NA";
               }


               if (($scope.student_no == "") || ($scope.student_no == undefined)) {
                   $scope.student_no = "NA";
               }

               if (($scope.Institution == "") || ($scope.Institution == undefined)) {
                   $scope.Institution = "NA";
               }


               if (($scope.subscription == "") || ($scope.subscription == undefined)) {
                   $scope.subscription = "NA";
               }

               if (($scope.paymentstatus == "") || ($scope.paymentstatus == undefined)) {
                   $scope.paymentstatus = "NA";
               }


               authService.GetTransaction3b($scope.application_date, $scope.application_date2, $scope.student_no, $scope.Institution, $scope.subscription, $scope.paymentstatus).then(function (data, status) {

                   if (data.length == 0) {

                       swal("No record found");
                   }
                   $scope.itemsByPage = 100;
                   $scope.ListAgent3 = data;
                   $scope.displayedCollection3 = [].concat($scope.ListAgent3);

                   //  $state.transitionTo('Role.Detail');

               },
           function (response) {
               //  ajaxindicatorstop();

               if (($scope.application_date == "NA") ) {
                   $scope.application_date = "";
               }

               if (($scope.application_date2 == "NA") ) {
                   $scope.application_date2 = "";
               }


               if (($scope.student_no == "NA") ) {
                   $scope.student_no = "";
               }

               if (($scope.Institution == "NA") ) {
                   $scope.Institution = "";
               }


               if (($scope.subscription == "NA") ) {
                   $scope.subscription = "";
               }

               if (($scope.paymentstatus == "NA") ) {
                   $scope.paymentstatus = "";
               }

               
           });

           }


           $scope.Export = function () {
               alasql('SELECT * INTO XLSX("patent.xlsx",{headers:true}) FROM ?', [$scope.ListAgent3]);
           };

           authService.GetTransaction3().then(function (data, status) {

               $scope.itemsByPage = 100;
               $scope.ListAgent3 = data;
               $scope.displayedCollection3 = [].concat($scope.ListAgent3);

          

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


          




       });


       app.controller('transaction2bController', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $state, $location) {


           if (localStorageService.get("username") == null) {


               $location.path("/login");
           }

           $scope.EditRow = function (dd) {
               $scope.VEmail = "";

               authService.RawXml2(dd.Order_Id).then(function (data, status) {
                   $rootScope.vrawxml = data.rawxml_data;

                   //  location.reload(true)
               });
               $rootScope.TransactionCode = dd.Transaction_Code;
               $rootScope.Subscription_Code = dd.Subscription_Code;

               $rootScope.user_id = dd.User_Name;
               $scope.dialogShown = true;

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
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();

           }


           authService.Get_Subscription().then(function (data, status) {


               $scope.varray3 = data;




           },
           function (response) {
               //  ajaxindicatorstop();

               var errors = [];

           });


           $scope.Export2 = function () {
               if (($scope.application_date == "") || ($scope.application_date == undefined)) {
                   $scope.application_date = "NA";
               }

               if (($scope.application_date2 == "") || ($scope.application_date2 == undefined)) {
                   $scope.application_date2 = "NA";
               }


               if (($scope.student_no == "") || ($scope.student_no == undefined)) {
                   $scope.student_no = "NA";
               }

               if (($scope.Institution == "") || ($scope.Institution == undefined)) {
                   $scope.Institution = "NA";
               }


               if (($scope.subscription == "") || ($scope.subscription == undefined)) {
                   $scope.subscription = "NA";
               }

               if (($scope.paymentstatus == "") || ($scope.paymentstatus == undefined)) {
                   $scope.paymentstatus = "NA";
               }

               $scope.Institution = "" ;
               doUrlPost3("../UPS/DownloadPdf4.aspx", $scope.application_date, $scope.application_date2, $scope.student_no, $scope.Institution, $scope.subscription, $scope.paymentstatus);
               //  doUrlPost3("../DownloadPdf3.aspx", $scope.application_date, $scope.application_date2, $scope.student_no, $scope.Institution, $scope.subscription, $scope.paymentstatus);

           }

           authService.Get_Institution4().then(function (data, status) {

               $scope.varray2 = data;

           },
       function (response) {

       });

           $scope.varray44 = [{ Transaction_Status: 'Paid', Transaction_Status: 'Paid' }, { Transaction_Status: 'Pending', Transaction_Status: 'Pending' }]
           $scope.Export2 = function () {
               if (($scope.application_date == "") || ($scope.application_date == undefined)) {
                   $scope.application_date = "NA";
               }

               if (($scope.application_date2 == "") || ($scope.application_date2 == undefined)) {
                   $scope.application_date2 = "NA";
               }


               if (($scope.student_no == "") || ($scope.student_no == undefined)) {
                   $scope.student_no = "NA";
               }

               if (($scope.Institution == "") || ($scope.Institution == undefined)) {
                   $scope.Institution = "NA";
               }


               if (($scope.subscription == "") || ($scope.subscription == undefined)) {
                   $scope.subscription = "NA";
               }

               if (($scope.paymentstatus == "") || ($scope.paymentstatus == undefined)) {
                   $scope.paymentstatus = "NA";
               }
               doUrlPost3("../UPS/DownloadPdf3.aspx", $scope.application_date, $scope.application_date2, $scope.student_no, $scope.Institution, $scope.subscription, $scope.paymentstatus);
               //  doUrlPost3("../DownloadPdf3.aspx", $scope.application_date, $scope.application_date2, $scope.student_no, $scope.Institution, $scope.subscription, $scope.paymentstatus);

           }

           $scope.search = function () {

               if (($scope.application_date == "") || ($scope.application_date == undefined)) {
                   $scope.application_date = "NA";
               }

               if (($scope.application_date2 == "") || ($scope.application_date2 == undefined)) {
                   $scope.application_date2 = "NA";
               }


               if (($scope.student_no == "") || ($scope.student_no == undefined)) {
                   $scope.student_no = "NA";
               }

               if (($scope.Institution == "") || ($scope.Institution == undefined)) {
                   $scope.Institution = "NA";
               }


               if (($scope.subscription == "") || ($scope.subscription == undefined)) {
                   $scope.subscription = "NA";
               }

               if (($scope.paymentstatus == "") || ($scope.paymentstatus == undefined)) {
                   $scope.paymentstatus = "NA";
               }


               authService.GetTransaction3bb($scope.application_date, $scope.application_date2, $scope.student_no, $scope.Institution, $scope.subscription, $scope.paymentstatus).then(function (data, status) {
                   if (data.length == 0) {

                       swal("No record found");
                   }
                   $scope.itemsByPage = 100;
                   $scope.ListAgent3 = data;
                   $scope.displayedCollection3 = [].concat($scope.ListAgent3);

                   //  $state.transitionTo('Role.Detail');

               },
           function (response) {
               //  ajaxindicatorstop();

               if (($scope.application_date == "NA")) {
                   $scope.application_date = "";
               }

               if (($scope.application_date2 == "NA")) {
                   $scope.application_date2 = "";
               }


               if (($scope.student_no == "NA")) {
                   $scope.student_no = "";
               }

               if (($scope.Institution == "NA")) {
                   $scope.Institution = "";
               }


               if (($scope.subscription == "NA")) {
                   $scope.subscription = "";
               }

               if (($scope.paymentstatus == "NA")) {
                   $scope.paymentstatus = "";
               }


           });

           }


           $scope.Export = function () {
               alasql('SELECT * INTO XLSX("patent.xlsx",{headers:true}) FROM ?', [$scope.ListAgent3]);
           };

           authService.GetTransaction5().then(function (data, status) {

               $scope.itemsByPage = 100;
               $scope.ListAgent3 = data;
               $scope.displayedCollection3 = [].concat($scope.ListAgent3);



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







       });

       app.controller('transaction4bController', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $state, $location) {

           $scope.EditRow = function (dd) {
               $scope.VEmail = "";

               authService.RawXml2(dd.Order_Id).then(function (data, status) {
                   $rootScope.vrawxml = data.rawxml_data;

                   //  location.reload(true)
               });
               $rootScope.TransactionCode = dd.Transaction_Code;
               $rootScope.Subscription_Code = dd.Subscription_Code;

               $rootScope.user_id = dd.User_Name;
               $scope.dialogShown = true;

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
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();

           }
           authService.GetTransaction6().then(function (data, status) {

               $scope.itemsByPage = 10;
               $scope.ListAgent = data;
               $scope.displayedCollection = [].concat($scope.ListAgent);

               //  $state.transitionTo('Role.Detail');

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







       });


       app.controller('transaction3Controller', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $state, $location) {

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
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();

           }
           authService.GetTransaction4().then(function (data, status) {

               $scope.itemsByPage = 50;
               $scope.ListAgent = data;
               $scope.displayedCollection = [].concat($scope.ListAgent);

               //  $state.transitionTo('Role.Detail');

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







       });

       app.controller('transaction12Controller', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $state, $location) {

           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $rootScope.islogin = false;

               $rootScope.islogout = true;
                $location.path("/login");
           }

           else {

               $rootScope.islogin = true;

               $rootScope.islogout = false;
               $rootScope.username = localStorageService.get("username")
           }

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
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();

           }

           authService.GetTransaction12().then(function (data, status) {

               $scope.itemsByPage = 50;
               $scope.ListAgent = data;
               $scope.displayedCollection = [].concat($scope.ListAgent);

               //  $state.transitionTo('Role.Detail');

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
       });

    
       app.controller('transactionController', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $state, $location) {


           $scope.EditRow = function (dd) {
               $scope.VEmail = "";
               $rootScope.TransactionCode = dd.Transaction_Code;
               $rootScope.Subscription_Code = dd.Subscription_Code;

               $rootScope.user_id = dd.User_Name;
               $scope.dialogShown = true;

           }


           $scope.add3 = function (dd) {
               $scope.VEmail = "";

               var services = localStorageService.get("services");

               var AgentsData = {


                   Subscription_Code: $rootScope.Subscription_Code,
                   user_id: $rootScope.user_id,
                   Payment_Date: dd,
                   Transaction_Code: $rootScope.TransactionCode,
                   Service: services

               };

            ///   formData.append("CreateRoleBindingModel", JSON.stringify(AgentsData));


               authService.SaveSubscriptionDetail2(JSON.stringify(AgentsData), dd).then(function (data, status) {

                   $scope.savedSuccessfully = true;
                   $scope.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";

                   if (data.status == "200") {
                       //  $location.path("/Roles");
                       // $state.transitionTo('Role');
                       swal("Record Saved Successfully");

                       location.reload(true)



                   }



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


             
            //  $scope.dialogShown = true;

           }



           $scope.add4 = function (dd) {
               $scope.VEmail = "";
               $rootScope.TransactionCode = dd.Transaction_Code;
               $rootScope.Subscription_Code = dd.Subscription_Code;

               $rootScope.user_id = dd.User_Name;
               $scope.dialogShown = true;

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
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();

           }
           authService.GetTransaction2().then(function (data, status) {

               $scope.itemsByPage = 50;
               $scope.ListAgent = data;
               $scope.displayedCollection = [].concat($scope.ListAgent);

             //  $state.transitionTo('Role.Detail');

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


       });


       app.controller('UsersController', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $state, $location) {
           if (localStorageService.get("username") == null) {


               $location.path("/login");
           }
         

           $scope.checkSomething = function (dd) {

               if (dd.User_Type == "PARTNER") {

                   return true;
               }

               else {

                   return false;
               }

           }
           $scope.EditRow2 = function (dd) {
             
               authService.GetClient3(dd.Institution_Code).then(function (data, status) {
                   $scope.itemsByPage = 50;
                   $scope.ListAgent2 = data;
                   $scope.displayedCollection2 = [].concat($scope.ListAgent2);


               });

               $scope.dialogShown = true;

           }

           $scope.EditRow = function (dd) {

               swal({
                   title: "Are You Sure You want To Delete Record",
                   text: "",
                   type: "warning",
                   showCancelButton: true,
                   confirmButtonColor: "#DD6B55", confirmButtonText: "YES",
                   cancelButtonText: "No, cancel please!",
                   closeOnConfirm: true,
                   closeOnCancel: true
               },
    function (isConfirm) {
        if (isConfirm) {



            authService.DeleteUser(dd.UserName).then(function (data, status) {

                location.reload(true)
            });

            //   window.location.assign("profile.aspx");


        }

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
           }

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
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();

           }

           authService.Get_Users().then(function (data, status) {

               $scope.itemsByPage = 50;
               $scope.ListAgent = data;
               $scope.displayedCollection = [].concat($scope.ListAgent);

               //  $state.transitionTo('Role.Detail');

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

       });

       app.controller('RolesController', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $state, $location) {

           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $location.path("/login");
           }

           else {

               $rootScope.islogin = true;

               $rootScope.islogout = false;
               $rootScope.username = localStorageService.get("username")
           }

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
           if (localStorageService.get("username") != null) {
              
           authService2.CheckAccess();
               }
           authService.Get_Role().then(function (data, status) {

               $scope.itemsByPage = 10;
               $scope.ListAgent = data;
               $scope.displayedCollection = [].concat($scope.ListAgent);

               if (localStorageService.get("username") == null) {


                   $location.path("/login");
               }

               else {

                  

                       $state.transitionTo('Role.Detail');
                  

               }

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
            $scope.dialogShown = false;
          
           $scope.EditRow2 = function (dd) {
               $scope.VEmail = "";
               authService.GetTopMenu2(dd).then(function (data, status) {

                   $rootScope.itemsByPage = 5;
                   $rootScope.ListAgent3 = data;
                   $rootScope.VROLENAME =data[0].RoleName
                  $rootScope.displayedCollection3 = [].concat($rootScope.ListAgent3);
                
                   // $state.transitionTo('Role.Detail');

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

               $scope.dialogShown = true;

               

           }

           $scope.EditRow3 = function (dds) {

               var event2s = []
               var vcount = 0;
               var pp7 = $rootScope.VROLENAME;
               angular.forEach($rootScope.displayedCollection3, function (item) {
                   var Topmenu2 = new Object();
                   Topmenu2.Menu_Code = item.Menu_Code;
            

                   Topmenu2.View = item.View;
                   Topmenu2.CreateNew = item.CreateNew;
                   Topmenu2.UpadateNew = item.UpadateNew;
                   Topmenu2.DeleteNew = item.DeleteNew;
                   Topmenu2.RoleName = pp7;

                   event2s.push(Topmenu2)


               });

               var formData = new FormData();

               var AgentsData = {


                   Name: pp7

               };

               var AgentsData2 = {


                   bb: AgentsData,
                   cc: event2s

               };




               authService.SaveRoles2(JSON.stringify(AgentsData2)).then(function (data, status) {

                   $scope.savedSuccessfully = true;
                   $scope.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";

                  
                       $location.path("/Roles");
                       // $state.transitionTo('Role');
                       swal("Role Created  Successfully");

                    

                       location.reload(true)


                  


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

           authService.GetTopMenu().then(function (data, status) {

               $scope.itemsByPage = 100;
               $scope.ListAgent2 = data;
               $scope.displayedCollection2 = [].concat($scope.ListAgent);

              // $state.transitionTo('Role.Detail');

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

           $scope.DelRole = function (dd) {

               swal({
                   title: "Are You Sure You want To Delete Record",
                   text: "",
                   type: "warning",
                   showCancelButton: true,
                   confirmButtonColor: "#DD6B55", confirmButtonText: "YES",
                   cancelButtonText: "No, cancel please!",
                   closeOnConfirm: true,
                   closeOnCancel: true
               },
    function (isConfirm) {
        if (isConfirm) {



            authService.DeleteRole(dd).then(function (data, status) {

                location.reload(true)
            });

            //   window.location.assign("profile.aspx");


        }

    });


           }

           $scope.submitForm = function (vform, isValid) {

             var   event2s = []
               var vcount = 0;
               angular.forEach($scope.displayedCollection2, function (item) {
                   var Topmenu = new Object();
                   Topmenu.Menu_Code = item.Menu_Code;

                
                   Topmenu.View = item.SelectMenu;
                   Topmenu.CreateNew = item.CreateMenu;
                   Topmenu.UpadateNew = item.UpdateMenu;
                   Topmenu.DeleteNew = item.DeleteMenu;
                   Topmenu.RoleName = vform.role_name;

                   event2s.push(Topmenu)







               });

               if (isValid) {
                   var formData = new FormData();

                   var AgentsData = {


                       Name: vform.role_name

                   };

                   var AgentsData2 = {


                       bb: AgentsData,
                       cc: event2s

                   };

                   formData.append("CreateRoleBindingModel", JSON.stringify(AgentsData));


                   authService.SaveRoles(JSON.stringify(AgentsData2)).then(function (data, status) {

                       $scope.savedSuccessfully = true;
                       $scope.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";

                       if (data.status == "200") {
                             $location.path("/Roles");
                          // $state.transitionTo('Role');
                           swal("Role Created  Successfully");

                           $state.transitionTo('Role.Detail');

                           location.reload(true)
                          

                       }


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



       });

       app.controller('TopMenuController', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $state, $location) {

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

           var kq = localStorageService.get("access_right");
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();

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
    

           $scope.submitForm = function (vform, isValid) {

               if (isValid) {
                   var formData = new FormData();

                   var AgentsData = {


                       Menu_Name: vform.role_name

                   };

                   formData.append("CreateRoleBindingModel", JSON.stringify(AgentsData));


                   authService.saveMenu(JSON.stringify(AgentsData)).then(function (data, status) {

                       $scope.savedSuccessfully = true;
                       $scope.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";

                       
                           // $state.transitionTo('Role');
                           swal("Record Saved Successfully");

                         //  $state.transitionTo('Role.Detail');

                           location.reload(true)


                      


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



       });

       app.controller('formController22', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $state, $location, $stateParams) {
           var kq = localStorageService.get("access_right");

          
           var d = $state.params.services;
           localStorageService.set("services", d);


           //for (var key in kq) {

           //    if (kq[key] == "ADMIN") {
           //        swal("", "Admin Not Allowed To Access This Module", "error");
           //        $state.transitionTo('home');
           //        $rootScope.isAdmin = true;
           //    }


           //    if (kq[key] == "PARTNER") {

           //        $rootScope.isInstitution = true;
           //    }



           //}
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();


           }

       });
       
       app.controller('formController', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $state, $location, $stateParams) {

         //  authService.GetUserRight("Verify Result", "View").then(function (data, status) {

                 
         //      $rootScope.ppp8 = data;
         

         //  },
         //function (response) {
           
         //}
           
           //  );
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();

           }
         
           if ($state.params.service != null) {
               var d = $state.params.service;
               if (d == "SV001") {
                   $scope.vdescription3 = "Search Result";

               }

               if (d == "SV003") {
                   $scope.vdescription3 = "Search Transcript";

               }

               if (d == "SV002") {
                   $scope.vdescription3 = "Search Certificate";

               }
               localStorageService.set("services", d);

           }

           //if (localStorageService.get("services") != null) {
           //    var kxx3 = localStorageService.get("services");

           //    if (kxx3 == "SV001" ) {
           //        $scope.vdescription = "View Result";

           //        $scope.vshow2 = true;
           //    }

           //    if (kxx3 == "SV003") {
           //        $scope.vdescription = "View Transcript";

           //        $scope.vshow2 = false;
           //    }

           //    if (kxx3 == "SV002") {
           //        $scope.vdescription = "View Certificate";

           //        $scope.vshow2 = true;
           //    }

           //}

           authService.GetYear().then(function (data, status) {

               $scope.varray44 = data;

           },
function (response) {

});

//            $scope.varray44 = [{ YearName: '1970', YearCode: '1970' }, { YearName: '1971', YearCode: '1971' } , { YearName: '1972', YearCode: '1972' } , { YearName: '1973', YearCode: '1973' } , { YearName: '1974', YearCode: '1974' } , { YearName: '1975', YearCode: '1975' } , { YearName: '1976', YearCode: '1976' } , { YearName: '1977', YearCode: '1977' } , { YearName: '1978', YearCode: '1978' } , { YearName: '1979', YearCode: '1979' } , { YearName: '1980', YearCode: '1980' } , { YearName: '1981', YearCode: '1981' } , { YearName: '1982', YearCode: '1982' } , { YearName: '1983', YearCode: '1983' } , { YearName: '1984', YearCode: '1984' } , { YearName: '1985', YearCode: '1985' } , { YearName: '1986', YearCode: '1986' } , { YearName: '1987', YearCode: '1988' } , { YearName: '1989', YearCode: '1989' } , { YearName: '1990', YearCode: '1990' } , { YearName: '1991', YearCode: '1991' } , { YearName: '1992', YearCode: '1992' } , { YearName: '1993', YearCode: '1993' } , { YearName: '1994', YearCode: '1994' } , { YearName: '1995', YearCode: '1995' } , { YearName: '1996', YearCode: '1996' } , { YearName: '1997', YearCode: '1997' } , { YearName: '1998', YearCode: '1998' } , { YearName: '1999', YearCode: '1999' } , { YearName: '2000', YearCode: '2000' } , { YearName: '2001', YearCode: '2001' } , { YearName: '2002', YearCode: '2002' } , { YearName: '2003', YearCode: '2003' } , { YearName: '2004', YearCode: '2004' } , { YearName: '2005', YearCode: '2005' } , { YearName: '2006', YearCode: '2006' } , { YearName: '2007', YearCode: '2007' } , { YearName: '2008', YearCode: '2008' } , { YearName: '2009', YearCode: '2009' } , { YearName: '2010', YearCode: '2010' } , { YearName: '2011', YearCode: '2011' } , { YearName: '2012', YearCode: '2012' } , { YearName: '2013', YearCode: '2013' } , { YearName: '2014', YearCode: '2014' } , { YearName: '2015', YearCode: '2015' } ,, { YearName: '2016', YearCode: '2016' },
//, { YearName: '2017', YearCode: '2017' }, { YearName: '2018', YearCode: '2018' }]
           $scope.Result = function () {

               authService.GetSubscriptionCount(localStorageService.get("username"), localStorageService.get("services")).then(function (data, status) {
                   var kk2 = JSON.parse(data);
                   localStorageService.set("Subscription_id", kk2);
                   if (kk2 == "0") {


                   }

                   else {

                       authService.UpdateSubscriptionCode(kk2).then(function (data, status) {

                           authService.GetCountResult2(localStorageService.get("Student_id")).then(function (data, status) {
                               $scope.vdata = data;

                               var kx = localStorageService.get("Student_id")
                               $scope.formData.student_no = kx;
                             //  $scope.formData.student_name = data[0].Student_Name;
                               var kx2 = localStorageService.get("Institutionname")

                               $scope.formData.Institutionname = kx2

                               $scope.formData.CurrentDate = new Date();
                               var kxx3 = localStorageService.get("services");

                               $rootScope.viewPrint = localStorageService.get("viewPrint");

                               $rootScope.viewDownload = localStorageService.get("viewDownload");

                               var kkxx3 = localStorageService.get("services");
                               var Year = localStorageService.get("Year");
                               var Institutioncode = localStorageService.get("Institution2");

                               if (kkxx3 == "SV001") {
                                   authService.SearchResult(kkxx3, Year, Institutioncode, $scope.formData.student_no).then(function (data, status) {
                                       $scope.itemsByPage = 50;
                                       $scope.ListAgent = data;
                                       $scope.displayedCollection = [].concat($scope.ListAgent);

                                       $scope.formData.student_name = data[0].Student_name;

                                   })


                               }

                               else {

                                   authService.SearchResult2(kkxx3, Institutioncode, $scope.formData.student_no).then(function (data, status) {
                                       $scope.itemsByPage = 50;
                                       $scope.ListAgent = data;
                                       $scope.displayedCollection = [].concat($scope.ListAgent);

                                       $scope.formData.student_name = data[0].Student_name;

                                   })
                               }


                               if (kxx3 == "SV001" || kxx3 == "SV003") {
                                   $state.go('form.Result')

                               }


                               if (kxx3 == "SV002" ) {
                                   $state.go('form.Certificate')

                               }
                           });

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

               })
           }
           var kq = localStorageService.get("access_right");
           for (var key in kq) {

               if (kq[key] == "ADMIN") {
                   swal("", "Admin Not Allowed To Access This Module", "error");
                   $state.transitionTo('home');
                   $rootScope.isAdmin = true;
               }


               if (kq[key] == "PARTNER") {

                   $rootScope.isInstitution = true;
               }



           }

           if ($state.params.MessageID2 != null) {
               swal("", "Payment Not Successful", "error");
               $rootScope.Transaction_Id = $state.params.MerchantTranID2;
               $rootScope.OrderStatus2 = $state.params.OrderStatus2;

               var username2 = localStorageService.get("username");
               var Institution2 = localStorageService.get("Institution2");

               var Searchname2 = localStorageService.get("Searchname2");
               var vamount2 = localStorageService.get("vamount2");
               var Searchname3 = localStorageService.get("Searchname3");
               var Bank_Code = localStorageService.get("Bank_Code");
               var AcctNum = localStorageService.get("AcctNum");
              // var SessionID = localStorageService.get("SessionID");
               var SessionID = $rootScope.Transaction_Id;
               var OrderID = localStorageService.get("OrderID");
               
               $rootScope.TranDateTime2 = $state.params.TranDateTime2;
               $rootScope.ResponseDescription2 = $state.params.ResponseDescription2;

              

               


               var AgentsData = {


                   Institution_Code: Institution2,
                   Subscription_Code: Searchname2,
                   amount: vamount2,
                   payment_type: Searchname3,
                   Bank_Code: Bank_Code,
                   Account_Number: AcctNum,
                   user_id: username2,
                   Transaction_Code: SessionID,
                   Order_Id: OrderID,
                   Transaction_Status: $rootScope.ResponseDescription2

               };




               authService.SaveTransaction2(JSON.stringify(AgentsData)).then(function (data, status) {
                   var kk2 = JSON.parse(data.data);

                   authService.GetTransaction(kk2).then(function (data, status) {
                       $rootScope.vdata = data;

                     //  $state.transitionTo('form.invoice');



                       //  location.reload(true)
                   });

                   //    swal("", $state.params.TranDateTime2, "success")

                   $rootScope.TranDateTime2 = $state.params.TranDateTime2;
                   $rootScope.ResponseDescription2 = $state.params.ResponseDescription2;

                 //  swal("", "Payment Successful", "success");



                   //   var kk2 = JSON.parse(data.data);
                   //   $state.transitionTo('form.invoice');





               },
           function (response) {

               alert(response)
               var errors = [];

           });

           }


         

           if ($state.params.MessageID != null) {

              

          
               $rootScope.Transaction_Id = $state.params.MerchantTranID2;

               var username2 = localStorageService.get("username");
               var Institution2 = localStorageService.get("Institution2");

               var Searchname2 = localStorageService.get("Searchname2");
               var vamount2 = localStorageService.get("vamount2");
               var Searchname3 = localStorageService.get("Searchname3");
               var Bank_Code = localStorageService.get("Bank_Code");
               var AcctNum = localStorageService.get("AcctNum");
             //  var SessionID = localStorageService.get("SessionID");
               var SessionID = $rootScope.Transaction_Id;
               var OrderID = localStorageService.get("OrderID");
               $rootScope.TranDateTime2 = $state.params.TranDateTime2;
               $rootScope.ResponseDescription2 = $state.params.ResponseDescription2;
               var services = localStorageService.get("services");
               var AgentsData = {


                   Institution_Code: Institution2,
                   Subscription_Code:Searchname2,
                   amount: vamount2,
                   payment_type: Searchname3,
                   Bank_Code: Bank_Code,
                   Account_Number: AcctNum,
                   user_id: username2,
                   Transaction_Code: SessionID,
                   Order_Id: OrderID,
                   Transaction_Status: $rootScope.ResponseDescription2,
                   Service: services

               };



               authService.SaveTransaction2(JSON.stringify(AgentsData)).then(function (data, status) {
                   var kk2 = JSON.parse(data.data);

                   authService.GetTransaction(kk2).then(function (data, status) {
                       $rootScope.vdata = data;

                       var loginuser = localStorageService.get("loginuser");
                       $rootScope.amount4 = localStorageService.get("TransTotal");


                       authService.GetLoggedUser(loginuser).then(function (data, status) {



                           $rootScope.loginuser = data[0];

                            if (localStorageService.get("services") != null) {
                       var kxx3 = localStorageService.get("services");

                       if (kxx3 == "SV001") {
                           $scope.vdescription = "Click To View Result";

                           $rootScope.vdescription2 = "Result";

                           $scope.vshow2 = true;
                       }

                       if (kxx3 == "SV003") {
                           $scope.vdescription = "Click To View Transcript";
                           $rootScope.vdescription2 = "Transcript";

                           $scope.vshow2 = false;
                       }

                       if (kxx3 == "SV002") {
                           $scope.vdescription = "Click To View Certificate";

                           $scope.vshow2 = true;
                       }

                   }
                          
                          
                          // $rootScope.vdata.amount = covienient3;
                          // $rootScope.amount4 = covienient3;

                             $state.transitionTo('form.invoice');

                       },
   function (response) {

   });

                     



                       //  location.reload(true)
                   });

                   //    swal("", $state.params.TranDateTime2, "success")

                   //    $rootScope.TranDateTime2 = $state.params.TranDateTime2;
                   //   $rootScope.ResponseDescription2 = $state.params.ResponseDescription2;

                   swal("", "Payment Successful", "success");



                   //   var kk2 = JSON.parse(data.data);
                   //   $state.transitionTo('form.invoice');





               },
          function (response) {

              alert(response)
              var errors = [];

          });

           }
            

         

           $scope.formData = {};
           $scope.formData.vname = "text";
           $scope.formData.student_no == "";
           $scope.formData.checked = false;
           $scope.formData.checked2 = false;
           $scope.formData.checked3 = false;
           $scope.formData.bank = false;

           //$scope.varray4 = [{ InstitutionType_Name: 'EXAM BODY', InstitutionType_Code: '001' }, { InstitutionType_Name: 'PROFESSIONAL BODY', InstitutionType_Code: '002' }]

           authService.GetInstitution().then(function (data, status) {

               $scope.varray4 = data;

           },
    function (response) {
       
    });

           authService.Get_AdditionalFee().then(function (data, status) {

               $scope.varray6 = data;

           },
   function (response) {

   });

        
           $scope.vback = function () {

               window.history.back();
           }

           $scope.newValue = function (value) {
              
               $scope.formData.checked2 = true;
               authService.GetSubscriptionCode($scope.formData.Searchname).then(function (data, status) {

                   $scope.formData.vamount = data[0].Amount ;


                   $scope.varray3 = data;

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



               if ($scope.formData.Searchname == "01") {
                   // $("#sticky1").html('Enter a valid Rtm No as displayed on your Certificate Of Registration.');
                   $scope.formData.checked = true;
                   $scope.formData.checked3 = false;
                   $scope.formData.checked2 = true;
               }

               if ($scope.formData.Searchname == "02") {
                   // $("#sticky1").html('Enter a valid File/Tp No as displayed on your Acknowledgement Form.');
                   $scope.formData.checked = false;
                   $scope.formData.checked3 = true;
                   $scope.formData.checked2 = true;

               }

           }

           $scope.newValue2a = function (value) {

               if ($scope.formData.Searchname2 == "online") {
                   $rootScope.online = true;
                   // $scope.formdata.online = true;

                   $rootScope.bank = false;
                //   $scope.formdata.bank = false;

               }

               else {

                   $rootScope.online = false;
                   // $scope.formdata.online = true;

                   $rootScope.bank = true;

                   //$scope.formdata.online = false;
                   //$scope.formdata.bank = true;
               }

           }


           $scope.newValue2 = function (value) {

        //       authService.Get_Bank().then(function (data, status) {

        //           $scope.varray3 = data;

        //       },
        //function (response) {
        //    //  ajaxindicatorstop();

        //    var errors = [];
        //    for (var key in response.data.modelState) {
        //        for (var i = 0; i < response.data.modelState[key].length; i++) {
        //            errors.push(response.data.modelState[key][i]);
        //        }
        //    }
        //    $scope.message = "Failed to register user due to:" + errors.join(' ');
        //});

      

               if ($scope.formData.Searchname2 == "online") {
                   // $("#sticky1").html('Enter a valid Rtm No as displayed on your Certificate Of Registration.');
                   var username2 = localStorageService.get("username");
                   localStorageService.set("username2", username2);
                  // $rootScope.formData.Institution2 = $scope.formData.Institution;
                   localStorageService.set("Institution2", $scope.formData.Institution);
                  // $rootScope.formData.Searchname2 = $scope.formData.Searchname;

                 
                   localStorageService.set("Searchname2", $scope.formData.Searchname);
                 //  $rootScope.formData.vamount2 = $scope.formData.vamount;

                   localStorageService.set("vamount2", $scope.formData.vamount);
                  // $rootScope.formData.Searchname3 = $scope.formData.Searchname2;
                   localStorageService.set("Searchname3", $scope.formData.Searchname2);
                 //  $rootScope.formData.Bank_Code = $scope.formData.Bank_Code;
                   localStorageService.set("Bank_Code", $scope.formData.Bank_Code);
                 //  $rootScope.formData.AcctNum = $scope.formData.AcctNum;
                   localStorageService.set("AcctNum", $scope.formData.AcctNum);

                   localStorageService.set("ServiceType", $scope.formData.AdditionalFee);
                  
                   $scope.formData.bank = false;

                   var services3 = localStorageService.get("services");
                  
                //   authService.GetPageUrl("Test Payment", $scope.formData.vamount).then(function (data, status) {
                   authService.GetPageUrl(services3, $scope.formData.TransTotal ).then(function (data, status) {

                       var kk = data;
                       localStorageService.set("SessionID", data.SessionID);
                       localStorageService.set("OrderID", data.OrderID);
                      // $rootScope.formData.SessionID = data.SessionID;
                       // $rootScope.formData.OrderID = data.OrderID;

                       var username2 = localStorageService.get("username");
                       var Institution2 = localStorageService.get("Institution2");

                       var Searchname2 = localStorageService.get("Searchname2");
                       var vamount2 = localStorageService.get("vamount2");
                       var Searchname3 = localStorageService.get("Searchname3");
                       var Bank_Code = localStorageService.get("Bank_Code");
                       var AcctNum = localStorageService.get("AcctNum");
                       var SessionID = localStorageService.get("SessionID");
                       var OrderID = localStorageService.get("OrderID");
                       var services = localStorageService.get("services");
                     //  $rootScope.TranDateTime2 = $state.params.TranDateTime2;
                       //  $rootScope.ResponseDescription2 = $state.params.ResponseDescription2;
                       var transationid = localStorageService.get("transationid");
                       var StudentNumber = localStorageService.get("Student_id");
                       localStorageService.set("SessionID", transationid);
                       var AgentsData2 = {


                           Institution_Code: Institution2,
                           Subscription_Code:Searchname2,
                           amount: vamount2,
                           payment_type: Searchname3,
                           Bank_Code: Bank_Code,
                           Account_Number: AcctNum,
                           user_id: username2,
                           Transaction_Code: transationid,
                           Order_Id: OrderID,
                           Transaction_Status: $rootScope.ResponseDescription2,
                           Service: services,
                           Fee_Code: $scope.formData.AdditionalFee,
                           StudentNumber: StudentNumber

                       };



                       authService.SaveTransaction3(JSON.stringify(AgentsData2)).then(function (data, status) {
                           // var kk2 = JSON.parse(data.data);

                       });

                       window.open(data.URL + "?SessionID=" + data.SessionID + "&&OrderID=" + data.OrderID, '_self')
             //88.150.164.30/EinaoTestEnvironment.CLD/admin/tm/Generic_registrar_data_details4cc.aspx?0001234445XXX43943OPFDSMZXUHSJFDSKFGKSDKGFSDKFSKFDKFD=" + id.oai_no + "&&Recordalid=" + id.RecordalID,
           //  '_blank' // <- This is what makes it open in a new window.
         

                     //  location.reload(true)
                   });
                 
               }

               if ($scope.formData.Searchname2 == "bank") {
                   
                  $scope.formData.bank = true;

               }

           }

         

           $scope.add2 = function (row) {

              

               authService.GetSubscriptionDetailCount().then(function (data, status) {
                   if (data > 0) {

                       $scope.bankvisible = false;
                   }
                   else {

                       $scope.bankvisible = true;
                   }


                   $scope.formData.Subscription_Name = row.Subscription_Name;
                   $scope.formData.vamount = row.Amount;
                   $scope.formData.Searchname = row.Subscription_Code;

                   var covienient = row.CovienientFee;
                   $scope.formData.Transactionid = row.Transactionid;
                   var transationid = row.Transactionid;


                   $scope.formData.covienient = covienient;
                   var TransTotal = (parseFloat(row.Amount)) + parseFloat(covienient);
                   $scope.formData.TransTotal = TransTotal;
                   localStorageService.set("covienient", covienient);

                   localStorageService.set("TransTotal", TransTotal);

                   localStorageService.set("transationid", transationid);
                   // var kk2 = JSON.parse(data.data);

               });




               $state.go('form.payment2')

           }

           $scope.add3 = function () {

               var username2 = localStorageService.get("username");

               var transationid = localStorageService.get("transationid");

               //if ($scope.formData.Bank_Code == undefined) {
               //    swal("", "Bank  cannot be null", "error");
                  
               //    return;
               //}
               var services = localStorageService.get("services");
               var StudentNumber = localStorageService.get("Student_id");
               var AgentsData = {


                   Institution_Code: $scope.formData.Institution,
                   Subscription_Code: $scope.formData.Searchname,
                   amount: $scope.formData.vamount,
                   payment_type: $scope.formData.Searchname2,
                   Bank_Code: $scope.formData.Bank_Code,
                   Account_Number: $scope.formData.AcctNum,
                   user_id: username2,
                   Service: services,
                   transationid: transationid,
                   StudentNumber:StudentNumber

               };




               authService.SaveTransaction(JSON.stringify(AgentsData)).then(function (data, status) {

                   $scope.savedSuccessfully = true;
                   $scope.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";
                 //  alert("Record Saved Successfully")
                 //  alert(data.data)
                   var kk2 = JSON.parse(data.data);
                    $rootScope.amount4 = localStorageService.get("TransTotal");

                   authService.GetTransaction(kk2).then(function (data, status) {
                       $rootScope.vdata = data;
                       $scope.TranDateTime2 = data.TranDateTime2
                       $scope.ResponseDescription2 = data.ResponseDescription2
                      
                      // $rootScope.amount4 = covienient3;

                       $state.transitionTo('form.invoice');

                      

                     //  location.reload(true)
                   });
                       //  $location.path("/Roles");
                       // $state.transitionTo('Role');
                     //  swal(data)
                      // swal("Record Saved Successfully");

                      // location.reload(true)

 


                


                   //   $location.path("/")
                   //  startTimer();

               },
           function (response) {
               //  ajaxindicatorstop();
               alert(response)
               var errors = [];
               for (var key in response.data.modelState) {
                   for (var i = 0; i < response.data.modelState[key].length; i++) {
                       errors.push(response.data.modelState[key][i]);
                   }
               }
               $scope.message = "Failed to register user due to:" + errors.join(' ');
           });


              // $state.go('form.payment2')

           }

         //  localStorageService.set("TransTotal", "0");
           $scope.add = function () {
            
               if ($scope.formData.student_no == undefined) {
                   swal("", "Student Number cannot be null", "error");
                  // swal("Student Number cannot be null ", "")
                   return;
               }

               if ($scope.formData.Institution_Type == undefined) {
                   swal("", "Institution Type  cannot be null", "error");
                 //  swal("Institution Type  cannot be null ", "")
                   return;
               }

               if ($scope.formData.Institution == undefined) {
                   swal("", "Institution   cannot be null", "error");
                 //  swal("Institution   cannot be null ", "")
                   return;
               }

               localStorageService.set("Institution2", $scope.formData.Institution);



               if ($scope.formData.AdditionalFee == undefined) {
                   swal("", "Search Result Field   cannot be null", "error");
                   //  swal("Institution   cannot be null ", "")
                   return;
               }


               if ($scope.vdescription == "Click To View Result") {
                   if ($scope.formData.Year == undefined) {
                       $scope.formData.Year = "NA";
                 //  swal("", "Year  Field   cannot be null", "error");
                 
                 //  return;
               }

               }
              
               localStorageService.set("Student_id", $scope.formData.student_no);

               localStorageService.set("Year", $scope.formData.Year);

               
               var pxx3 = localStorageService.get("services");


               localStorageService.set("viewDownload", "");
               localStorageService.set("viewPrint", "");
               if ($scope.formData.AdditionalFee == '002') {
                   $rootScope.viewPrint = true;
                   $rootScope.viewDownload = false;
                   localStorageService.set("viewPrint", true);
                   localStorageService.set("viewDownload", false);
               }

               if ($scope.formData.AdditionalFee == '003') {
                   $rootScope.viewDownload = true;
                   $rootScope.viewPrint = true;

                   localStorageService.set("viewPrint", true);

                   localStorageService.set("viewDownload", true);
               }

               if( pxx3 == "SV001" ) {
                   authService.GetCountResult($scope.formData.student_no, $scope.formData.Institution, $scope.formData.Year,pxx3).then(function (data, status) {


                       var dd = data;

                       if (dd == "true") {

                           swal({
                               title: " RECORD FOUND ",
                               text: "",
                               type: "success",
                               showCancelButton: true,
                               confirmButtonColor: "#DD6B55", confirmButtonText: "PROCEED!",
                               cancelButtonText: "No!",
                               closeOnConfirm: true,
                               closeOnCancel: true
                           },
    function (isConfirm) {
        if (isConfirm) {
            authService.GetSubscriptionCount(localStorageService.get("username"), localStorageService.get("services")).then(function (data, status) {
                var kk2 = JSON.parse(data);
                localStorageService.set("Subscription_id", kk2);
                if (kk2 == "0") {

                    authService.Get_Subscription2(localStorageService.get("username"), $scope.formData.AdditionalFee).then(function (data, status) {
                        
                        $rootScope.vdata11 = data;
                        localStorageService.set("viewDownload", "");
                        localStorageService.set("viewPrint", "");
                        if ($scope.formData.AdditionalFee == '002') {
                            $rootScope.viewPrint = true;
                            $rootScope.viewDownload = false;
                            localStorageService.set("viewPrint", true);
                            localStorageService.set("viewDownload", false);
                        }

                        if ($scope.formData.AdditionalFee == '003') {
                            $rootScope.viewDownload = true;
                            $rootScope.viewPrint = true;

                            localStorageService.set("viewPrint", true);

                            localStorageService.set("viewDownload", true);
                        }
                        //$scope.formData.Subscription_Name = data[0].Subscription_Name;
                        //$scope.formData.vamount = data[0].Amount;
                        //$scope.formData.Searchname = data[0].Subscription_Code;

                     
                        //var covienient = data[0].CovienientFee;
                        //$scope.formData.Transactionid = data[0].Transactionid;
                        //var transationid = data[0].Transactionid;
                      

                        //$scope.formData.covienient = covienient;
                        //var TransTotal = (parseFloat(data[0].Amount)) + parseFloat(covienient);
                        //$scope.formData.TransTotal = TransTotal;
                        //localStorageService.set("covienient", covienient);

                        //localStorageService.set("TransTotal", TransTotal);

                        //localStorageService.set("transationid", transationid);

                        var dp3 = $scope.formData.Institution_Type;

                        authService.GetInstitution3(dp3).then(function (data, status) {

                            $scope.formData.Institutionname = data.Institution_Name;

                            localStorageService.set("Institutionname", data.Institution_Name);


                        },
                   function (response) {
                       //  ajaxindicatorstop();

                       var errors = [];

                       $scope.message = "Failed to register user due to:" + errors.join(' ');
                   });

                        $state.go('form.payment')

                    });
                }

                else {

                    authService.UpdateSubscriptionCode(kk2).then(function (data, status) {

                        $scope.varray = data;

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


                    var dp3 = $scope.formData.Institution_Type;

                    authService.GetInstitution3(dp3).then(function (data, status) {

                        $scope.formData.Institutionname = data.Institution_Name;

                        localStorageService.set("Institutionname", data.Institution_Name);


                    },
               function (response) {
                   //  ajaxindicatorstop();

                   var errors = [];
             
                   $scope.message = "Failed to register user due to:" + errors.join(' ');
               });

                    authService.GetCountResult2($scope.formData.student_no).then(function (data, status) {
                        $scope.vdata = data

                        var kx = localStorageService.get("Student_id")
                        $scope.formData.student_no = kx;
                        $scope.formData.student_name = data[0].Student_Name;




                        var kx2 = localStorageService.get("Institutionname")

                        $scope.formData.Institutionname = kx2

                        $scope.formData.CurrentDate = new Date();

                    });

                    localStorageService.set("services", d);


                    var kxx3 = localStorageService.get("services");

                    $rootScope.viewPrint = localStorageService.get("viewPrint");

                    $rootScope.viewDownload = localStorageService.get("viewDownload");

                    var kkxx3 = localStorageService.get("services");
                    var Year = localStorageService.get("Year");
                    var Institutioncode = localStorageService.get("Institution2");

                    if (kkxx3 == "SV001") {

                        authService.SearchResult(kkxx3, Year, Institutioncode, $scope.formData.student_no).then(function (data, status) {
                            $scope.itemsByPage = 50;
                            $scope.ListAgent = data;
                            $scope.displayedCollection = [].concat($scope.ListAgent);

                            $scope.formData.student_name = data[0].Student_name;

                        })


                    }



                    else if (kkxx3 == "SV003") {

                        authService.SearchResult2(kkxx3, Institutioncode, $scope.formData.student_no).then(function (data, status) {
                            $scope.itemsByPage = 50;
                            $scope.ListAgent = data;
                            $scope.displayedCollection = [].concat($scope.ListAgent);

                            $scope.formData.student_name = data[0].Student_name;

                        })
                    }

                   else  {

                        authService.SearchResult(kkxx3, Year, Institutioncode, $scope.formData.student_no).then(function (data, status) {
                            $scope.itemsByPage = 50;
                            $scope.ListAgent = data;
                            $scope.displayedCollection = [].concat($scope.ListAgent);

                            $scope.formData.student_name = data[0].Student_name;

                        })


                    }


                
                    if (kxx3 == "SV001" || kxx3 == "SV003") {
                        $state.go('form.Result')

                    }

                    if (kxx3 == "SV002") {
                        $state.go('form.Certificate')

                    }
                }

                //  $scope.varray = data;
                //  var kk = "";

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





        } else {
            swal("Cancelled", "Action Canceled :)", "error");
        }
    });


                       }

                       else {


                           swal("", "Number Does Not Exist", "error");
                       }

                   });
               }

               else {

                   authService.GetCountResult2b($scope.formData.student_no, $scope.formData.Institution,  pxx3).then(function (data, status) {


                       var dd = data;

                       if (dd == "true") {

                           swal({
                               title: " RECORD FOUND ",
                               text: "",
                               type: "success",
                               showCancelButton: true,
                               confirmButtonColor: "#DD6B55", confirmButtonText: "PROCEED!",
                               cancelButtonText: "No!",
                               closeOnConfirm: true,
                               closeOnCancel: true
                           },
    function (isConfirm) {
        if (isConfirm) {
            authService.GetSubscriptionCount(localStorageService.get("username"), localStorageService.get("services")).then(function (data, status) {
                var kk2 = JSON.parse(data);
                localStorageService.set("Subscription_id", kk2);
                if (kk2 == "0") {

                    authService.Get_Subscription2(localStorageService.get("username"), $scope.formData.AdditionalFee).then(function (data, status) {
                       
                        $rootScope.vdata11 = data;
                        localStorageService.set("viewDownload", "");
                        localStorageService.set("viewPrint", "");
                        if ($scope.formData.AdditionalFee == '002') {
                            $rootScope.viewPrint = true;
                            $rootScope.viewDownload = false;
                            localStorageService.set("viewPrint", true);
                            localStorageService.set("viewDownload", false);
                        }

                        if ($scope.formData.AdditionalFee == '003') {
                            $rootScope.viewDownload = true;
                            $rootScope.viewPrint = true;

                            localStorageService.set("viewPrint", true);

                            localStorageService.set("viewDownload", true);
                        }
                        //$scope.formData.Subscription_Name = data[0].Subscription_Name;
                        //$scope.formData.vamount = data[0].Amount;
                        //$scope.formData.Searchname = data[0].Subscription_Code;

                      
                        //var covienient = data[0].CovienientFee;
                        //$scope.formData.Transactionid = data[0].Transactionid;
                        //var transationid = data[0].Transactionid;
                      

                        //$scope.formData.covienient = covienient;
                        //var TransTotal = (parseFloat(data[0].Amount)) + parseFloat(covienient);
                        //$scope.formData.TransTotal = TransTotal;
                        //localStorageService.set("covienient", covienient);

                        //localStorageService.set("TransTotal", TransTotal);

                        //localStorageService.set("transationid", transationid);

                        var dp3 = $scope.formData.Institution_Type;

                        authService.GetInstitution3(dp3).then(function (data, status) {

                            $scope.formData.Institutionname = data.Institution_Name;

                            localStorageService.set("Institutionname", data.Institution_Name);


                        },
                   function (response) {
                       //  ajaxindicatorstop();

                       var errors = [];

                       $scope.message = "Failed to register user due to:" + errors.join(' ');
                   });

                        $state.go('form.payment')

                    });
                }

                else {

                    authService.UpdateSubscriptionCode(kk2).then(function (data, status) {

                        $scope.varray = data;

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


                    var dp3 = $scope.formData.Institution_Type;

                    authService.GetInstitution3(dp3).then(function (data, status) {

                        $scope.formData.Institutionname = data.Institution_Name;

                        localStorageService.set("Institutionname", data.Institution_Name);


                    },
               function (response) {
                   //  ajaxindicatorstop();

                   var errors = [];

                   $scope.message = "Failed to register user due to:" + errors.join(' ');
               });

                    authService.GetCountResult2($scope.formData.student_no).then(function (data, status) {
                        $scope.vdata = data

                        var kx = localStorageService.get("Student_id")
                        $scope.formData.student_no = kx;
                        $scope.formData.student_name = data[0].Student_Name;
                       


                        var kx2 = localStorageService.get("Institutionname")

                        $scope.formData.Institutionname = kx2

                        $scope.formData.CurrentDate = new Date();

                    });

                    localStorageService.set("services", d);


                    var kxx3 = localStorageService.get("services");
                    var kkxx3 = localStorageService.get("services");
                    var Institutioncode = localStorageService.get("Institution2");
                        var Year = localStorageService.get("Year");
                    $rootScope.viewPrint = localStorageService.get("viewPrint");

                    $rootScope.viewDownload = localStorageService.get("viewDownload");


                      if (kkxx3 == "SV001") {

                        authService.SearchResult(kkxx3, Year, Institutioncode, $scope.formData.student_no).then(function (data, status) {
                            $scope.itemsByPage = 50;
                            $scope.ListAgent = data;
                            $scope.displayedCollection = [].concat($scope.ListAgent);

                            $scope.formData.student_name = data[0].Student_name;

                        })


                    }



                    else if (kkxx3 == "SV003") {

                        authService.SearchResult2(kkxx3, Institutioncode, $scope.formData.student_no).then(function (data, status) {
                            $scope.itemsByPage = 50;
                            $scope.ListAgent = data;
                            $scope.displayedCollection = [].concat($scope.ListAgent);

                            $scope.formData.student_name = data[0].Student_name;

                        })
                    }

                   else  {

                        authService.SearchResult(kkxx3, Year, Institutioncode, $scope.formData.student_no).then(function (data, status) {
                            $scope.itemsByPage = 50;
                            $scope.ListAgent = data;
                            $scope.displayedCollection = [].concat($scope.ListAgent);

                            $scope.formData.student_name = data[0].Student_name;

                        })


                    }

                    if (kxx3 == "SV001" || kxx3 == "SV003") {
                        $state.go('form.Result')

                    }

                    if (kxx3 == "SV002") {
                        $state.go('form.Certificate')

                    }
                }

                //  $scope.varray = data;
                //  var kk = "";

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





        } else {
            swal("Cancelled", "Action Canceled :)", "error");
        }
    });


                       }

                       else {


                           swal("", "Number Does Not Exist", "error");
                       }

                   });
               }
       


           }

           $scope.Export2 = function () {
              
               
               var kx2 = localStorageService.get("Institutionname");

                var kkxx3 = localStorageService.get("services");
                               var Year = localStorageService.get("Year");
                               var Institutioncode = localStorageService.get("Institution2");

               if (kkxx3 == "SV001") {
                   doUrlPost2("../UPS/DownloadPdf.aspx", kkxx3, Year, Institutioncode, $scope.formData.student_no,"SV001",$scope.formData.vemail);
                   swal("", "Result Successfully Emailed  ", "success");
               }

               if (kkxx3 == "SV003") {
                   doUrlPost2("../UPS/DownloadPdf.aspx", kkxx3, Year, Institutioncode, $scope.formData.student_no,"SV003",$scope.formData.vemail);
                   swal("", "Result Successfully Emailed  ", "success");
               }

               if (kkxx3 == "SV002") {
                   doUrlPost2("../UPS/DownloadPdf.aspx", kkxx3, Year, Institutioncode, $scope.formData.student_no, "SV002", $scope.formData.vemail);
                   swal("", "Result Successfully Emailed  ", "success");
               }
                               //if (kkxx3 == "SV001") {
                               //    authService.SearchResult3(kkxx3, Year, Institutioncode, $scope.formData.student_no,$scope.formData.vemail).then(function (data, status) {
                                      
                               //        swal("", "Result Successfully Emailed  ", "success");
                               //    })


                               //}

                               //else {

                               //    authService.SearchResult4(kkxx3, Institutioncode, $scope.formData.student_no,$scope.formData.vemail).then(function (data, status) {
                               //       swal("","Result Successfully Emailed  " ,"success");

                               //    })
                               //}



               //authService.GetCountResult22($scope.formData.student_no, $scope.formData.vemail, kx2).then(function (data, status) {
                   
               //    swal("","Result Successfully Emailed  " ,"success");
               //});

               }

           $scope.Export = function () {
               var kkxx3 = localStorageService.get("services");
               var Year = localStorageService.get("Year");
               var Institutioncode = localStorageService.get("Institution2");
               if (kkxx3 == "SV001") {
                   doUrlPost("../UPS/DownloadPdf.aspx", kkxx3, Year, Institutioncode, $scope.formData.student_no,"SV001");

               }

               if (kkxx3 == "SV003") {
                   doUrlPost("../UPS/DownloadPdf.aspx", kkxx3, Year, Institutioncode, $scope.formData.student_no,"SV003");

               }

            //   $scope.$broadcast('export-pdf', { escape: 'false' });


          
           };

           $scope.GetIns = function (d) {
              // var dp = "001";
               var dp = $scope.formData.Institution_Type;

               authService.GetInstitution2(dp).then(function (data, status) {

                   $scope.varray2 = data;

                   if ($state.params.service != null) {
                       var d = $state.params.service;
                       localStorageService.set("services", d);

                   }


                   if (localStorageService.get("services") != null) {
                       var kxx3 = localStorageService.get("services");

                       if (kxx3 == "SV001") {
                           $scope.vdescription = "Click To View Result";
                           $rootScope.vdescription2 = "Result";

                           $scope.vshow2 = true;
                       }

                       if (kxx3 == "SV003") {
                           $scope.vdescription = "Click To View Transcript";
                           $rootScope.vdescription2 = "Transcript";

                           $scope.vshow2 = false;
                       }

                       if (kxx3 == "SV002") {
                           $scope.vdescription = "Click To View Certificate";

                           $scope.vshow2 = true;
                       }

                   }

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


           $scope.GetIns2 = function () {
               // var dp = "001";
               var dp = $scope.formData.Bank_Code;

               authService.GetBankDetails(dp).then(function (data, status) {

                   $scope.formData.AcctNum = data.AccountNumber;

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

           if (localStorageService.get("username") == null) {
              

               $rootScope.islogin = false;

               $rootScope.islogout = true;

               $location.path("/login");
           }

           else {

               $rootScope.islogin = true;

               $rootScope.islogout = false;
               $rootScope.username = localStorageService.get("username")
           }

         

       });
       
       app.controller('ClientController', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $state, $location) {




           if (localStorageService.get("username") == null) {


               $location.path("/login");
           }

           $scope.varray7 = [{ name: 'Direct Integration', id: 'Direct Integration' }, { name: 'Manual Upload', id: 'Manual Upload' }]

           $scope.varray8 = [{ name: 'Deactivate', id: 'Deactivate' }]

           //$(document).ready(function () {
              
           //    $scope.Page_Path = "Configure";


           //});
         

           authService.GetInstitution().then(function (data, status) {

               $scope.varray = data;

           },
      function (response) {
        
          var errors = [];
          for (var key in response.data.modelState) {
              for (var i = 0; i < response.data.modelState[key].length; i++) {
                  errors.push(response.data.modelState[key][i]);
              }
          }
          $scope.message = "Failed to register user due to:" + errors.join(' ');
      });

           if (localStorageService.get("username") == null) {
              
               $rootScope.islogin = false;

               $rootScope.islogout = true;
           }

           else {

               $rootScope.islogin = true;

               $rootScope.islogout = false;
               $rootScope.username = localStorageService.get("username")
           }

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
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();

           }
           authService.GetClient().then(function (data, status) {

               $scope.itemsByPage = 50;
               $scope.ListAgent = data;
               $scope.displayedCollection = [].concat($scope.ListAgent);

             //  $state.transitionTo('Role.Detail');

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

           $scope.delete = function (vrow) {
               swal({
                   title: "Are You Sure You want To Delete Record",
                   text: "",
                   type: "warning",
                   showCancelButton: true,
                   confirmButtonColor: "#DD6B55", confirmButtonText: "YES",
                   cancelButtonText: "No, cancel please!",
                   closeOnConfirm: true,
                   closeOnCancel: true
               },
     function (isConfirm) {
         if (isConfirm) {

             authService.DeleteClient(vrow.Institution_Code).then(function (data, status) {

                 location.reload(true)
             });

          //   window.location.assign("profile.aspx");


         }

     });



           }



           $scope.EditRow = function (dd) {
               $rootScope.Client_name2 = dd.Institution_Name;



               
               $rootScope.Institution_Type2 = dd.InstitutionType_Code2;
               $rootScope.Institution_Code = dd.Institution_Code;

               $rootScope.Data_model2 = dd.Data_Model;

               $rootScope.Data_model3 = dd.AccountStatus;

            

               $scope.dialogShown = true;

           }

           $scope.EditRow2 = function () {

            

               var xname = $("input#Client_name2").val();

               //  var xname2 = $("select#Duration2").val();

               var xname2 = $('#Institution_Type option:selected').text();

               var xname3 = $("input#Subscription_Amount2").val();

               var xname4 = $("input#Convienient_Amount2").val();
               var xname5 = $('#Data_model2 option:selected').text();;

               var xname6 = $('#Data_model3 option:selected').text();;

              


               var AgentsData = {


                   //Subscription_Code: vform.subscription_code,
                   Institution_Name: xname,
                   Institution_Code: $rootScope.Institution_Code,
                   InstitutionType_Code: xname2,
                   Data_Model: xname5,
                   AccountStatus: xname6

               };





               authService.UpdateInstitution(JSON.stringify(AgentsData)).then(function (data, status) {

                   $scope.savedSuccessfully = true;
                   $scope.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";



                   swal("", "Institution Updated Successfully", "success");

                   location.reload(true)






               },
           function (response) {


               var errors = [];
               for (var key in response.data.modelState) {
                   for (var i = 0; i < response.data.modelState[key].length; i++) {
                       errors.push(response.data.modelState[key][i]);
                   }
               }
               $scope.message = "Failed to register user due to:" + errors.join(' ');
           });


           }

           $scope.submitForm = function (vform,Page_Path, isValid) {

               if (isValid) {
                   var formData = new FormData();

                   var AgentsData = {


                       Institution_Code: vform.Client_code,
                       Institution_Name: vform.Client_name,
                       InstitutionType_Code: vform.Institution_Type,
                       Data_Model: vform.Data_model

                   };


                


                   authService.SaveClient(AgentsData).then(function (data, status) {

                       $scope.savedSuccessfully = true;
                       $scope.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";

                       if (data.status == "200") {
                         //  $location.path("/Roles");
                           // $state.transitionTo('Role');
                           swal("Institution Saved Successfully");

                         //  $state.transitionTo('Role.Detail');

                           location.reload(true)


                       }


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

       });

       app.controller('SubscriptionController', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $state, $location) {

           if (localStorageService.get("username") == null) {


               $location.path("/login");
           }

           $scope.varray = [{ name: 'onetime-user', id: 'onetime-user' }, { name: '1-Month', id: '1-Month' }, { name: '2-Month', id: '2-Month' }, { name: '3-Month', id: '3-Month' }, { name: '4-Month', id: '4-Month' }, { name: '5-Month', id: '5-Month' }, { name: '6-Month', id: '6-Month' }, { name: '7-Month', id: '7-Month' }, { name: '8-Month', id: '8-Month' }, { name: '9-Month', id: '9-Month' }, { name: '10-Month', id: '10-Month' }, { name: '11-Month', id: '11-Month' }, { name: '12-Month', id: '12-Month' }]
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
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();

           }

           //authService.Subscription_Type().then(function (data, status) {

           //    $scope.varray = data;

           //},
           //function (response) {
           //    //  ajaxindicatorstop();

           //    var errors = [];
           //    for (var key in response.data.modelState) {
           //        for (var i = 0; i < response.data.modelState[key].length; i++) {
           //            errors.push(response.data.modelState[key][i]);
           //        }
           //    }
           //    $scope.message = "Failed to register user due to:" + errors.join(' ');
           //});

           authService.Get_Subscription().then(function (data, status) {

               $scope.itemsByPage = 50;
               $scope.ListAgent = data;
               $scope.displayedCollection = [].concat($scope.ListAgent);

            

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

           $scope.EditRow = function (dd) {
               $rootScope.subscription_name2 = dd.Subscription_Name;

             

               $scope.Duration2 = dd.Duration;
               $scope.Subscription_Amount2 = dd.Amount;
               $rootScope.Subscription_Code = dd.Subscription_Code;
               $rootScope.Convienient_Amount2 = dd.CovienientFee;
                                 
               $scope.dialogShown = true;

           }

           $scope.EditRow2 = function () {

               var xname = $("input#subscription_name2").val();

             //  var xname2 = $("select#Duration2").val();

               var xname2 = $('#Duration2 option:selected').text();

               var xname3 = $("input#Subscription_Amount2").val();

               var xname4 = $("input#Convienient_Amount2").val();


           

               var AgentsData = {


                   //Subscription_Code: vform.subscription_code,
                   Subscription_Name: xname,
                   Subscription_Code: $rootScope.Subscription_Code,
                   Amount: xname3,
                   Duration: xname2,
                   CovienientFee: xname4

               };





               authService.UpdateSubscription(JSON.stringify(AgentsData)).then(function (data, status) {

                   $scope.savedSuccessfully = true;
                   $scope.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";

                 

                       swal("","Subscription  Updated Successfully","success");

                       location.reload(true)






               },
           function (response) {


               var errors = [];
               for (var key in response.data.modelState) {
                   for (var i = 0; i < response.data.modelState[key].length; i++) {
                       errors.push(response.data.modelState[key][i]);
                   }
               }
               $scope.message = "Failed to register user due to:" + errors.join(' ');
           });


           }

           $scope.DelForm = function (dd) {

               swal({
                   title: "Are You Sure You want To Delete Record",
                   text: "",
                   type: "warning",
                   showCancelButton: true,
                   confirmButtonColor: "#DD6B55", confirmButtonText: "YES",
                   cancelButtonText: "No, cancel please!",
                   closeOnConfirm: true,
                   closeOnCancel: true
               },
    function (isConfirm) {
        if (isConfirm) {



            authService.DeleteSubscription(dd.Subscription_Code).then(function (data, status) {

                location.reload(true)
            });

            //   window.location.assign("profile.aspx");


        }

    });


           }
           $scope.submitForm = function (vform, isValid) {

               if (isValid) {

                   var AgentsData = {


                       //Subscription_Code: vform.subscription_code,
                       Subscription_Name: vform.subscription_name,
                       Subscription_Type_Code: vform.Subscription_Type,
                       Amount: vform.Subscription_Amount,
                       Duration: vform.Duration,
                       CovienientFee: vform.Convienient_Amount

                   };





                   authService.SaveSubscription(JSON.stringify(AgentsData)).then(function (data, status) {

                       $scope.savedSuccessfully = true;
                       $scope.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";

                       if (data.status == "200") {

                           swal("Subscription Saved Successfully");

                           location.reload(true)



                       }



                   },
               function (response) {


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



         //  $scope.varray = [{ name: 'ONE OFF', id: '1' }, { name: 'MONTHLY', id: '2' }, { name: 'YEARLY', id: '2' }]
       }
       );

       app.controller('AdditionalFeeController', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $state, $location) {

         
           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $rootScope.islogin = false;

               $rootScope.islogout = true;
               $location.path("/login");
           }

           else {

               $rootScope.islogin = true;

               $rootScope.islogout = false;
               $rootScope.username = localStorageService.get("username")
           }

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
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();

           }
           //authService.Subscription_Type().then(function (data, status) {

           //    $scope.varray = data;

           //},
           //function (response) {
           //    //  ajaxindicatorstop();

           //    var errors = [];
           //    for (var key in response.data.modelState) {
           //        for (var i = 0; i < response.data.modelState[key].length; i++) {
           //            errors.push(response.data.modelState[key][i]);
           //        }
           //    }
           //    $scope.message = "Failed to register user due to:" + errors.join(' ');
           //});

           authService.Get_AdditionalFee().then(function (data, status) {

               $scope.itemsByPage = 50;
               $scope.ListAgent = data;
               $scope.displayedCollection = [].concat($scope.ListAgent);



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

           $scope.submitForm = function (vform, isValid) {

               if (isValid) {

                   var AgentsData = {


                       Fee_Code: vform.subscription_code,
                       Fee_Name: vform.subscription_name,
                     
                       Amount: vform.Subscription_Amount
                      

                   };





                   authService.SaveAdditionalFee(JSON.stringify(AgentsData)).then(function (data, status) {

                       $scope.savedSuccessfully = true;
                       $scope.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";

                       if (data.status == "200") {

                           swal("Record Saved Successfully");

                           location.reload(true)



                       }



                   },
               function (response) {


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



           //  $scope.varray = [{ name: 'ONE OFF', id: '1' }, { name: 'MONTHLY', id: '2' }, { name: 'YEARLY', id: '2' }]
       }
         );

       app.controller('BankController', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $state, $location) {

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
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();

           }
           authService.Get_Bank().then(function (data, status) {

               $scope.itemsByPage = 50;
               $scope.ListAgent = data;
               $scope.displayedCollection = [].concat($scope.ListAgent);

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
           



           $scope.submitForm = function (vform, isValid) {

               if (isValid) {
                   var formData = new FormData();

                   var AgentsData = {


                       Bank_Code: vform.bank_code,
                       Bank_Name: vform.bank_name,
                       AccountNumber: vform.bank_acct

                   };

                   formData.append("CreateRoleBindingModel", JSON.stringify(AgentsData));


                   authService.SaveBank(JSON.stringify(AgentsData)).then(function (data, status) {

                       $scope.savedSuccessfully = true;
                       $scope.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";

                       if (data.status == "200") {
                         //  $location.path("/Roles");
                           // $state.transitionTo('Role');
                           swal("Record Saved Successfully");

                           location.reload(true)



                       }



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



       });

       app.controller('InstitutionTypeController', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $state, $location) {

           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $rootScope.islogin = false;

               $rootScope.islogout = true;
                $location.path("/login");
           }

           else {

               $rootScope.islogin = true;

               $rootScope.islogout = false;
               $rootScope.username = localStorageService.get("username")
           }

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
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();

           }

           authService.Get_InstitutionType().then(function (data, status) {

               $scope.itemsByPage = 50;
               $scope.ListAgent = data;
               $scope.displayedCollection = [].concat($scope.ListAgent);

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




           $scope.EditRow = function (dd) {
               $rootScope.bank_name2 = dd.InstitutionType_Name;



               $rootScope.InstitutionType_Code = dd.InstitutionType_Code;
             

               $scope.dialogShown = true;

           }

           $scope.EditRow2 = function () {

               var xname = $("input#bank_name2").val();

               //  var xname2 = $("select#Duration2").val();

              

               var xname2 = $rootScope.InstitutionType_Code;

             




               var AgentsData = {


                   //Subscription_Code: vform.subscription_code,
                   InstitutionType_Code: xname2,
                   InstitutionType_Name: xname

               };





               authService.UpdateInstitutionType(JSON.stringify(AgentsData)).then(function (data, status) {

                   $scope.savedSuccessfully = true;
                   $scope.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";



                   swal("", " InstitutionType  Updated Successfully", "success");

                   location.reload(true)






               },
           function (response) {


               var errors = [];
               for (var key in response.data.modelState) {
                   for (var i = 0; i < response.data.modelState[key].length; i++) {
                       errors.push(response.data.modelState[key][i]);
                   }
               }
               $scope.message = "Failed to register user due to:" + errors.join(' ');
           });


           }

           $scope.DelForm = function (dd) {

               swal({
                   title: "Are You Sure You want To Delete Record",
                   text: "",
                   type: "warning",
                   showCancelButton: true,
                   confirmButtonColor: "#DD6B55", confirmButtonText: "YES",
                   cancelButtonText: "No, cancel please!",
                   closeOnConfirm: true,
                   closeOnCancel: true
               },
    function (isConfirm) {
        if (isConfirm) {



            authService.DeleteInstitutionType(dd.InstitutionType_Code).then(function (data, status) {

                location.reload(true)
            });

            //   window.location.assign("profile.aspx");


        }

    });


           }

           $scope.submitForm = function (vform, isValid) {

               if (isValid) {
                   var formData = new FormData();

                   var AgentsData = {


                       InstitutionType_Code: vform.bank_code,
                       InstitutionType_Name: vform.bank_name

                   };

                   formData.append("CreateRoleBindingModel", JSON.stringify(AgentsData));


                   authService.SaveInstitutionType(JSON.stringify(AgentsData)).then(function (data, status) {

                       $scope.savedSuccessfully = true;
                       $scope.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";

                       if (data.status == "200") {
                           //  $location.path("/Roles");
                           // $state.transitionTo('Role');
                           swal("InstitutionType Saved Successfully");

                           location.reload(true)



                       }



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



       });


       app.controller('AssignRolesController', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $state,  $location) {
          
           if (localStorageService.get("username") == null) {


               $location.path("/login");
           }

           $scope.DelRole = function (dd) {

               swal({
                   title: "Are You Sure You want To Delete Record",
                   text: "",
                   type: "warning",
                   showCancelButton: true,
                   confirmButtonColor: "#DD6B55", confirmButtonText: "YES",
                   cancelButtonText: "No, cancel please!",
                   closeOnConfirm: true,
                   closeOnCancel: true
               },
    function (isConfirm) {
        if (isConfirm) {



            authService.DeleteRole(dd.Subscription_Code).then(function (data, status) {

                location.reload(true)
            });

            //   window.location.assign("profile.aspx");


        }

    });


           }

           $scope.DelRole2 = function (dd) {

               swal({
                   title: "Are You Sure You want To Delete Record",
                   text: "",
                   type: "warning",
                   showCancelButton: true,
                   confirmButtonColor: "#DD6B55", confirmButtonText: "YES",
                   cancelButtonText: "No, cancel please!",
                   closeOnConfirm: true,
                   closeOnCancel: true
               },
    function (isConfirm) {
        if (isConfirm) {



            authService.DeleteRole(dd).then(function (data, status) {

                location.reload(true)
            });

            //   window.location.assign("profile.aspx");


        }

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
           }

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
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();

           }
           var kq = localStorageService.get("access_right");
           for (var key in kq) {

               if (kq[key] == "ADMIN") {

                   $rootScope.isAdmin = true;
               }
               // alert($rootScope.Roles[key])
           }


           authService.Get_Role2().then(function (data, status) {

               $scope.itemsByPage = 50;
               $scope.Roles = data;
            //   $scope.displayedCollection = [].concat($scope.ListAgent);

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


           $scope.change = function (dd2) {
               $location.path("/AssignRole")
              // $state.transitionTo('AssignRole');
               authService.AssignedUser(dd2).then(function (data, status) {
                 
                   $scope.itemsByPage = 50;
                   $scope.ListAgent = data;
                   $scope.displayedCollection = [].concat($scope.ListAgent);
                   //  $state.transitionTo("AssignRole.Data")

                 
                   $state.transitionTo('AssignRole.Data');
                 //  $location.path("/AssignRole/Data")


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
           $scope.submitForm = function (vform, isValid) {

               if (isValid) {
                   var formData = new FormData();

                   var AgentsData = {


                       username: vform.user_name,
                       rolename: vform.role2

                   };

                   formData.append("CreateRoleBindingModel", JSON.stringify(AgentsData));


                   authService.assignRoles(JSON.stringify(AgentsData)).then(function (data, status) {

                       $scope.savedSuccessfully = true;
                       $scope.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";

                       if (data.status == "200") {
                           swal("Role Assigned  Successfully");

                       }


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



       });

       app.controller('ProductController', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $location) {

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
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();

           }

           authService.GetClient().then(function (data, status) {

               $scope.itemsByPage = 50;
               $scope.ListAgent = data;
               $scope.displayedCollection = [].concat($scope.ListAgent);

               //  $state.transitionTo('Role.Detail');

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

       });


       app.controller('Contact2Controller', function ($scope, $http, $rootScope, localStorageService, authService, authService2, $location) {

         

           $scope.change3 = function () {
               var kkk = $('#password').val();
               var kkk2 = $('#passwd2').val();

               if (kkk != kkk2) {
                   swal("", "Confirm Password does not match Password", "error")
                   $scope.vform.conpasswd = "";
                  
                   return

               }
               

           }

           $scope.change2 = function () {
               var kkk = $('#password').val();

               if (kkk.length < 8) {
                   swal("", "Password Must be a minimum of 8 characters", "error")
                   $scope.vform.passwd = "";
				return ;
               }

               var regex = /^(?=.*[A-Z]).+$/;
               if (!(regex.test(kkk))) {

                   swal("", "Password Must  contain at least 1 capital letter", "error")
                    $scope.vform.passwd = "";
                   return;
               }
              
               //  var regex2 = /^(?=.*[0-9_\W]).+$/;

               var regex2 = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
               if (!(regex2.test(kkk))) {

                   swal("", "Password Must  contain  at least one special character", "error")
                    $scope.vform.passwd = "";
                   return;
               }

               var regex3 = /\d/;

               if (!(regex3.test(kkk))) {
                   swal("", "Password Must  be   alphanumeric ", "error")
                   $scope.vform.passwd = "";
                   return;
               }

               var regex4 = /[a-z]/i;

               if (!(regex4.test(kkk))) {
                   swal("", "Password Must  be   alphanumeric ", "error")
                   $scope.vform.passwd = "";
                   return;
               }


           }

           $scope.change = function () {


               var kkk = $('#vvemail').val();

               authService.GetUserCount(kkk).then(function (data, status) {
                   var dd = parseInt(data);

                   if (dd > 0) {
                       swal("", "Email Already Exist", "error")

                       $scope.vform.email = "";
                   }

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

           }

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
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();

           }

       //    alert(localStorageService.get("test"))
           $scope.vform={}
           $scope.email = "";
           $scope.firstname = "";
           $scope.lastname = "";
           $scope.passwd = "";
           $scope.conpasswd = "";
           $scope.phone_number = "";


           //   localStorageService.remove("test");

           $scope.submitForm = function (vform,isValid) {

               if (isValid) {
               var formData = new FormData();
          
               var AgentsData = {


                   Email: vform.email,
                   Password: vform.passwd,
                   ConfirmPassword: vform.conpasswd,
                   PhoneNumber: vform.phone_number,
                   First_Name: vform.firstname,
                   Surname_Name: vform.lastname

               };

               formData.append("RegisterBindingModel", JSON.stringify(AgentsData));


               authService.saveRegistration(formData).then(function (data, status) {

                   $scope.savedSuccessfully = true;
                   $scope.message = "Sign-Up was successful, You Will Be Redicted To Login Page in 2 seconds.";

                   if (data.status == "200") {


                       $location.path("#/login");
                       //  swal("Record Saved Successfully");

                       swal("", "Sign-Up was successful ,An Activation mail has been sent to your email  ", "success")
                       $location.path("/login")
              //         swal({
              //             title: "USER REGISTERED SUCCESSFULLY ,AN ACTIVATION MAIL HAS BEEN SENT TO YOUR EMAIL ",
              //             text: "",
              //             type: "success",
              //             showCancelButton: false,
              //             confirmButtonColor: "#DD6B55", confirmButtonText: "OK",
              //             cancelButtonText: "No, cancel please!",
              //             closeOnConfirm: true,
              //             closeOnCancel: true
              //         },
              //function (isConfirm) {
              //    if (isConfirm) {
              //       // $location.path("http://88.150.164.30/ups/#/login");

              //        window.location.href = "http://88.150.164.30/ups/#/login"
              //     //   $location.path("#/login")

              //    } else {
              //        swal("Cancelled", "Action Canceled :)", "error");
              //    }
              //});


                    

                   }
                 

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






       });


       app.controller('Contact3Controller', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $location) {

           //  localStorageService.set("test", "testing local storage");

           if (localStorageService.get("username") == null) {


               $location.path("/login");
           }
           $scope.GetIns2 = function (dd) {

               authService.Get_Subscription3(dd).then(function (data, status) {
                   $scope.vform.Fee = data.Amount;

               });

           }
           authService.GetInstitution3().then(function (data, status) {

               $scope.varray9 = data;
           });

           authService.Get_Role2().then(function (data, status) {

               $scope.varray44 = data;
           });
           //$scope.varray44 = [{ Transaction_Status: 'CORPORATE', Transaction_Status: 'CORPORATE' }, { Transaction_Status: 'PARTNER', Transaction_Status: 'PARTNER' }]

           $scope.GetStates = function () {
               var vvresult = $scope.vform.vvroles;

               authService.GetTopMenu3(vvresult).then(function (data, status) {

                   if (data.partnercount > 0) {
                       $scope.VPARTNER = true;
                   }

                   else {
                       $scope.VPARTNER = false;

                   }

                   if (data.corporatecount > 0) {
                       $scope.VCORPORATE = true;
                   }
                   else {
                       $scope.VCORPORATE = false;

                   }

                   // $state.transitionTo('Role.Detail');

               },
          function (response) {
              var dd = response
          });
             

               //if (vvresult == "CORPORATE") {
               //    $scope.VCORPORATE = true;
               //}

               //else {

               //    $scope.VCORPORATE = false;
               //}

               //if (vvresult == "PARTNER") {
               //    $scope.VPARTNER = true;
               //}

               //else {

               //    $scope.VPARTNER = false;
               //}
           }

           $scope.change = function () {


               var kkk = $('#vvemail').val();

               authService.GetUserCount(kkk).then(function (data, status) {
                   var dd = parseInt(data);

                   if (dd > 0) {
                       swal("" ,"Email Already Exist","error")

                       $scope.vform.email = "";
                   }

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

           }

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
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();

           }
           authService.Get_Subscription().then(function (data, status) {

               $scope.varray6 = data;
           });
          

         
         //  authService.Get_Institution4().then(function (data, status) {

         //      $scope.varray6 = data;

         //  },
         //function (response) {
         //    //  ajaxindicatorstop();

         //    var errors = [];
         //    for (var key in response.data.modelState) {
         //        for (var i = 0; i < response.data.modelState[key].length; i++) {
         //            errors.push(response.data.modelState[key][i]);
         //        }
         //    }
         //    $scope.message = "Failed to register user due to:" + errors.join(' ');
         //});


           //    alert(localStorageService.get("test"))
           $scope.vform = {}
           $scope.email = "";
           $scope.firstname = "";
           $scope.lastname = "";
           $scope.passwd = "";
           $scope.conpasswd = "";
           $scope.phone_number = "";


           //   localStorageService.remove("test");

           $scope.submitForm = function (vform, isValid) {

               if (isValid) {
                   var formData = new FormData();

                   if (vform.vvroles == "PARTNER") {

                       if (vform.Institution2 == "") {

                           swal("", "You need To Select Institution", "error");
                           return;
                       }
                   }

                   var AgentsData = {


                       Email: vform.email,
                       //Password: vform.passwd,
                       Password: "",
                       //ConfirmPassword: vform.conpasswd,
                       ConfirmPassword: "",
                       PhoneNumber: vform.phone_number,
                       First_Name: vform.firstname,
                       Surname_Name: vform.lastname,
                       Subscription_Type: vform.Institution,
                       Fee: vform.master,
                       Fee_amount: vform.Fee,
                       Services: vform.Services,
                       Institution_Code: vform.Institution2,
                       userrole: vform.vvroles

                   };

                   formData.append("RegisterBindingModel", JSON.stringify(AgentsData));


                   authService.SaveRegistration2(formData).then(function (data, status) {

                       $scope.savedSuccessfully = true;
                       $scope.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";

                       if (data.status == "200") {
                           //  swal("Record Saved Successfully");



                           swal({
                               title: "Sign-Up was successful ,An activation mail has been sent to your email ",
                               text: "",
                               type: "success",
                               showCancelButton: false,
                               confirmButtonColor: "#DD6B55", confirmButtonText: "OK",
                               cancelButtonText: "No, cancel please!",
                               closeOnConfirm: true,
                               closeOnCancel: true
                           },
                  function (isConfirm) {
                      if (isConfirm) {

                          $location.path("#/login")

                      } else {
                          swal("Cancelled", "Action Canceled :)", "error");
                      }
                  });




                       }


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






       });

       app.controller('Contact3bController', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $location) {

           //  localStorageService.set("test", "testing local storage");

           if (localStorageService.get("username") == null) {


               $location.path("/login");
           }

           $scope.change = function () {


               var kkk = $('#vvemail').val();

               authService.GetUserCount(kkk).then(function (data, status) {
                   var dd = parseInt(data);

                   if (dd > 0) {
                       swal("", "Email Already Exist", "error")

                       $scope.vform.email = "";
                   }

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

           }

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
           if (localStorageService.get("username") != null) {
               authService2.CheckAccess();

           }
           authService.GetInstitution3().then(function (data, status) {

               $scope.varray9 = data;
           });



           //  authService.Get_Institution4().then(function (data, status) {

           //      $scope.varray6 = data;

           //  },
           //function (response) {
           //    //  ajaxindicatorstop();

           //    var errors = [];
           //    for (var key in response.data.modelState) {
           //        for (var i = 0; i < response.data.modelState[key].length; i++) {
           //            errors.push(response.data.modelState[key][i]);
           //        }
           //    }
           //    $scope.message = "Failed to register user due to:" + errors.join(' ');
           //});


           //    alert(localStorageService.get("test"))
           $scope.vform = {}
           $scope.email = "";
           $scope.firstname = "";
           $scope.lastname = "";
           $scope.passwd = "";
           $scope.conpasswd = "";
           $scope.phone_number = "";


           //   localStorageService.remove("test");

           $scope.submitForm = function (vform, isValid) {

               if (isValid) {
                   var formData = new FormData();

                   var AgentsData = {


                       Email: vform.email,
                       //Password: vform.passwd,
                       Password: "",
                       //ConfirmPassword: vform.conpasswd,
                       ConfirmPassword: "",
                       PhoneNumber: vform.phone_number,
                       First_Name: vform.firstname,
                       Surname_Name: vform.lastname,
                       Subscription_Type: vform.Institution

                   };

                   formData.append("RegisterBindingModel", JSON.stringify(AgentsData));


                   authService.saveRegistration3(formData).then(function (data, status) {

                       $scope.savedSuccessfully = true;
                       $scope.message = "Sign-Up was successful, you will be redicted to login page in 2 seconds.";

                       if (data.status == "200") {
                           //  swal("Record Saved Successfully");



                           swal({
                               title: "Sign-Up was successful ,An activation mail has been sent to your email",
                               text: "",
                               type: "success",
                               showCancelButton: false,
                               confirmButtonColor: "#DD6B55", confirmButtonText: "OK",
                               cancelButtonText: "No, cancel please!",
                               closeOnConfirm: true,
                               closeOnCancel: true
                           },
                  function (isConfirm) {
                      if (isConfirm) {

                          $location.path("#/login")

                      } else {
                          swal("Cancelled", "Action Canceled :)", "error");
                      }
                  });




                       }


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






       });


      function GetUserRight(menuname, voperation) {
           var dd = "";
           var kq2 = localStorageService.get("access_right2");
           if (localStorageService.get("username") == null) {
               return false;
           }
           angular.forEach(kq2, function (item) {
              

              
               if (menuname == "Verify Result" && kq2.length == 0) {
                   return true;

               }

               if (menuname == "Print Transcript" && kq2.length == 0) {
                   return true;

               }

               if (menuname == "Generate Certificate" && kq2.length == 0) {
                   return true;

               }

               if (voperation == "View") {
                   if (menuname == item.Menu_Code && voperation == "true") {
                       return true;

                   }

               }

               if (voperation == "CreateNew") {
                   if (menuname == item.Menu_Code && voperation == "true") {
                       return true;

                   }

               }

               if (voperation == "UpadateNew") {
                   if (menuname == item.Menu_Code && voperation == "true") {
                       return true;

                   }

               }

               if (voperation == "DeleteNew") {
                   if (menuname == item.Menu_Code && voperation == "true") {
                       return true;

                   }

               }
             


           });

           //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
           //    return response;
           //});

       };

       function doUrlPost(x_url, service, Year, Institutioncode, student_no,type) {


           postwith(x_url, {
               service: service, Year: Year, Institutioncode: Institutioncode, student_no: student_no, type: type
           });
       }

       function doUrlPost3(x_url,start_date, end_date, studentnumber, institution, subscription, paymentstatus) {


           postwith(x_url, {
               start_date: start_date, end_date: end_date, studentnumber: studentnumber, institution: institution, subscription: subscription, paymentstatus: paymentstatus
           });
       }

     function doUrlPost2(x_url, service, Year, Institutioncode, student_no,type,email) {


           postwith(x_url, {
               service: service, Year: Year, Institutioncode: Institutioncode, student_no: student_no, type: type, email: email
           });
       }

     function isNumber(n) {
         return !isNaN(parseFloat(n)) && isFinite(n);
     }
       function postwith(to, p) {
           var myForm = document.createElement("form");
           myForm.method = "post";
           myForm.action = to;
           for (var k in p) {
               var myInput = document.createElement("input");
               myInput.setAttribute("name", k);
               myInput.setAttribute("value", p[k]);
               myForm.appendChild(myInput);
           }
           document.body.appendChild(myForm);
           myForm.submit();
           document.body.removeChild(myForm);
       }

       String.prototype.parseQuerystring = function () {
           var query = {};
           var a = this.split('&');
           for (var i in a) {
               var b = a[i].split('=');
               query[decodeURIComponent(b[0])] = decodeURIComponent(b[1]);
           }

           return query;

       }

}(window));