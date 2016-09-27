using iTextSharp.text;
using iTextSharp.text.html.simpleparser;
using iTextSharp.text.pdf;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using WebApplication4.Models;

namespace WebApplication4
{
    public partial class DownloadPdf2 : System.Web.UI.Page
    {
        public void Exportpdf2()
        {

            var _db = new ApplicationDbContext();

        _db.Configuration.ProxyCreationEnabled = false;


            Response.ContentType = "application/pdf";

            Response.AddHeader("content-disposition",

             "attachment;filename=GridViewExport.pdf");

            Response.Cache.SetCacheability(HttpCacheability.NoCache);


            StringWriter sw = new StringWriter();

            HtmlTextWriter hw = new HtmlTextWriter(sw);





            StringReader sr = new StringReader(sw.ToString());

            Document pdfDoc = new Document(PageSize.A4, 10f, 10f, 0f, 0f);
            BaseFont bfTimes = BaseFont.CreateFont(BaseFont.TIMES_ROMAN, BaseFont.CP1252, false);
            BaseFont bfTimes2 = BaseFont.CreateFont(BaseFont.TIMES_ROMAN, BaseFont.CP1252, false);
            iTextSharp.text.Font times = new iTextSharp.text.Font(bfTimes, 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK);
            iTextSharp.text.Font times2 = new iTextSharp.text.Font(bfTimes, 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK);
            iTextSharp.text.Font times3 = new iTextSharp.text.Font(bfTimes, 12, iTextSharp.text.Font.BOLD, BaseColor.RED);
            iTextSharp.text.Font times4 = new iTextSharp.text.Font(bfTimes2, 13, iTextSharp.text.Font.UNDERLINE, BaseColor.DARK_GRAY);




            HTMLWorker htmlparser = new HTMLWorker(pdfDoc);

            PdfWriter.GetInstance(pdfDoc, Response.OutputStream);

            pdfDoc.Open();



            Paragraph jp = new Paragraph("TESTING", times3);
            jp.Alignment = Element.ALIGN_CENTER;
            pdfDoc.Add(jp);

            pdfDoc.Close();

            Response.Write(pdfDoc);

            Response.End();



        }
        protected void Page_Load(object sender, EventArgs e)
        {
            Exportpdf2();


        }
    }
}