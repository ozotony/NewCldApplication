<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Index2.aspx.cs" Inherits="WebApplication4.Index2" %>

<!DOCTYPE html>

<html  ng-app="formApp">
<head>
    <title></title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Cld Mobile</title>
    <meta name="description" content="Your description" />
    <meta name="keywords" content="Your,Keywords" />
    <meta name="author" content="ResponsiveWebInc" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Styles -->
    <!-- Bootstrap CSS -->

    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <!-- Font awesome CSS -->
    <link href="css/font-awesome.min.css" rel="stylesheet" />
    <!-- Magnific Popup -->
    <link href="css/magnific-popup.css" rel="stylesheet" />
    <!-- Owl carousel -->
    <link href="css/owl.carousel.css" rel="stylesheet" />

    <!-- CSS for this page -->
    <!-- Revolution Slider -->
    <link href="css/settings.css" rel="stylesheet" />

    <!-- Base style -->
    <link href="css/style.css" rel="stylesheet" />
    <!-- Skin CSS -->
    <link href="css/skin-orange.css" rel="stylesheet" id="color_theme" />
    <!--<link href="css/style.css" rel="stylesheet" type="text/css" />-->
   

    <link href="css/default.css" rel="stylesheet" />




    <link href="Content/font-awesome.min.css" rel="stylesheet" />
    <link href="skins/color.css" rel="stylesheet" />
    <link href="css/overwrite.css" rel="stylesheet" />


   <%-- <base href="/NewTrademark/" />--%>








    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="css/bootsnav.css" rel="stylesheet" />



    <link rel="stylesheet" href="//mgcrea.github.io/angular-strap/styles/libs.min.css" />
    <link rel="stylesheet" href="//mgcrea.github.io/angular-strap/styles/docs.min.css" />
    <link href="css/animate.css" rel="stylesheet" />
  
    <script src="Scripts/jquery-2.1.1.min.js"></script>
   


    <script src="js/bootstrap.min.js"></script>
    <script src="js/bootsnav.js"></script>

    <script src="Scripts/angular.min.js"></script>
    <script src="Scripts/angular-animate.min.js"></script>
    <script src="Scripts/angular-sanitize.min.js"></script>

    <script src="Scripts/angular-strap.min.js"></script>
    <script src="Scripts/angular-strap.tpl.min.js"></script>

    <script src="//mgcrea.github.io/angular-strap/docs/angular-strap.docs.tpl.js" data-semver="v2.3.8"></script>



    

    <script src="Scripts/angular-ui-router.min.js"></script>

    <script src="Scripts/App2.js"></script>


    <script src="Scripts/bootstrap.min.js"></script>
    <link href="Content/animate.css" rel="stylesheet" />
    <script src="Scripts/angular-local-storage.js"></script>
    
   

    <script src="Scripts/angular-messages.min.js"></script>
    <script src="Scripts/sweet-alert.min.js"></script>
    <link href="Content/sweet-alert.css" rel="stylesheet" />
    <script src="Scripts/loading-bar.js"></script>
    <link href="Content/loading-bar.css" rel="stylesheet" />
    <script src="Scripts/angular-facebook.min.js"></script>

    <script src="Scripts/smart-table.min.js"></script>
    <link href="Content/ng-modal.css" rel="stylesheet" />
    <script src="Scripts/ng-modal.min.js"></script>

    <script src="Scripts/angular-datepicker.min.js"></script>
    <link href="Content/angular-datepicker.min.css" rel="stylesheet" />
    
    <link href="Content/font-awesome.min.css" rel="stylesheet" />

    <script src="Scripts/alasql.min.js"></script>
    <script src="Scripts/ng-csv.min.js"></script>
    <script src="Scripts/xlsx.core.min.js"></script>
    <script src="Scripts/angular-sanitize.min.js"></script>
    <script src="Scripts/tableExport.js"></script>
    <script src="Scripts/sprintf.js"></script>
    <script src="Scripts/jspdf.js"></script>
    <script src="Scripts/jquery.base64.js"></script>

    <script src="Scripts/base64.js"></script>


  



    <script>

        $(document).ready(function () {

            //var docHeight = $(window).height();
            //var footerHeight = $('#footer').height();
            //var footerTop = $('#footer').position().top + footerHeight;

            //if (footerTop < docHeight) {
            //    $('#footer').css('margin-top', 10 + (docHeight - footerTop) + 'px');
            //}

            //$(window).on('resize load', function () {
            //    $('body').css({ "padding-top": $(".navbar").height() + "px" });
            //});

        });
    </script>




    <style type="text/css">
        .has-error .help-block, .has-error .control-label, .has-error .radio, .has-error .checkbox, .has-error .radio-inline, .has-error .checkbox-inline {
            color: #a94442;
        }

        .help-block {
            display: block;
            margin-top: 5px;
            margin-bottom: 10px;
            color: red;
        }

        span.ng-scope {
            color: red;
        }
        /*input.ng-invalid {
          border: 1px solid red;

        }
        input.ng-valid {
          border: 1px solid green;

        }


        :focus ~ .error {
            display:none;
        }*/
        form.ng-submitted .ng-invalid {
            border-color: red;
            border-width: 2px;
        }
    </style>

    <style>
        .btn-warning2 {
            color: white;
            background-color: #520B00;
            border-color: #eea236;
        }


        @@media print {

            .no-print, .no-print * {
                display: none !important;
            }
        }

        /*body {
            padding-top: 70px;
        }*/
    </style>

    <style>
                @@import url(http://fonts.googleapis.com/css?family=Bree+Serif);

                body, h1, h2, h3, h4, h5, h6 {
                    font-family: 'Bree Serif', serif;
                }

                /*.jumbotron {
            position: relative;
            background: #000 url("jumbotron-bg.png") center center;
            width: 100%;
            height: 100%;
            background-size: cover;
            overflow: hidden;
        }*/
body {
   
    padding-top: 5px;
}

    </style>

   






    <meta charset="utf-8" />
</head>
<body  class="hold-transition skin-blue sidebar-mini" ng-controller="formController">>

    <div class="container">
        <div class="row">
            <div class="col-sm-4">
               
            </div>
            <div class="col-sm-4">
                <img alt="Coat of Arms" src="images/LOGOCLD.jpg" width="458" height="76" />
              
            </div>
            <div class="col-sm-4 " >
               
            </div>

        </div>
    </div>
   
   
    <div>
        <table style="width:90%;" align="center">
    <tr>
        <td colspan="2">
            <table style="width:100%;border:1px dashed #999;border-radius:5px;">


                <tr>
                    <td colspan="2" align="center" style="background-color:#1C5E55; color:#ffffff;">
                        &nbsp;
                    </td>
                </tr>

                <tr>
                    <td colspan="2" align="center">
                        &nbsp;
                    </td>
                </tr>

                <tr>
                    <td colspan="2" align="center" style="background-color:#1C5E55; color:#ffffff;">
                        &nbsp;
                    </td>
                </tr>
                <tr align="center">
                    <td colspan="2">
                        <div class="notice_proceed">
                            YOUR TRANSACTION DETAILS HAVE BEEN CONFIRMED AND YOU ARE ABOUT TO BE REDIRECTED TO THE INTERSWITCH PAYMENT GATEWAY<br />
                            PLEASE VERIFY YOUR INTERNET CONNECTION IS UP AND RUNNING BEFORE PROCEEDING TO MAKE PAYMENT!!<br />
                            BEST REGARDS!!!<br /><br />
                            <img src="images/check.png" alt="Details Confirmed" />
                        </div>

                    </td>
                </tr>
                <tr align="center">
                    <td colspan="2">

                       <form id="form1" action="https://stageserv.interswitchng.com/test_paydirect/pay" method="post">
                            <input name="product_id" type="hidden" value="{{AllField.ff.product_id}}"/>
                            <input name="pay_item_id" type="hidden" value= "{{AllField.ff.pay_item_id}}" />
                            <input name="amount" type="hidden" value="{{AllField.ff.amount}}" />
                            <input name="currency" type="hidden" value="{{ AllField.ff.currency}}" />
                            <input name="site_redirect_url" type="hidden" value="{{AllField.ff.site_redirect_url}}" />
                            <input name="txn_ref" type="hidden" value="{{AllField.ee.transID}}" />
                            <input name="cust_name" type="hidden" value="{{AllField.bb.applicantname}}" />
                            <input name="cust_name_desc" type="hidden" value="{{AllField.bb.applicantname}}" />
                            <input name="cust_id" type="hidden" value="{{AllField.bb.applicantname}}"" />
                            <input name="cust_id_desc" type="hidden" value="{{AllField.bb.applicantname}}"" />
                            <input name="pay_item_name" type="hidden" value="{{AllField.bb.applicantname}}"" />
                            <input name="hash" type="hidden" value="{{AllField.ff.hash}}" />
                            <input name="payment_params" type="hidden" value="payment_split" />
                            <input name="xml_data" type="hidden" value='<payment_item_detail>
                                <item_details detail_ref="{{AllField.ee.transID}}" institution="Einao Solutions" sub_location="Abuja" location="Lagos">
                                    <item_detail item_id="1" item_name="Einao Solutions" item_amt="{{tech_amt}}" bank_id="120" acct_num="1771364037" />
                                    <item_detail item_id="2" item_name="Federal Ministry Of Commerce" item_amt="{{init_amt}}" bank_id="120" acct_num="1770393883" />
                                </item_details>
                            </payment_item_detail>'/>
                            <br />
                           

                           
                            <input id="btnPayment" type="button" value="Make Payment" ng-click="submitForm()" class="btn btn-info" />

                        </form>

                     
                    </td>
                </tr>
                <tr>
                    <td colspan="2" align="center" style="background-color:#1C5E55; color:#ffffff;">

                         <input id="xname" name="xname" type="hidden" runat="server" />
                    </td>
                </tr>
                <tr>
                    <td colspan="2" align="center">
                        POWERED BY<br />
                        <img src="images/payxlogo.jpg" alt="XPay" width="90px" height="40px" />
                        <img alt="interswitch" src="images/isw_logo_small.gif" /><br />
                        Plot 4. Oluwakayode Jacobs Street Ikate,Lekki Phase 1<br />
                        <a href="http://www.einaosolutions.com">www.einaosolutions.com</a><br />
                        Support E-mail(s): <a href="mailto:paymentsupport@einaosolutions.com">paymentsupport@einaosolutions.com</a><br />
                        Customer Contact Support Line(s): +2349038979681
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>



      
    </div>
</body>
</html>