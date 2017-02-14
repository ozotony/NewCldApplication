using iTextSharp.text;
using iTextSharp.text.html.simpleparser;
using iTextSharp.text.pdf;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using WebApplication4.Models;

namespace WebApplication4
{
    public partial class DownloadPdf3 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            
                var start_date = Convert.ToString(Request.Form["start_date"]);
                var end_date = Convert.ToString(Request.Form["end_date"]);
                var studentnumber = Convert.ToString(Request.Form["studentnumber"]);
                var institution = Convert.ToString(Request.Form["institution"]);
                var subscription = Convert.ToString(Request.Form["subscription"]);

                var paymentstatus = Convert.ToString(Request.Form["paymentstatus"]);



          //  GetTransaction3b(start_date, end_date, studentnumber, institution, subscription, paymentstatus);




        }

       
    }
}