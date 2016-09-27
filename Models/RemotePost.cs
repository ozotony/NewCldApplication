using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Web;
using System.Security.Cryptography.X509Certificates;
using System.Net.Security;

namespace WebApplication4.Models
{
    public class RemotePost
    {
        private NameValueCollection Extra_headers = new NameValueCollection();
        private NameValueCollection Inputs = new NameValueCollection();
        protected byte[] responseArray = null;

        public bool AcceptAllCertifications(object sender, X509Certificate certification, X509Chain chain, SslPolicyErrors sslPolicyErrors)
        {
            return true;
        }

        public void Add(string name, string value)
        {
            this.Inputs.Add(name, value);
        }

        public void AddHeader(string name, string value)
        {
            this.Extra_headers.Add(name, value);
        }

        public string GetFormResponse(string uriString, string send_meth)
        {
            string str = "";
            WebRequest request = WebRequest.Create(uriString);
            request.Method = send_meth;
            if (this.Extra_headers.Count > 0)
            {
                request.Headers.Add(this.Extra_headers);
            }
            using (WebResponse response = request.GetResponse())
            {
                using (Stream stream = response.GetResponseStream())
                {
                    str = new StreamReader(stream).ReadToEnd();
                }
            }
            return str;
        }

        public string mySender(string url, SortedList<string, string> xheaders, string meth)
        {
            string str = "0";
            try
            {
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
                for (int i = 0; i < xheaders.Count; i++)
                {
                    request.Headers.Add(xheaders.Keys[i], xheaders.Values[i]);
                }
                request.Method = meth;
                ServicePointManager.ServerCertificateValidationCallback = new RemoteCertificateValidationCallback(this.AcceptAllCertifications);
                HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                StreamReader reader = new StreamReader(response.GetResponseStream(), Encoding.Default);
                str = reader.ReadToEnd();
                reader.Close();
            }
            catch (Exception exception)
            {
                string str2 = exception.ToString();
                return str;
            }
            return str;
        }

        public int Post(string uriString)
        {
            int num = 0;
            WebClient client = new WebClient();
            if (this.Extra_headers.Count > 0)
            {
                client.Headers.Add(this.Extra_headers);
            }
            this.responseArray = client.UploadValues(uriString, "POST", this.Inputs);
            if (this.responseArray != null)
            {
                num = 1;
            }
            return num;
        }

        public string SendForm(string uriString, string send_meth)
        {
            string str = "";
            WebClient client = new WebClient();
            if (this.Extra_headers.Count > 0)
            {
                client.Headers.Add(this.Extra_headers);
            }
            this.responseArray = client.UploadValues(uriString, send_meth, this.Inputs);
            if (this.responseArray != null)
            {
                str = Encoding.UTF8.GetString(this.responseArray);
            }
            return str;
        }
    }
}