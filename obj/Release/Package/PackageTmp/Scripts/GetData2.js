
angular.module('app')
    .factory('authService2', ['$http', '$q', '$rootScope', 'localStorageService','authService',
        function ($http, $q, $rootScope, localStorageService,authService) {

            var factory2 = {};

            factory2.CheckAccess = function () {
                var data = localStorageService.get("access_right");
                if (data == null) {
                data=[];
                }
                
                //  localStorageService.set("access_right", data);
                if (data.length == 0) {
                 //if (data == null) {
                    authService.GetUserRight("Verify Result", "View").then(function (data, status) {
                        $rootScope.SearchResultTransaction = data;

                        if (($rootScope.SearchResultTransaction)) {
                            $rootScope.SearchAll = true;
                        }

                        else {

                            $rootScope.SearchAll = false;
                        }

                    });

                    authService.GetUserRight("Print Transcript", "View").then(function (data, status) {
                        $rootScope.SearchTranscriptTransaction = data
                        if (($rootScope.SearchTranscriptTransaction)) {
                            $rootScope.SearchAll = true;
                        }

                        else {

                            $rootScope.SearchAll = false;
                        }
                    });

                    authService.GetUserRight("Generate Certificate", "View").then(function (data, status) {
                        $rootScope.SearchCertificateTransaction = data
                        if (($rootScope.SearchCertificateTransaction)) {
                            $rootScope.SearchAll = true;
                        }

                        else {

                            $rootScope.SearchAll = false;
                        }
                    });




                }
                    //for (var key in $rootScope.Roles) {
                else {
                    authService.GetTopMenu2(data[0]).then(function (data, status) {


                        //  $rootScope.ListAgent3 = data;
                        localStorageService.set("access_right2", data);

                        //  $rootScope.SearchTransaction = _GetUserRight("Verify Result", "View");

                        authService.GetUserRight("Verify Result", "View").then(function (data, status) {
                            $rootScope.SearchResultTransaction = data
                            if (($rootScope.SearchResultTransaction) || ($rootScope.SearchTranscriptTransaction) || ($rootScope.SearchCertificateTransaction)) {
                                $rootScope.SearchAll = true;
                            }

                            else {

                                $rootScope.SearchAll = false;
                            }
                        });
                        authService.GetUserRight("Print Transcript", "View").then(function (data, status) {
                            $rootScope.SearchTranscriptTransaction = data
                            if (($rootScope.SearchResultTransaction) || ($rootScope.SearchTranscriptTransaction) || ($rootScope.SearchCertificateTransaction)) {
                                $rootScope.SearchAll = true;
                            }

                            else {

                                $rootScope.SearchAll = false;
                            }
                        });
                        authService.GetUserRight("Generate Certificate", "View").then(function (data, status) {
                            $rootScope.SearchCertificateTransaction = data
                            if (($rootScope.SearchResultTransaction) || ($rootScope.SearchTranscriptTransaction) || ($rootScope.SearchCertificateTransaction)) {
                                $rootScope.SearchAll = true;
                            }

                            else {

                                $rootScope.SearchAll = false;
                            }
                        });
                        authService.GetUserRight("Register Corporate", "View").then(function (data, status) {
                            $rootScope.RegisterCorporate = data
                            if (($rootScope.ViewUsers) || ($rootScope.CreateRole) || ($rootScope.AssignRole) || ($rootScope.ViewTransactions) || ($rootScope.SetUpSubscription) || ($rootScope.AddOnFee) || ($rootScope.SetUpInstitution) || ($rootScope.SetUpInstitutionType) || ($rootScope.RegisterPartnerUser) || ($rootScope.AdminViewUploadedData)) {
                                $rootScope.AdminAll = true;
                            }
                            else {
                                $rootScope.AdminAll = false;
                            }
                        });

                        authService.GetUserRight("Register Corporate", "CreateNew").then(function (data, status) {
                            $rootScope.RegisterCorporateSave = data
                            if (($rootScope.ViewUsers) || ($rootScope.CreateRole) || ($rootScope.AssignRole) || ($rootScope.ViewTransactions) || ($rootScope.SetUpSubscription) || ($rootScope.AddOnFee) || ($rootScope.SetUpInstitution) || ($rootScope.SetUpInstitutionType) || ($rootScope.RegisterPartnerUser) || ($rootScope.AdminViewUploadedData)) {
                                $rootScope.AdminAll = true;
                            }
                            else {
                                $rootScope.AdminAll = false;
                            }
                        });
                        authService.GetUserRight("View Users", "View").then(function (data, status) {
                            $rootScope.ViewUsers = data
                            if (($rootScope.ViewUsers) || ($rootScope.CreateRole) || ($rootScope.AssignRole) || ($rootScope.ViewTransactions) || ($rootScope.SetUpSubscription) || ($rootScope.AddOnFee) || ($rootScope.SetUpInstitution) || ($rootScope.SetUpInstitutionType) || ($rootScope.RegisterPartnerUser) || ($rootScope.AdminViewUploadedData)) {
                                $rootScope.AdminAll = true;
                            }
                            else {
                                $rootScope.AdminAll = false;
                            }
                        });

                        authService.GetUserRight("View Users", "DeleteNew").then(function (data, status) {
                            $rootScope.ViewUsersDel = data
                            if (($rootScope.ViewUsers) || ($rootScope.CreateRole) || ($rootScope.AssignRole) || ($rootScope.ViewTransactions) || ($rootScope.SetUpSubscription) || ($rootScope.AddOnFee) || ($rootScope.SetUpInstitution) || ($rootScope.SetUpInstitutionType) || ($rootScope.RegisterPartnerUser) || ($rootScope.AdminViewUploadedData)) {
                                $rootScope.AdminAll = true;
                            }
                            else {
                                $rootScope.AdminAll = false;
                            }
                        });
                        authService.GetUserRight("Create Role", "View").then(function (data, status) {
                            $rootScope.CreateRole = data
                            if (($rootScope.ViewUsers) || ($rootScope.CreateRole) || ($rootScope.AssignRole) || ($rootScope.ViewTransactions) || ($rootScope.SetUpSubscription) || ($rootScope.AddOnFee) || ($rootScope.SetUpInstitution) || ($rootScope.SetUpInstitutionType) || ($rootScope.RegisterPartnerUser) || ($rootScope.AdminViewUploadedData)) {
                                $rootScope.AdminAll = true;
                            }
                            else {
                                $rootScope.AdminAll = false;
                            }
                        });

                        authService.GetUserRight("Create Role", "DeleteNew").then(function (data, status) {
                            $rootScope.CreateRoleDel = data
                            if (($rootScope.ViewUsers) || ($rootScope.CreateRole) || ($rootScope.AssignRole) || ($rootScope.ViewTransactions) || ($rootScope.SetUpSubscription) || ($rootScope.AddOnFee) || ($rootScope.SetUpInstitution) || ($rootScope.SetUpInstitutionType) || ($rootScope.RegisterPartnerUser) || ($rootScope.AdminViewUploadedData)) {
                                $rootScope.AdminAll = true;
                            }
                            else {
                                $rootScope.AdminAll = false;
                            }
                        });

                        authService.GetUserRight("Create Role", "CreateNew").then(function (data, status) {
                            $rootScope.CreateRoleCreate = data
                            if (($rootScope.ViewUsers) || ($rootScope.CreateRole) || ($rootScope.AssignRole) || ($rootScope.ViewTransactions) || ($rootScope.SetUpSubscription) || ($rootScope.AddOnFee) || ($rootScope.SetUpInstitution) || ($rootScope.SetUpInstitutionType) || ($rootScope.RegisterPartnerUser) || ($rootScope.AdminViewUploadedData)) {
                                $rootScope.AdminAll = true;
                            }
                            else {
                                $rootScope.AdminAll = false;
                            }
                        });
                        authService.GetUserRight("Assign Role", "View").then(function (data, status) {
                            $rootScope.AssignRole = data
                            if (($rootScope.ViewUsers) || ($rootScope.CreateRole) || ($rootScope.AssignRole) || ($rootScope.ViewTransactions) || ($rootScope.SetUpSubscription) || ($rootScope.AddOnFee) || ($rootScope.SetUpInstitution) || ($rootScope.SetUpInstitutionType) || ($rootScope.RegisterPartnerUser) || ($rootScope.AdminViewUploadedData)) {
                                $rootScope.AdminAll = true;
                            }
                            else {
                                $rootScope.AdminAll = false;
                            }
                        });

                        authService.GetUserRight("Assign Role", "CreateNew").then(function (data, status) {
                            $rootScope.AssignRoleCreate = data
                            if (($rootScope.ViewUsers) || ($rootScope.CreateRole) || ($rootScope.AssignRole) || ($rootScope.ViewTransactions) || ($rootScope.SetUpSubscription) || ($rootScope.AddOnFee) || ($rootScope.SetUpInstitution) || ($rootScope.SetUpInstitutionType) || ($rootScope.RegisterPartnerUser) || ($rootScope.AdminViewUploadedData)) {
                                $rootScope.AdminAll = true;
                            }
                            else {
                                $rootScope.AdminAll = false;
                            }
                        });
                        authService.GetUserRight("View Transactions", "View").then(function (data, status) {
                            $rootScope.ViewTransactions = data
                            if (($rootScope.ViewUsers) || ($rootScope.CreateRole) || ($rootScope.AssignRole) || ($rootScope.ViewTransactions) || ($rootScope.SetUpSubscription) || ($rootScope.AddOnFee) || ($rootScope.SetUpInstitution) || ($rootScope.SetUpInstitutionType) || ($rootScope.RegisterPartnerUser) || ($rootScope.AdminViewUploadedData)) {
                                $rootScope.AdminAll = true;
                            }
                            else {
                                $rootScope.AdminAll = false;
                            }
                        });

                     

                        authService.GetUserRight("Set Up Subscription", "View").then(function (data, status) {
                            $rootScope.SetUpSubscription = data
                            if (($rootScope.ViewUsers) || ($rootScope.CreateRole) || ($rootScope.AssignRole) || ($rootScope.ViewTransactions) || ($rootScope.SetUpSubscription) || ($rootScope.AddOnFee) || ($rootScope.SetUpInstitution) || ($rootScope.SetUpInstitutionType) || ($rootScope.RegisterPartnerUser) || ($rootScope.AdminViewUploadedData)) {
                                $rootScope.AdminAll = true;
                            }
                            else {
                                $rootScope.AdminAll = false;
                            }
                        });

                        authService.GetUserRight("Set Up Subscription", "CreateNew").then(function (data, status) {
                            $rootScope.SetUpSubscriptionCreateNew = data
                            if (($rootScope.ViewUsers) || ($rootScope.CreateRole) || ($rootScope.AssignRole) || ($rootScope.ViewTransactions) || ($rootScope.SetUpSubscription) || ($rootScope.AddOnFee) || ($rootScope.SetUpInstitution) || ($rootScope.SetUpInstitutionType) || ($rootScope.RegisterPartnerUser) || ($rootScope.AdminViewUploadedData)) {
                                $rootScope.AdminAll = true;
                            }
                            else {
                                $rootScope.AdminAll = false;
                            }
                        });

                        authService.GetUserRight("Set Up Subscription", "UpadateNew").then(function (data, status) {
                            $rootScope.SetUpSubscriptionUpadateNew = data
                            if (($rootScope.ViewUsers) || ($rootScope.CreateRole) || ($rootScope.AssignRole) || ($rootScope.ViewTransactions) || ($rootScope.SetUpSubscription) || ($rootScope.AddOnFee) || ($rootScope.SetUpInstitution) || ($rootScope.SetUpInstitutionType) || ($rootScope.RegisterPartnerUser) || ($rootScope.AdminViewUploadedData)) {
                                $rootScope.AdminAll = true;
                            }
                            else {
                                $rootScope.AdminAll = false;
                            }
                        });

                        authService.GetUserRight("Set Up Subscription", "DeleteNew").then(function (data, status) {
                            $rootScope.SetUpSubscriptionDeleteNew = data
                            if (($rootScope.ViewUsers) || ($rootScope.CreateRole) || ($rootScope.AssignRole) || ($rootScope.ViewTransactions) || ($rootScope.SetUpSubscription) || ($rootScope.AddOnFee) || ($rootScope.SetUpInstitution) || ($rootScope.SetUpInstitutionType) || ($rootScope.RegisterPartnerUser) || ($rootScope.AdminViewUploadedData)) {
                                $rootScope.AdminAll = true;
                            }
                            else {
                                $rootScope.AdminAll = false;
                            }
                        });


                        authService.GetUserRight("Add On Fee", "View").then(function (data, status) {
                            $rootScope.AddOnFee = data
                            if (($rootScope.ViewUsers) || ($rootScope.CreateRole) || ($rootScope.AssignRole) || ($rootScope.ViewTransactions) || ($rootScope.SetUpSubscription) || ($rootScope.AddOnFee) || ($rootScope.SetUpInstitution) || ($rootScope.SetUpInstitutionType) || ($rootScope.RegisterPartnerUser) || ($rootScope.AdminViewUploadedData)) {
                                $rootScope.AdminAll = true;
                            }
                            else {
                                $rootScope.AdminAll = false;
                            }
                        });

                        authService.GetUserRight("Add On Fee", "CreateNew").then(function (data, status) {
                            $rootScope.AddOnFeeCreate = data
                            if (($rootScope.ViewUsers) || ($rootScope.CreateRole) || ($rootScope.AssignRole) || ($rootScope.ViewTransactions) || ($rootScope.SetUpSubscription) || ($rootScope.AddOnFee) || ($rootScope.SetUpInstitution) || ($rootScope.SetUpInstitutionType) || ($rootScope.RegisterPartnerUser) || ($rootScope.AdminViewUploadedData)) {
                                $rootScope.AdminAll = true;
                            }
                            else {
                                $rootScope.AdminAll = false;
                            }
                        });

                        authService.GetUserRight("Add On Fee", "DeleteNew").then(function (data, status) {
                            $rootScope.AddOnFeeDelete = data
                            if (($rootScope.ViewUsers) || ($rootScope.CreateRole) || ($rootScope.AssignRole) || ($rootScope.ViewTransactions) || ($rootScope.SetUpSubscription) || ($rootScope.AddOnFee) || ($rootScope.SetUpInstitution) || ($rootScope.SetUpInstitutionType) || ($rootScope.RegisterPartnerUser) || ($rootScope.AdminViewUploadedData)) {
                                $rootScope.AdminAll = true;
                            }
                            else {
                                $rootScope.AdminAll = false;
                            }
                        });



                        authService.GetUserRight("Set Up Institution", "View").then(function (data, status) {
                            $rootScope.SetUpInstitution = data
                            if (($rootScope.ViewUsers) || ($rootScope.CreateRole) || ($rootScope.AssignRole) || ($rootScope.ViewTransactions) || ($rootScope.SetUpSubscription) || ($rootScope.AddOnFee) || ($rootScope.SetUpInstitution) || ($rootScope.SetUpInstitutionType) || ($rootScope.RegisterPartnerUser) || ($rootScope.AdminViewUploadedData)) {
                                $rootScope.AdminAll = true;
                            }
                            else {
                                $rootScope.AdminAll = false;
                            }
                        });

                        authService.GetUserRight("Set Up Institution", "CreateNew").then(function (data, status) {
                            $rootScope.SetUpInstitutionCreate = data
                            if (($rootScope.ViewUsers) || ($rootScope.CreateRole) || ($rootScope.AssignRole) || ($rootScope.ViewTransactions) || ($rootScope.SetUpSubscription) || ($rootScope.AddOnFee) || ($rootScope.SetUpInstitution) || ($rootScope.SetUpInstitutionType) || ($rootScope.RegisterPartnerUser) || ($rootScope.AdminViewUploadedData)) {
                                $rootScope.AdminAll = true;
                            }
                            else {
                                $rootScope.AdminAll = false;
                            }
                        });
                        authService.GetUserRight("Set Up Institution", "UpadateNew").then(function (data, status) {
                            $rootScope.SetUpInstitutionUpadate = data
                            if (($rootScope.ViewUsers) || ($rootScope.CreateRole) || ($rootScope.AssignRole) || ($rootScope.ViewTransactions) || ($rootScope.SetUpSubscription) || ($rootScope.AddOnFee) || ($rootScope.SetUpInstitution) || ($rootScope.SetUpInstitutionType) || ($rootScope.RegisterPartnerUser) || ($rootScope.AdminViewUploadedData)) {
                                $rootScope.AdminAll = true;
                            }
                            else {
                                $rootScope.AdminAll = false;
                            }
                        });

                        authService.GetUserRight("Set Up Institution", "DeleteNew").then(function (data, status) {
                            $rootScope.SetUpInstitutionDeleteNew = data
                            if (($rootScope.ViewUsers) || ($rootScope.CreateRole) || ($rootScope.AssignRole) || ($rootScope.ViewTransactions) || ($rootScope.SetUpSubscription) || ($rootScope.AddOnFee) || ($rootScope.SetUpInstitution) || ($rootScope.SetUpInstitutionType) || ($rootScope.RegisterPartnerUser) || ($rootScope.AdminViewUploadedData)) {
                                $rootScope.AdminAll = true;
                            }
                            else {
                                $rootScope.AdminAll = false;
                            }
                        });

                        authService.GetUserRight("Set Up Institution Type", "View").then(function (data, status) {
                            $rootScope.SetUpInstitutionType = data
                            if (($rootScope.ViewUsers) || ($rootScope.CreateRole) || ($rootScope.AssignRole) || ($rootScope.ViewTransactions) || ($rootScope.SetUpSubscription) || ($rootScope.AddOnFee) || ($rootScope.SetUpInstitution) || ($rootScope.SetUpInstitutionType) || ($rootScope.RegisterPartnerUser) || ($rootScope.AdminViewUploadedData)) {
                                $rootScope.AdminAll = true;
                            }
                            else {
                                $rootScope.AdminAll = false;
                            }
                        });

                        authService.GetUserRight("Set Up Institution Type", "CreateNew").then(function (data, status) {
                            $rootScope.SetUpInstitutionTypeCreate = data
                            if (($rootScope.ViewUsers) || ($rootScope.CreateRole) || ($rootScope.AssignRole) || ($rootScope.ViewTransactions) || ($rootScope.SetUpSubscription) || ($rootScope.AddOnFee) || ($rootScope.SetUpInstitution) || ($rootScope.SetUpInstitutionType) || ($rootScope.RegisterPartnerUser) || ($rootScope.AdminViewUploadedData)) {
                                $rootScope.AdminAll = true;
                            }
                            else {
                                $rootScope.AdminAll = false;
                            }
                        });

                        authService.GetUserRight("Set Up Institution Type", "UpadateNew").then(function (data, status) {
                            $rootScope.SetUpInstitutionTypeUpadate = data
                            if (($rootScope.ViewUsers) || ($rootScope.CreateRole) || ($rootScope.AssignRole) || ($rootScope.ViewTransactions) || ($rootScope.SetUpSubscription) || ($rootScope.AddOnFee) || ($rootScope.SetUpInstitution) || ($rootScope.SetUpInstitutionType) || ($rootScope.RegisterPartnerUser) || ($rootScope.AdminViewUploadedData)) {
                                $rootScope.AdminAll = true;
                            }
                            else {
                                $rootScope.AdminAll = false;
                            }
                        });

                        authService.GetUserRight("Set Up Institution Type", "DeleteNew").then(function (data, status) {
                            $rootScope.SetUpInstitutionTypeDelete = data
                            if (($rootScope.ViewUsers) || ($rootScope.CreateRole) || ($rootScope.AssignRole) || ($rootScope.ViewTransactions) || ($rootScope.SetUpSubscription) || ($rootScope.AddOnFee) || ($rootScope.SetUpInstitution) || ($rootScope.SetUpInstitutionType) || ($rootScope.RegisterPartnerUser) || ($rootScope.AdminViewUploadedData)) {
                                $rootScope.AdminAll = true;
                            }
                            else {
                                $rootScope.AdminAll = false;
                            }
                        });

                        authService.GetUserRight("Register Partner User", "View").then(function (data, status) {
                            $rootScope.RegisterPartnerUser = data
                            if (($rootScope.ViewUsers) || ($rootScope.CreateRole) || ($rootScope.AssignRole) || ($rootScope.ViewTransactions) || ($rootScope.SetUpSubscription) || ($rootScope.AddOnFee) || ($rootScope.SetUpInstitution) || ($rootScope.SetUpInstitutionType) || ($rootScope.RegisterPartnerUser) || ($rootScope.AdminViewUploadedData)) {
                                $rootScope.AdminAll = true;
                            }
                            else {
                                $rootScope.AdminAll = false;
                            }
                        });

                        authService.GetUserRight("Register Partner User", "CreateNew").then(function (data, status) {
                            $rootScope.RegisterPartnerUserCreate = data
                            if (($rootScope.ViewUsers) || ($rootScope.CreateRole) || ($rootScope.AssignRole) || ($rootScope.ViewTransactions) || ($rootScope.SetUpSubscription) || ($rootScope.AddOnFee) || ($rootScope.SetUpInstitution) || ($rootScope.SetUpInstitutionType) || ($rootScope.RegisterPartnerUser) || ($rootScope.AdminViewUploadedData)) {
                                $rootScope.AdminAll = true;
                            }
                            else {
                                $rootScope.AdminAll = false;
                            }
                        });

                        authService.GetUserRight("Admin View Uploaded Data", "View").then(function (data, status) {
                            $rootScope.AdminViewUploadedData = data
                            if (($rootScope.ViewUsers) || ($rootScope.CreateRole) || ($rootScope.AssignRole) || ($rootScope.ViewTransactions) || ($rootScope.SetUpSubscription) || ($rootScope.AddOnFee) || ($rootScope.SetUpInstitution) || ($rootScope.SetUpInstitutionType) || ($rootScope.RegisterPartnerUser) || ($rootScope.AdminViewUploadedData)) {
                                $rootScope.AdminAll = true;
                            }
                            else {
                                $rootScope.AdminAll = false;
                            }
                        });
                        authService.GetUserRight("View Partner Transactions", "View").then(function (data, status) {
                            $rootScope.ViewPartnerTransactions = data
                            if (($rootScope.ViewPartnerTransactions) || ($rootScope.PartnerUploadData) || ($rootScope.PartnerViewUploadedData) || ($rootScope.PartnerApproveUploadData) || ($rootScope.PartnerDeleteUploadedData)) {
                                $rootScope.PartnerSearch = true;
                            }
                            else {
                                $rootScope.PartnerSearch = false;
                            }
                        });

                        authService.GetUserRight("Partner Upload Data", "View").then(function (data, status) {
                            $rootScope.PartnerUploadData = data
                            if (($rootScope.ViewPartnerTransactions) || ($rootScope.PartnerUploadData) || ($rootScope.PartnerViewUploadedData) || ($rootScope.PartnerApproveUploadData) || ($rootScope.PartnerDeleteUploadedData)) {
                                $rootScope.PartnerSearch = true;
                            }
                            else {
                                $rootScope.PartnerSearch = false;
                            }
                        });

                        authService.GetUserRight("Partner Approve  Upload Data", "View").then(function (data, status) {
                            $rootScope.PartnerApproveUploadData = data
                            if (($rootScope.ViewPartnerTransactions) || ($rootScope.PartnerUploadData) || ($rootScope.PartnerViewUploadedData) || ($rootScope.PartnerApproveUploadData) || ($rootScope.PartnerDeleteUploadedData)) {
                                $rootScope.PartnerSearch = true;
                            }
                            else {
                                $rootScope.PartnerSearch = false;
                            }
                        });

                        authService.GetUserRight("Partner View Uploaded Data", "View").then(function (data, status) {
                            $rootScope.PartnerViewUploadedData = data
                            if (($rootScope.ViewPartnerTransactions) || ($rootScope.PartnerUploadData) || ($rootScope.PartnerViewUploadedData) || ($rootScope.PartnerApproveUploadData) || ($rootScope.PartnerDeleteUploadedData)) {
                                $rootScope.PartnerSearch = true;
                            }
                            else {
                                $rootScope.PartnerSearch = false;
                            }
                        });


                        authService.GetUserRight("Partner View Uploaded Data", "DeleteNew").then(function (data, status) {
                            $rootScope.PartnerDeleteUploadedData = data
                            if (($rootScope.ViewPartnerTransactions) || ($rootScope.PartnerUploadData) || ($rootScope.PartnerViewUploadedData) || ($rootScope.PartnerApproveUploadData) || ($rootScope.PartnerDeleteUploadedData)) {
                                $rootScope.PartnerSearch = true;
                            }
                            else {
                                $rootScope.PartnerSearch = false;
                            }
                        });


                    },
        function (response) {

        }

                   )





                }


                //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
                //    return response;
                //});

            };

            return factory2;
        }
    ]);


