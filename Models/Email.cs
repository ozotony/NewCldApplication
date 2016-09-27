using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Net.Mail;
using System.Text;

namespace WebApplication4.Models
{
    public class Email
    {
        private string hostname = "smtp.gmail.com";
        private MailMessage mail = new MailMessage();
        private string passwd = "Zues.4102.Hector";
        private int port = 587;
        private string username = "paymentsupport@einaosolutions.com";

        public string sendMail(string userdisplayname, string to, string from, string subject, string msg, string path)
        {
            string str = "";
            SmtpClient client = new SmtpClient
            {
                Credentials = new NetworkCredential("einaosolution2016@gmail.com", "Einao2015"),
                Port = this.port,
                Host = this.hostname,
                EnableSsl = true
            };
            this.mail = new MailMessage();
            string[] strArray = to.Split(new char[] { ',' });
            try
            {
                 this.mail.From = new MailAddress(from, userdisplayname, Encoding.UTF8);

              
                for (byte i = 0; i < strArray.Length; i = (byte)(i + 1))
                {
                    this.mail.To.Add(strArray[i]);
                }
                this.mail.Priority = MailPriority.High;
                this.mail.Subject = subject;
                this.mail.Body = msg;
                if (path != "")
                {
                    LinkedResource item = new LinkedResource(path)
                    {
                        ContentId = "Logo"
                    };
                    AlternateView view = AlternateView.CreateAlternateViewFromString("<html><body><table border=2><tr width=100%><td><img src=cid:Logo alt=companyname /></td><td>FROM CLD</td></tr></table><hr/></body></html>" + msg, null, "text/html");
                    view.LinkedResources.Add(item);
                    this.mail.AlternateViews.Add(view);
                    this.mail.IsBodyHtml = true;
                    this.mail.DeliveryNotificationOptions = DeliveryNotificationOptions.OnFailure;
                    this.mail.ReplyTo = new MailAddress(from);
                    client.Send(this.mail);
                    return "sent";
                }
                if (path == "")
                {
                    this.mail.IsBodyHtml = true;
                    this.mail.DeliveryNotificationOptions = DeliveryNotificationOptions.OnFailure;
                    this.mail.ReplyTo = new MailAddress(from);
                    client.Send(this.mail);
                    str = "sent";
                }
            }
            catch (Exception exception)
            {
                if (exception.ToString() == "The operation has timed out")
                {
                    client.Send(this.mail);
                    str = "bad";
                }
            }
            return str;
        }
    }
}