using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class XObjs
    {
        public class Applicant
        {
            public string xid { get; set; }
            public string xname { get; set; }
            public string address { get; set; }
            public string xemail { get; set; }
            public string xmobile { get; set; }
        }
        public class Bc_AccountDetails
        {
            public string AccountID { get; set; }
            public string AccountName { get; set; }
            public string AccountNo { get; set; }
            public string SplitAmount { get; set; }
        }

        public class Bc_CustomFieldDetails
        {
            public string CustomFieldLabel { get; set; }
            public string CustomFieldValue { get; set; }
        }
        public class Bc_Items
        {
            public string ItemName { get; set; }
            public string ItemAmount { get; set; }
        }
        public class Bc_Merchant
        {
            public string DevID { get; set; }
            public string MerchantID { get; set; }
            public string MerchantCode { get; set; }
        }
        public class Bc_ItemDetails
        {
            public string ItemDescription { get; set; }
            public string InstallmentID { get; set; }
            public string Split { get; set; }
            public string ItemCode { get; set; }
            public string ExpiryDate { get; set; }
            public List<Bc_Items> lt_Item { get; set; }
        }
        public class Bc_TransactionDetails
        {
            public string TransactionID { get; set; }
            public string MAC { get; set; }
            public string TotalAmount { get; set; }
            public string CustomerID { get; set; }
            public string CustomerSurname { get; set; }
            public string CustomerFirstname { get; set; }
            public string CustomerOthernames { get; set; }
            public string CustomerEmail { get; set; }
            public string CustomerGSM { get; set; }
            public string UpdateURL { get; set; }
            public string UpdateURLThirdParty { get; set; }
        }
        public class Address
        {
            public string ID { get; set; }
            public string city { get; set; }
            public string countryID { get; set; }
            public string email1 { get; set; }
            public string email2 { get; set; }
            public string lgaID { get; set; }
            public string log_staff { get; set; }
            public string reg_date { get; set; }
            public string stateID { get; set; }
            public string street { get; set; }
            public string telephone1 { get; set; }
            public string telephone2 { get; set; }
            public string visible { get; set; }
            public string xsync { get; set; }
            public string zip { get; set; }
        }
        public class Fee_details
        {
            public string xid { get; set; }
            public string fee_listID { get; set; }
            public string twalletID { get; set; }
            public string xqty { get; set; }
            public string xused { get; set; }
            public string tot_amt { get; set; }
            public string init_amt { get; set; }
            public string tech_amt { get; set; }
            public string xlogstaff { get; set; }
            public string xreg_date { get; set; }
            public string xvisible { get; set; }
            public string xsync { get; set; }

            public string desc { get; set; }
        }
        public class Fee_list
        {
            public string xid { get; set; }
            public string item { get; set; }
            public string item_code { get; set; }
            public string xdesc { get; set; }
            public string init_amt { get; set; }
            public string tech_amt { get; set; }
            public string xcategory { get; set; }
            public string xlogstaff { get; set; }
            public string xreg_date { get; set; }
            public string xvisible { get; set; }
            public string xsync { get; set; }

            public string qt_code { get; set; }
        }
        public class Fee_listx
        {
            public string xid { get; set; }
            public string item { get; set; }
            public string item_code { get; set; }
            public string xdesc { get; set; }
            public string init_amt { get; set; }
            public string tech_amt { get; set; }
            public string switch_party { get; set; }
            public string t_party { get; set; }
            public string xcategory { get; set; }
            public string xlogstaff { get; set; }
            public string xreg_date { get; set; }
            public string xvisible { get; set; }
            public string xsync { get; set; }
        }
        public class Hwallet
        {
            public string xid { get; set; }
            public string transID { get; set; }
            public string fee_detailsID { get; set; }
            public string product_title { get; set; }
            public string used_status { get; set; }
            public string xreg_date { get; set; }
            public string used_date { get; set; }
        }


        public class Office_view
        {
            public string applicant_name { get; set; }

            public string log_staff { get; set; }

            public string oai_no { get; set; }

            public string product_title { get; set; }

            public string reg_dt { get; set; }

            public string reg_no { get; set; }

            public string rtm { get; set; }

            public string scmt { get; set; }

            public string tm_type { get; set; }

            public string xclass { get; set; }

            public string xid { get; set; }
            public string id { get; set; }

            public string xstat { get; set; }

            public string batches { get; set; }

            public string applicantID { get; set; }
            public string Office { get; set; }

            public string Sn { get; set; }

            public string Agent_Code { get; set; }

            public string Agent_Name { get; set; }

            public string TransactionId { get; set; }

            public string Xaddress { get; set; }

            public string Xemail { get; set; }

            public string Xmobile { get; set; }

            public string logo_pic { get; set; }

            public string auth_doc { get; set; }

            public string sup_doc1 { get; set; }

            public string sup_doc2 { get; set; }





        }
        public class InterSwitchPostFields
        {
            public string xid { get; set; }
            public string product_id { get; set; }
            public string amount { get; set; }
            public string isw_conv_fee { get; set; }
            public string currency { get; set; }
            public string site_redirect_url { get; set; }
            public string txn_ref { get; set; }
            public string hash { get; set; }
            public string mackey { get; set; }
            public string pay_item_id { get; set; }
            public string site_name { get; set; }
            public string cust_id { get; set; }
            public string cust_id_desc { get; set; }
            public string cust_name { get; set; }
            public string resp_desc { get; set; }
            public string pay_item_name { get; set; }
            public string local_date_time { get; set; }
            public string TransactionDate { get; set; }
            public string MerchantReference { get; set; }
            public string trans_status { get; set; }
            public string pay_ref { get; set; }
            public string ret_ref { get; set; }
            public string xreg_date { get; set; }
            public string xvisible { get; set; }
            public string xsync { get; set; }
        }
        public class InterSwitchResponse
        {
            public string Amount { get; set; }
            public string CardNumber { get; set; }
            public string MerchantReference { get; set; }
            public string PaymentReference { get; set; }
            public string RetrievalReferenceNumber { get; set; }
            public string LeadBankCbnCode { get; set; }
            public string[] SplitAccounts { get; set; }
            public string TransactionDate { get; set; }
            public string ResponseCode { get; set; }
            public string ResponseDescription { get; set; }
        }
        public class Pwallet
        {
            public string xid { get; set; }
            public string xmembertype { get; set; }
            public string xmemberID { get; set; }
            public string xemail { get; set; }
            public string xmobile { get; set; }
            public string xpass { get; set; }
            public string reg_date { get; set; }
        }
        public class PaymentReciept
        {
            public string init_amt { get; set; }

            public string item_code { get; set; }

            public string item_desc { get; set; }

            public string qty { get; set; }

            public string sn { get; set; }

            public string tech_amt { get; set; }

            public string tot_amount { get; set; }

            public string transID { get; set; }

            public string amount { get; set; }
        }
       
        public class Registration
        {
            public string xid { get; set; }
            public string AccrediationType { get; set; }
            public string Sys_ID { get; set; }
            public string Firstname { get; set; }
            public string Surname { get; set; }
            public string Email { get; set; }
            public string xpassword { get; set; }
            public string DateOfBrith { get; set; }
            public string IncorporatedDate { get; set; }
            public string Nationality { get; set; }
            public string PhoneNumber { get; set; }
            public string CompanyName { get; set; }
            public string CompanyAddress { get; set; }
            public string ContactPerson { get; set; }
            public string ContactPersonPhone { get; set; }
            public string CompanyWebsite { get; set; }
            public string Certificate { get; set; }
            public string Introduction { get; set; }
            public string Principal { get; set; }
            public string logo { get; set; }
            public string xreg_date { get; set; }
            public string xstatus { get; set; }
            public string xvisible { get; set; }
            public string xsync { get; set; }

            public string imageurl { get; set; }
        }

        public class ReportItem
        {
            public string sn { get; set; }
            public string applicantID { get; set; }
            public string xid { get; set; }
            public string hID { get; set; }
            public string fdID { get; set; }
            public string transID { get; set; }
            public string newtransID { get; set; }
            public string item_code { get; set; }
            public string item_desc { get; set; }
            public string payment_date { get; set; }
            public string payment_mode { get; set; }
            public string payment_status { get; set; }
            public string tech_amt { get; set; }
            public string init_amt { get; set; }
            public string total_amt { get; set; }
            public string qty { get; set; }
            public string used_status { get; set; }
            public string product_title { get; set; }
            public string data_status { get; set; }
            public string office_status { get; set; }
        }

        public class Scard
        {
            public string xid { get; set; }
            public string xnum { get; set; }
            public string xvalid { get; set; }
            public string xlogstaff { get; set; }
            public string xreg_date { get; set; }
            public string xvisible { get; set; }
            public string xsync { get; set; }
        }
        public class Shopping_card
        {
            public string xid { get; set; }
            public string item_code { get; set; }
            public string qty { get; set; }
            public double amt { get; set; }
            public double total_amt { get; set; }
        }
        public class Subagent
        {
            public string xid { get; set; }
            public string RegistrationID { get; set; }
            public string Firstname { get; set; }
            public string Surname { get; set; }
            public string Email { get; set; }
            public string xpassword { get; set; }
            public string Telephone { get; set; }
            public string DateOfBrith { get; set; }
            public string AssignID { get; set; }
            public string Sys_ID { get; set; }
            public string Address { get; set; }
            public string AgentPassport { get; set; }
            public string xreg_date { get; set; }
            public string xstatus { get; set; }
            public string xvisible { get; set; }
            public string xsync { get; set; }
        }

        public class Twallet
        {
            public string xid { get; set; }
            public string transID { get; set; }
            public string xmemberID { get; set; }
            public string xmembertype { get; set; }
            public string xpay_status { get; set; }
            public string xgt { get; set; }
            public string ref_no { get; set; }
            public string xbankerID { get; set; }
            public string applicantID { get; set; }
            public string xreg_date { get; set; }
            public string xvisible { get; set; }
            public string xsync { get; set; }
        }
        public class Trademark_item
        {
            public string hwalletID { get; set; }
            public string fee_detailsID { get; set; }
            public string item_code { get; set; }
            public string transID { get; set; }
            public string vid { get; set; }
            public string amt { get; set; }
            public string aid { get; set; }
            public string pc { get; set; }
            public string xgt { get; set; }
            public string product_title { get; set; }
            public string agent { get; set; }
            public string agentname { get; set; }
            public string agentemail { get; set; }
            public string agentpnumber { get; set; }
            public string applicant_name { get; set; }
            public string applicant_addy { get; set; }
            public string applicant_email { get; set; }
            public string applicant_no { get; set; }
            public string xmemberID { get; set; }
            public string xurl { get; set; }
        }

        public class XDisplayItem
        {
            public string xid { get; set; }
            public string item_code { get; set; }
            public string xname { get; set; }
            public string transID { get; set; }
            public string product_title { get; set; }
            public string new_transID { get; set; }
            public string init_amt { get; set; }
            public string xmemberID { get; set; }
            public string xdesc { get; set; }
            public string tech_amt { get; set; }
            public string fee_detailsID { get; set; }
            public string lbl_cur_office { get; set; }
            public string lbl_cur_status { get; set; }
        }

        public class XAgent
        {
            public string xid { get; set; }
            public string xname { get; set; }
            public string cname { get; set; }
            public string xpassword { get; set; }
            public string nationality { get; set; }
            public string addressID { get; set; }
            public string sys_ID { get; set; }
            public string xreg_date { get; set; }
            public string xvisible { get; set; }
            public string xsync { get; set; }
        }
        public class UpdateHwallet
        {
            public string xid { get; set; }
            public string validationID { get; set; }
            public string reg_date { get; set; }
            public string product_title { get; set; }
        }
        public class XBanker
        {
            public string xid { get; set; }
            public string xname { get; set; }
            public string bankname { get; set; }
            public string xpassword { get; set; }
            public string nationality { get; set; }
            public string addressID { get; set; }
            public string xposition { get; set; }
            public string sys_ID { get; set; }
            public string xreg_date { get; set; }
            public string xvisible { get; set; }
            public string xsync { get; set; }
        }
        public class XMember
        {
            public string xid { get; set; }
            public string xname { get; set; }
            public string cname { get; set; }
            public string xpassword { get; set; }
            public string nationality { get; set; }
            public string addressID { get; set; }
            public string sys_ID { get; set; }
            public string xreg_date { get; set; }
            public string xvisible { get; set; }
            public string xsync { get; set; }
        }
        public class XPartner
        {
            public string xid { get; set; }
            public string xname { get; set; }
            public string cname { get; set; }
            public string xpassword { get; set; }
            public string nationality { get; set; }
            public string addressID { get; set; }
            public string sys_ID { get; set; }
            public string xreg_date { get; set; }
            public string xvisible { get; set; }
            public string xsync { get; set; }
        }
        public class PRatio
        {
            public string xid { get; set; }
            public string xpartnerID { get; set; }
            public string p_type { get; set; }
            public string xratio { get; set; }
            public string r_type { get; set; }
            public string xreg_date { get; set; }
            public string xvisible { get; set; }
            public string xsync { get; set; }
        }

        public class PartnerGrid
        {
            public string sn { get; set; }
            public string xid { get; set; }
            public string transID { get; set; }
            public string xmemberID { get; set; }
            public string xmembertype { get; set; }
            public string xgt { get; set; }
            public string ref_no { get; set; }
            public string xbankerID { get; set; }
            public string fee_listID { get; set; }
            public string init_amt { get; set; }
            public string tech_amt { get; set; }
            public string tot_amt { get; set; }
            public string xqty { get; set; }
            public string xreg_date { get; set; }
        }
    }
}