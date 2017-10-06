<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ReturnUrl.aspx.cs" Inherits="WebApplication4.ReturnUrl" %>

<!DOCTYPE html>

<html ng-app="formApp">
<head>
    <title>IpPro</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    
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

    <script src="Scripts/angular-spinner.min.js"></script>

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


   <link href="css/bootstrap.min.css" rel="stylesheet" />



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
<body  class="hold-transition skin-blue sidebar-mini" ng-controller="formController" style="background-color:#3D3D3D;">

  
   
   
    <div class="container" style="background-color :#06FBB5 ;color :black;">
         <% if (isr.ResponseCode == "00")
           { %>

        <div class="col-md-12">

            <span  style="font-size:20px;" ><strong>PAYMENT COMPLETED SUCCESSFULLY</strong><br /> </span>

              An e-mail has been sent to: <%= c_app.xemail%><br />
                Transaction Reference:&nbsp;<%=txnref%><br />
                Payment Reference:&nbsp;<%=isr.PaymentReference%><br /><br />
                Please check your "Payment Status" or "History Log" to view more details!!

        </div>
         <% } %>
          <% if ((isr.ResponseCode != "00"))
             { %>

         <div class="col-md-12" >

            <span  style="font-size:20px;" ><strong>PAYMENT NOT COMPLETED SUCCESSFULLY</strong><br /> </span>

              An e-mail has been sent to : <%=Registration.Email%><br />
                Reason:&nbsp;<%=isr.ResponseDescription%><br />
                Transaction Reference:&nbsp;<%=txnref%><br />
                Payment Reference:&nbsp;<%=isr.PaymentReference%><br /><br />
                Please check your "Payment Status" or "History Log" to view more details!!

        </div>
         <% } %>
     
       </div>          
</body>
</html>