using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using WebApplication4.Models;

namespace WebApplication4
{
    public partial class ReturnUrl : System.Web.UI.Page
    {
      public   XObjs.InterSwitchResponse isr = new XObjs.InterSwitchResponse();
        public string   pp3 ="";
        public StringBuilder xstring = new StringBuilder();
        public string  product_id = "";
        public string mackey = "";
        public string check_trans_page = "";
       
       public Registration reg = new Registration();
        public Hasher hash_value = new Hasher();

        public Models.Transactions tx = new Models.Transactions();
        public string txnref = "";
       
        public string  xpay_status = "";
        public string  payRef = "";
        public string  retRef = "";
        protected List<XObjs.PaymentReciept> lt_pr = new List<XObjs.PaymentReciept>();
        public string  cardNum = "";
        public string  apprAmt = "";
        public string  resp = "";
        public string  desc = "";
        public Retriever ret = new Retriever();
        public XObjs.Twallet c_twall = new XObjs.Twallet();
        public XObjs.Applicant  c_app = new XObjs.Applicant();
        public XObjs.InterSwitchPostFields isw_fields = new XObjs.InterSwitchPostFields();
        public XObjs.PaymentReciept ppc = new XObjs.PaymentReciept();
        public XObjs.Registration Registration = new XObjs.Registration();

        public string  total_amt ="";


     //  public    List<XObjs.PaymentReciept> lt_pr = new List<XObjs.PaymentReciept>();

     public    List<XObjs.Fee_details> lt_fdets = null;
      public   List<XObjs.Hwallet> lt_hwall = null;
      public string    vid = "";
        protected void Page_Load(object sender, EventArgs e)
        {
           
            // var session = HttpContext.Current.Session;
            // Shopping_card2 pp3 = (Shopping_card2)session["Shopping_card2"];
       //   pp3 = Request.Form["txnRef"];

       //  pp3=   Request.QueryString["txnRef"];
            pp3 = Session["TransactionidID"].ToString(); ;
            txnref = pp3;
        product_id = ConfigurationManager.AppSettings["pd_product_id"];
            mackey = ConfigurationManager.AppSettings["pd_mackey"];
            check_trans_page = ConfigurationManager.AppSettings["pd_get_trans_json_page"];
           
            c_twall = ret.getTwalletByTransID(txnref);
            c_app = ret.getApplicantByID(c_twall.applicantID);
           
            isw_fields = ret.getISWtransactionByTransactionID(txnref.Trim());
           
            if (c_twall.xid != null)
            {

                lt_fdets = ret.getFee_detailsByTwalletID(c_twall.xid);

                lt_hwall = ret.getHwalletByTransID(txnref);
                int num = 1;
                int num2 = 0;
               // XObjs.Registration c_reg2 = pp3.dd;
                vid = c_twall.xmemberID;
                Registration = ret.getRegistrationBySubagentRegistrationID(vid);

                
                foreach (XObjs.Hwallet hwallet in lt_hwall)
                {
                    XObjs.PaymentReciept item = new XObjs.PaymentReciept();
                    XObjs.Fee_list _list = new XObjs.Fee_list();
                    XObjs.Fee_details _details = new XObjs.Fee_details();


                    _details = ret.getFee_detailsByID(hwallet.fee_detailsID);
                    _list = ret.getFee_listByID(_details.fee_listID);
                    item.sn = num.ToString();
                    item.item_code = _list.item_code;

                    if (item.item_code == "AA1")
                    {


                    }
                    item.item_desc = _list.xdesc;
                    item.init_amt = string.Format("{0:n}", Convert.ToInt32(_details.init_amt));
                    item.tech_amt = string.Format("{0:n}", Convert.ToInt32(_details.tech_amt));
                    item.qty = string.Format("{0:n}", 1);
                    int num3 = Convert.ToInt32(_details.init_amt) + Convert.ToInt32(_details.tech_amt);
                    item.transID = hwallet.transID + "-" + hwallet.fee_detailsID + "-" + hwallet.xid;
                    num2 += num3;

                     total_amt = string.Format("{0:n}", num2 + Math.Round(Convert.ToDouble(isw_fields.isw_conv_fee), 2));
                    lt_pr.Add(item);
                    num++;
                }
            }

            xstring.AppendLine("Transaction reference= " + txnref + " Payment reference= " + payRef + " Switching Bank Reference number= " + retRef + " card No= " + cardNum + " apprAmt= " + apprAmt);
            var inputString = product_id.Trim() + txnref.Trim() + mackey.Trim();
            string headerValue = hash_value.GetGetSHA512String(inputString);



            isr = tx.myRedirect(check_trans_page.Trim() + "?productid=" + product_id.Trim() + "&transactionreference=" + txnref.Trim() + "&amount=" + isw_fields.amount.Trim(), "Hash", headerValue.Trim());
           

            if (((isr.ResponseCode != "") && (isr.ResponseCode != null)) && (isr.ResponseCode == "00"))
            {
                xstring.AppendLine("Sent Amount: " + isw_fields.amount + "\r\n Product ID: " + product_id + "\r\n Hash: " + headerValue + "\r\n Amount: " + isr.Amount + "\r\n CardNumber: " + isr.CardNumber + "\r\n MerchantReference: " + isr.MerchantReference + "\r\n PaymentReference: " + isr.PaymentReference + "\r\n RetrievalReferenceNumber: " + isr.RetrievalReferenceNumber + "\r\n LeadBankCbnCode: " + isr.LeadBankCbnCode + "\r\n TransactionDate: " + isr.TransactionDate + "\r\n ResponseCode: " + isr.ResponseCode + "\r\n ResponseDescription: " + isr.ResponseDescription + "\r\n Json Page: " + check_trans_page + "\r\n Form Response: " + resp + "\r\n Form Description: " + desc);

                var succ = reg.updateInterSwitchRecords(txnref, payRef, retRef, isr.ResponseCode, isr.TransactionDate, isr.MerchantReference, isr.ResponseDescription, isr.PaymentReference);



                if (isr.ResponseCode == "00" && (isr.PaymentReference != null || isr.PaymentReference != ""))
                {
                    xpay_status = "1";
                }
                else
                {
                    xpay_status = "3";
                }
                reg.updateTwalletPaymentStatus(txnref.Trim(), xpay_status.Trim());
                if (succ != 0)
                {

                    Retriever kp = new Retriever();

                    Registration dd = new Registration();

                    dd.updateRegistrationSysID2(vid, "Paid");


                    XObjs.Registration ds = kp.getRegistrationByID(vid);

                }

               
                Retriever kp2 = new Retriever();
                XObjs.Registration ds2 = kp2.getRegistrationByID(vid);
                kp2.sendAlertHtml(ds2, total_amt, isr, isw_fields, c_twall, c_app, lt_pr);
            }
            else if (((isr.ResponseCode != "") && (isr.ResponseCode != null)) && (isr.ResponseCode != "00"))
            {

                var succ = reg.updateInterSwitchRecords(txnref, payRef, retRef, isr.ResponseCode, isr.TransactionDate, isr.MerchantReference, isr.ResponseDescription, isr.PaymentReference);
                if (isr.ResponseCode == "00" && (isr.PaymentReference != null || isr.PaymentReference != ""))
                {
                    xpay_status = "1";
                }
                else
                {
                    xpay_status = "3";
                }
                reg.updateTwalletPaymentStatus(txnref.Trim(), xpay_status.Trim());
                if (succ != 0)
                {
                    //  sendUnsuccAlertHtml();
                }
                Retriever kp2 = new Retriever();
                XObjs.Registration ds2 = kp2.getRegistrationByID(vid);
                kp2.sendUnsuccAlertHtml(ds2, total_amt, isr, isw_fields, c_twall, c_app, lt_pr);
            }
            else if ((isr.ResponseCode == "") || (isr.ResponseCode == null))
            {
                string str2 = "None";
                string str3 = "None";
                xstring.AppendLine("Sent Amount: " + isw_fields.amount + "\r\n Product ID: " + product_id + "\r\n Hash: " + headerValue + "\r\n Amount: None\r\n CardNumber: None\r\n MerchantReference: None\r\n PaymentReference: None\r\n RetrievalReferenceNumber: None\r\n LeadBankCbnCode: None\r\n TransactionDate: None\r\n ResponseCode: " + str2 + "\r\n ResponseDescription: " + str3 + "\r\n Json Page: " + check_trans_page + "\r\n Form Response: " + resp + "\r\n Form Description: " + desc);

                xpay_status = "3";
                reg.updateTwalletPaymentStatus(txnref, xpay_status);
                if (desc == "")
                {
                    isr.ResponseDescription = "Transaction Pending";
                }
                else
                {
                    isr.ResponseDescription = desc;
                }
                if (resp == "")
                {
                    isr.ResponseCode = "XXXX";
                }
                else
                {
                    isr.ResponseCode = resp;
                }
                //  sendUnsuccAlertHtml();

                Retriever kp2 = new Retriever();
                XObjs.Registration ds2 = kp2.getRegistrationByID(vid);
                kp2.sendUnsuccAlertHtml(ds2, total_amt, isr, isw_fields, c_twall, c_app, lt_pr);
            }

        }
    }
}