using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using WebApplication4.Models;

namespace WebApplication4
{
    public partial class Formx : System.Web.UI.Page
    {
        protected string adminID = "0";
        public string amount = "";
     //   protected Applicant c_app = new Applicant();
        public string cld_split_amt = "0";
        public string appname = "";
        public string coy_name = "";
        public string currency = "";
        public string einao_split_amt = "0";
        public string hash = "";
     //   protected Hasher hash_value = new Hasher();
        protected HtmlHead Head1;
        public string inputString = "";
        public string name = "";
        public string pay_item_id = "0";
        public string pd_payment_page = "";
        public string product_id = "0";
        public string site_redirect_url = "";
        public string txn_ref = "";

        protected void Page_Load(object sender, EventArgs e)
        {
            //if (this.Session["c_app"] != null)
            //{
            //    this.c_app = (Applicant)this.Session["c_app"];
            //}

            //  this.appname = Request.QueryString["appname"];
            this.appname = "test";
          //  this.amount = Request.QueryString["amount"];
            this.amount = "258477";



          //  this.hash = Request.QueryString["hashString"];
            this.hash = "831A8E03D971EFF7220BA0C534A00AF71729C7182AEC6619D8D9C576D00F878EDD74099A8BE27F91A2A7113234F46E46CF86E403C3E9B41D68A54C615B9B977A";
           // this.txn_ref = Request.QueryString["refno"];
            this.txn_ref = "201608191629586";


          // this.einao_split_amt = Request.QueryString["einao_split_amt"];
            this.einao_split_amt = "104600";
          //  this.cld_split_amt = Request.QueryString["cld_split_amt"];
            this.cld_split_amt = "150000";

            this.product_id = ConfigurationManager.AppSettings["pd_product_id"];
            this.currency = ConfigurationManager.AppSettings["pd_currency"];
            this.site_redirect_url = ConfigurationManager.AppSettings["pd_site_redirect_url"];
            this.pay_item_id = ConfigurationManager.AppSettings["pd_pay_item_id"];
            this.pd_payment_page = ConfigurationManager.AppSettings["pd_payment_page"];
            //if (this.Session["Refno"] != null)
            //{
            //    this.txn_ref = this.Session["Refno"].ToString();
            //}
            //if (this.Session["total_amt"] != null)
            //{
            //    this.amount = this.Session["total_amt"].ToString();
            //}
            //if (this.Session["hashString"] != null)
            //{
            //    this.hash = this.Session["hashString"].ToString();
            //}
            //if (this.Session["einao_split_amt"] != null)
            //{
               
            //    this.einao_split_amt = this.Session["einao_split_amt"].ToString();
              
            //}
            //if (this.Session["cld_split_amt"] != null)
            //{
            //    this.cld_split_amt = this.Session["cld_split_amt"].ToString();
              
            //}
            //if (this.Session["name"] != null)
            //{
            //    this.name = this.Session["name"].ToString();
            //}
            //if (this.Session["coy_name"] != null)
            //{
            //    this.coy_name = this.Session["coy_name"].ToString();
            //}

        }
    }
}