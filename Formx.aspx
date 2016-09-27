<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Formx.aspx.cs" Inherits="WebApplication4.Formx" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
     <form id="form1" action="<%=pd_payment_page%>" method="post">
    <input name="product_id" type="hidden" value="<%=product_id %>" />
    <input name="pay_item_id" type="hidden" value="<%=pay_item_id %>" />
    <input name="amount" type="hidden" value="<%=amount %>" />
    <input name="currency" type="hidden" value="<%=currency %>" />
    <input name="site_redirect_url" type="hidden" value="<%=site_redirect_url %>" />
    <input name="txn_ref" type="hidden" value="<%=txn_ref %>" />
    <input name="cust_name" type="hidden" value="<%=appname %>" />
    <input name="cust_name_desc" type="hidden" value="<%=appname %>" />
    <input name="cust_id" type="hidden" value="<%=appname %>" />
    <input name="cust_id_desc" type="hidden" value="<%=appname %>" />
    <input name="pay_item_name" type="hidden" value="<%=appname %>" />
    <input name="hash" type="hidden" value="<%=hash %>" />
    <input name="payment_params" type="hidden" value="payment_split" />
    <input name="xml_data" type="hidden" value='<payment_item_detail>
    <item_details detail_ref="<%=txn_ref %>" institution="Einao Solutions" sub_location="Abuja" location="Lagos"> 
    <item_detail item_id="1" item_name="Einao Solutions" item_amt="<%=einao_split_amt %>" bank_id="120" acct_num="1771364037" /> 
    <item_detail item_id="2" item_name="Federal Ministry Of Commerce" item_amt="<%=cld_split_amt %>" bank_id="120" acct_num="1770393883" />
    </item_details>    
    </payment_item_detail>'/>
    <br />
   <%-- <input id="btnDashboard" type="button" value="Dashboard" class="button"  />
    
    <input id="btnPayment" type="submit" value="Make Payment" class="button" />--%>
    
    </form>
</body>
</html>
