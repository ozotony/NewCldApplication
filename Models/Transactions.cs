using System;

using System.Configuration;
using System.IO;
using System.Net;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Web.Script.Serialization;

namespace WebApplication4.Models
{
    public class Transactions
    {
        protected string check_trans_page = "";
        protected Hasher hash_value = new Hasher();
        protected string inputString = "";
        protected XObjs.InterSwitchResponse isr = new XObjs.InterSwitchResponse();
        public JavaScriptSerializer js = new JavaScriptSerializer();
        public string json = "";
        protected string payment_page = "";
        public string resp_str = "";

        public bool AcceptAllCertifications(object sender, X509Certificate certification, X509Chain chain, SslPolicyErrors sslPolicyErrors)
        {
            return true;
        }

        public string DoPayment(XObjs.InterSwitchPostFields ispf)
        {
            this.payment_page = ConfigurationManager.AppSettings["pd_payment_page"];
            RemotePost post = new RemotePost();
            post.Add("product_id", ispf.product_id);
            post.Add("pay_item_id", ispf.pay_item_id);
            post.Add("amount", ispf.amount);
            post.Add("currency", ispf.currency);
            post.Add("site_redirect_url", ispf.site_redirect_url);
            post.Add("txn_ref", ispf.txn_ref);
            post.Add("hash", ispf.hash);
            return post.SendForm(this.payment_page, "POST").ToString();
        }

        public string DoPaymentX()
        {
            this.payment_page = ConfigurationManager.AppSettings["pd_payment_page"];
            RemotePost post = new RemotePost();
            post.Add("product_id", "4584");
            post.Add("pay_item_id", "101");
            post.Add("amount", "3470000");
            post.Add("currency", "566");
            post.Add("site_redirect_url", "http://xpayng.com/xis/pd/xreturn/index.aspx");
            post.Add("txnref", "D7B9123C8277");
            post.Add("hash", "95A664FC0B0FE78C0A887B8CB88B6D3E3FC0196BB985B4DAAA07781CF8D8F74FF035E86730EB9DF655692E9F39FD598AAA15F88EF5180B250339FEA6EFAC4E84");
            return post.SendForm("https://stageserv.interswitchng.com/test_paydirect/pay", "POST").ToString();
        }

        public XObjs.InterSwitchResponse getJsonTrasactionsData(string product_id, string transactionreference, string amount, string get_trans_hash)
        {
            this.check_trans_page = ConfigurationManager.AppSettings["pd_get_trans_json_page"];
            RemotePost post = new RemotePost();
            post.Add("productid", product_id);
            post.Add("transactionreference", transactionreference);
            post.Add("amount", amount);
            post.AddHeader("Hash", get_trans_hash);
            string formResponse = post.GetFormResponse(this.check_trans_page, "GET");
            this.isr = this.js.Deserialize<XObjs.InterSwitchResponse>(formResponse);
            return this.isr;
        }

        public XObjs.InterSwitchResponse myOldRedirect(string url, string headerName, string headerValue)
        {
            try
            {
                WebRequest request = WebRequest.Create(url);
                request.Headers.Add(headerName, headerValue);
                request.Method = "GET";
                StreamReader reader = new StreamReader(request.GetResponse().GetResponseStream(), Encoding.Default);
                string input = reader.ReadToEnd();
                reader.Close();
                this.isr = this.js.Deserialize<XObjs.InterSwitchResponse>(input);
            }
            catch (Exception exception)
            {
                string str2 = exception.ToString();
            }
            return this.isr;
        }

        public XObjs.InterSwitchResponse myRedirect(string url, string headerName, string headerValue)
        {
            try
            {
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
                request.Headers.Add(headerName, headerValue);
                request.Method = "GET";
                ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
                ServicePointManager.ServerCertificateValidationCallback = new RemoteCertificateValidationCallback(this.AcceptAllCertifications);
                HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                StreamReader reader = new StreamReader(response.GetResponseStream(), Encoding.Default);
                string input = reader.ReadToEnd();
                reader.Close();
                this.isr = this.js.Deserialize<XObjs.InterSwitchResponse>(input);
            }
            catch (Exception exception)
            {
                string str2 = exception.ToString();
                return this.isr;
            }
            return this.isr;
        }
    }
}