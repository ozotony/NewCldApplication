<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ReturnUrl.aspx.cs" Inherits="WebApplication4.ReturnUrl" %>

<!DOCTYPE html>

<html ng-app="formApp">
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
<body  class="hold-transition skin-blue sidebar-mini" ng-controller="formController">

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
        <div class="table-responsive"> 
       <table style="width:100%;" align="center" class="table">
     <tr align="center">
                <td colspan="2">
                    
               </td>
            </tr>
  
     <tr>
        <td align="center" style="background-color:#1C5E55; color:#ffffff;" colspan="2">
            PAYMENT CONFIRMATION SECTION
        </td>
     </tr>
        <% if (isr.ResponseCode == "00")
           { %>
        <tr align="center">
            <td  style="font-size:20px;" colspan="2"><strong>PAYMENT COMPLETED SUCCESSFULLY</strong><br />
               <div class="payment_success">
                 <div class="x_succ_img">
                An e-mail has been sent to: <%= c_app.xemail%><br />
                Transaction Reference:&nbsp;<%=txnref%><br />
                Payment Reference:&nbsp;<%=isr.PaymentReference%><br /><br />
                Please check your "Payment Status" or "History Log" to view more details!!
                </div>
                </div>
            </td>
        </tr>

        <tr id="invoice">
        <td colspan="2">
             <div class="table-responsive"> 
        <table  style="font-size:16px;text-align:center;font-weight:normal;width:100%;  border:1px solid #000000;" class="table">
       
        
       
         <tr style="background-color:#1C5E55; color:#ffffff; text-align:center;">
            <td colspan="4">
                PAYMENT RECIEPT FOR TRANSACTION :&nbsp;"<%=c_twall.ref_no%>" 
                </td>
        </tr>
        <tr>
            <td align="center" style="width:50%;" colspan="2">
               <strong> TRANSACTION ID:</strong> <%=txnref%></td>
            <td align="center" style="width:50%;" colspan="2">
                <strong>DATE:</strong>  <%= c_twall.xreg_date%></td>
        </tr>
        
          <tr style="background-color:#1C5E55; color:#ffffff; text-align:center;font-weight:bold;">
            <td align="center" colspan="4">
               &nbsp;
                </td>
        </tr>
  <tr style=" text-align:center;font-weight:bold;">
            <td align="center" colspan="4">
               &nbsp;
                PAYMENT REFERENCE:&nbsp;"<%=isr.PaymentReference %>"
                </td>
        </tr>
        <tr style="background-color:#1C5E55; color:#ffffff; text-align:center;font-weight:bold;">
            <td align="center" colspan="4">
               &nbsp;
                </td>
        </tr>
        <tr>
            <td align="center" colspan="2" style="background-color:#666; color:#ffffff;font-weight:bold;">
                ---
                APPLICANT INFORMATION ---</td>
            <td align="center" colspan="2" style="background-color:#666; color:#ffffff;font-weight:bold;">
                ---
                AGENT INFORMATION ---</td>
        </tr>
        
        <tr>
            <td align="left" style="width:7%;">
                 NAME:
                 </td>
            <td align="left" style="width:43%;">
                  <% =c_app.xname%></td>
            <td align="left" style="width:7%;">
                 NAME:  </td>
            <td align="left" style="width:43%;">
                 <% = Registration.Surname%></td>
        </tr>
        
        <tr style="background-color:#E3EAEB;">
            <td align="left">
                ADDRESS:</td>
            <td align="left">
                <% =c_app.address%></td>
            <td align="left">
                CODE:</td>
            <td align="left">
                <%= Registration.Sys_ID%></td>
        </tr>
        <tr>
            <td align="left">
                 E-MAIL:   </td>
            <td align="left">
                 <%= c_app.xemail%></td>
            <td align="left">
                 E-MAIL:</td>
            <td align="left">
                <%= Registration.Email%></td>
        </tr>
        <tr style="background-color:#E3EAEB;">
            <td align="left">
               MOBILE: </td>
            <td align="left">
                 <%= c_app.xmobile%></td>
            <td align="left">
               MOBILE: </td>
            <td align="left">
                <%= Registration.PhoneNumber%></td>
        </tr>

        <tr>
            <td align="center" colspan="4"  
                style="background-color:#666; color:#ffffff;font-weight:bold;">
                <strong>--- PAYMENT DETAILS ---</strong></td>
        </tr>
       
        <tr>
            <td align="left" colspan="4" style="font-size:12px;">
           <%--     <table style="width:100%;" id="mitems" class="tiger-stripe" >
                    <tr style="background-color:#1C5E55; color:#ffffff;">

                        <td >
                            <strong>S/N</strong></td>
                        <td >
                            <strong>TRANSACTION ID</strong></td>
                        <td>
                            <strong>ITEM CODE</strong></td>
                        <td> <strong>ITEM DESCRIPTION</strong></td>
                        <td> <strong>QTY</strong></td>
                        <td style="text-align:center;"><strong>APPLICATION FEE(NGN)</strong></td>
                         <td style="text-align:center;"><strong>TECH. FEE(NGN)</strong></td>
                          <td style="text-align:center;"><strong>TOTAL (NGN)</strong></td>
                    </tr>
                    <% 
                        foreach (XObjs.PaymentReciept pr in lt_pr)
                       { %>
                    <tr>
                        <td>
                            <%=pr.sn%></td>
                        <td>
                            <%=pr.transID%></td>
                        <td>
                            <%=pr.item_code%></td>
                        <td>
                             <%=pr.item_desc%></td>
                        <td > <%=pr.qty%></td>
                         <td style="text-align:right;"> <%=pr.init_amt%></td>
                          <td style="text-align:right;"> <%=pr.tech_amt%></td>
                           <td style="text-align:right;"> <%=pr.tot_amount%></td>
                    </tr>
                     <%  } %>
                   
                     <tr>
                        <td colspan="7" style="text-align:right;font-weight:bold;">
                            PayX Convenience Fee:&nbsp;</td>

                        <td align="right">
                            &nbsp;<%=Math.Round(Convert.ToDouble(isw_fields.isw_conv_fee),2)  %></td>
                    </tr>
                </table>--%>
            </td>
        </tr>
         <tr style="background-color:#1C5E55; color:#ffffff; text-align:center;">
            <td colspan="4">
               
            </td>
        </tr>
       <tr >
            <td colspan="4" >
                &nbsp;</td>
        </tr>
       
       <tr style="font-size:16px;text-decoration:underline; color:#1C5E55; font-weight:bolder; text-align:right;">
            <td colspan="4" >
               TOTAL AMOUNT:&nbsp;NGN&nbsp;<%=total_amt%></td>
        </tr>
       
       <tr style="background-color:#1C5E55; color:#ffffff; text-align:center;">
            <td colspan="4">
               
            </td>
        </tr>
       
      <tr>
            <td align="center" colspan="4">
                       POWERED BY<br/>
                        <img alt="Pay X" src="images/payxlogo.jpg"   width="90px" height="40px"/>
            <br />    
                Plot 4. Oluwakayode Jacobs Street Ikate,Lekki Phase 1<br />
                <a href="http://www.einaosolutions.com" style="color:#0000ff;font-weight:normal;">www.einaosolutions.com</a><br />
                Support E-mail(s): <a href="mailto:paymentsupport@einaosolutions.com" style="color:#0000ff; font-weight:normal;">paymentsupport@einaosolutions.com</a><br />
                Customer Contact Support Line(s): +2349038979681   
            </td>
        </tr>
        </table>
                 </div>
        </td>
        </tr>

         <tr align="center">
        <td colspan="2">
         <%--   <input type="button" name="Printform" id="Printform" value="Print" onclick="printXreturnAssessment('invoice');return false" class="button" />--%>


        </td>
        <</tr>
         <% } %>
          <% if ((isr.ResponseCode != "00")&&(isr.ResponseCode != "XXXX"))
             { %>
          <tr align="center">
            <td  style="font-size:20px;" colspan="2"><strong>PAYMENT NOT COMPLETED SUCCESSFULLY</strong><br />                
                <div class="payment_failure">
                 <div class="x_fail_img">                
                An e-mail has been sent to : <%=Registration.Email%><br />
                Reason:&nbsp;<%=isr.ResponseDescription%><br />
                Transaction Reference:&nbsp;<%=txnref%><br />
                Payment Reference:&nbsp;<%=isr.PaymentReference%><br /><br />
                Please check your "Payment Status" or "History Log" to view more details!!
                 </div>
                </div>
            </td>
        </tr>
         <% } %>
          <% if ((isr.ResponseCode != "00")&&(isr.ResponseCode == "XXXX"))
             { %>
          <tr align="center">
            <td  style="font-size:20px;" colspan="2"><strong>PAYMENT PENDING</strong><br />                
                <div class="payment_failure">
                 <div class="x_fail_img"> 
                Reason:&nbsp; <%=isr.ResponseDescription%><br />
                Please check your "Payment Status" or "History Log" to view more details!!
                 </div>
                </div>
            </td>
        </tr>
         <% } %>
        <tr>
            <td align="center" colspan="2">
                Click on the  <strong>&quot;x&quot;</strong> Symbol near the  address bar to leave the   <strong>Gateway</strong></td>
        </tr>
        <tr>
            <td align="center" style="background-color:#1C5E55; color:#ffffff;" colspan="2">            
                
                </td>
        </tr>

        <tr align="center">
            <td colspan="2">            
                
            </td>
        </tr>
        <tr>
            <td align="center" style="background-color:#1C5E55; color:#ffffff;" colspan="2">
            &nbsp;
               </td>
        </tr>
           
          </table>
            </div>



      
    </div>
</body>
</html>