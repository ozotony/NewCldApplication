using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;

namespace WebApplication4.Models
{
    public class Messenger
    {
        public string send_sms(string message, string sender, string sendto)
        {
            string str = "aidigbe@mynovasys.com";
            string str2 = "Doc2ore";
            string str3 = "";
            string requestUriString = "http://smsdam.com/http/?action=bulksms&message=" + message + "&sender=" + sender + "&mobile=" + sendto + "&username=" + str + "&password=" + str2;
            try
            {
                WebResponse response = WebRequest.Create(requestUriString).GetResponse();
                StreamReader reader = new StreamReader(response.GetResponseStream());
                str3 = reader.ReadToEnd().Trim();
                reader.Close();
                response.Close();
            }
            catch (WebException exception)
            {
                str3 = exception.ToString();
                return "No net";
            }
            return str3.Replace("1201|", "");
        }
    }
}