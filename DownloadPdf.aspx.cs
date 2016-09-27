using iTextSharp.text;
using iTextSharp.text.html.simpleparser;
using iTextSharp.text.pdf;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using WebApplication4.Models;

namespace WebApplication4
{
    public partial class DownloadPdf : System.Web.UI.Page
    {

        public void Exportpdf (string student_no , string service, string year, string Institution)
        {

            var _db = new ApplicationDbContext();

            _db.Configuration.ProxyCreationEnabled = false;


            var vv = (from c in _db.Students

                      join o in _db.Results on new { a = c.Matric_Number } equals new { a = o.Matric_Number }


                      //  where ((c.Payment_Status == "Paid"))

                      //  where ((c.Transaction_Date.Value.Date == start_date2.Date) && (c.Transaction_Date.Value.Date <= end_date2.Date))
                      where (c.Year == o.Year && c.Year == year && c.Service_Code == service && c.Institution_Code == Institution && c.Matric_Number == student_no)



                      select c).Include(o => o.Results).Include(o => o.Institution).Distinct().ToList();


            Response.ContentType = "application/pdf";

            Response.AddHeader("content-disposition",

             "attachment;filename=Partnerold.pdf");

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
           
                //   PdfWriter.GetInstance(pdfDoc, Response.OutputStream);

                pdfDoc.Open();

                PdfPTable table = new PdfPTable(8);
                table.SpacingBefore = 20f;
                table.SetWidthPercentage(new float[8] { 60F, 60F, 60F, 60F, 60F, 60F, 60F, 60F }, pdfDoc.PageSize);
                table.DefaultCell.Border = 0;

                PdfPTable table2 = new PdfPTable(2);
                table2.SpacingBefore = 20f;
                table2.SetWidthPercentage(new float[2] { 80F, 80F }, pdfDoc.PageSize);
                table2.DefaultCell.Border = 0;

            string imagepath = Server.MapPath("img");

            iTextSharp.text.Image gif = iTextSharp.text.Image.GetInstance(imagepath + "/Logo2.png");
            gif.ScaleToFit(600f, 100f);
            pdfDoc.Add(gif);

            Paragraph jp = new Paragraph("RESULT", times3);
                jp.SpacingBefore = 20f;


            foreach (var student in vv)
            {
                PdfPCell PdfCell = new PdfPCell(new Phrase(new Chunk("STUDENT ID", times2)));
                PdfCell.Border = 0;
                table.AddCell(PdfCell);

                PdfPCell PdfCell2 = new PdfPCell(new Phrase(new Chunk(student.Matric_Number, times)));
                PdfCell2.Border = 0;
                table.AddCell(PdfCell2);


                PdfPCell PdfCella = new PdfPCell(new Phrase(new Chunk("STUDENT NAME", times2)));
                PdfCella.Border = 0;
                table.AddCell(PdfCella);

                PdfPCell PdfCell2B = new PdfPCell(new Phrase(new Chunk(student.Student_name, times)));
                PdfCell2B.Border = 0;
                table.AddCell(PdfCell2B);

                PdfPCell PdfCell3 = new PdfPCell(new Phrase(new Chunk("INSTITUTION", times2)));
                PdfCell3.Border = 0;
                table.AddCell(PdfCell3);



                PdfPCell PdfCell4 = new PdfPCell(new Phrase(new Chunk(student.Institution.Institution_Name, times)));
                PdfCell4.Border = 0;
                table.AddCell(PdfCell4);


                PdfPCell PdfCell5 = new PdfPCell(new Phrase(new Chunk("YEAR", times2)));
                PdfCell5.Border = 0;
                table.AddCell(PdfCell5);


                PdfPCell PdfCell6 = new PdfPCell(new Phrase(new Chunk(student.Year, times)));
                PdfCell6.Border = 0;
                table.AddCell(PdfCell6);



                jp.Alignment = Element.ALIGN_CENTER;
                int rows = 0;

                PdfPCell PdfCell7b = new PdfPCell(new Phrase(new Chunk("COURSE", times2)));
                PdfCell7b.Border = 0;
                table2.AddCell(PdfCell7b);

                PdfPCell PdfCell7bb = new PdfPCell(new Phrase(new Chunk("GRADE", times2)));
                PdfCell7bb.Border = 0;
                table2.AddCell(PdfCell7bb);

                foreach (var student2 in student.Results)
                {
                    rows = rows + 1;
                    PdfPCell PdfCell7 = new PdfPCell(new Phrase(new Chunk(student2.Course_Code, times)));
                    PdfCell.Border = 0;

                    if (rows % 2 == 0)
                    {
                        PdfCell7.BackgroundColor = new BaseColor(192, 192, 192);
                    }

                    PdfCell7.Border = 0;
                    table2.AddCell(PdfCell7);

                    PdfPCell PdfCell8 = new PdfPCell(new Phrase(new Chunk(student2.Grade, times)));
                    if (rows % 2 == 0)
                    {
                        PdfCell8.BackgroundColor = new BaseColor(192, 192, 192);
                    }

                    PdfCell8.Border = 0;
                    table2.AddCell(PdfCell8);


                }

            }


              pdfDoc.Add(table);
            pdfDoc.Add(jp);
               pdfDoc.Add(table2);
                pdfDoc.Close();

                Response.Write(pdfDoc);

                Response.End();



           
         //   string json = "{\"name\":\"Joe\"}";
           
        }

        public void Exportpdfb(string student_no, string service, string year, string Institution)
        {

            var _db = new ApplicationDbContext();

            _db.Configuration.ProxyCreationEnabled = false;


            var vv = (from c in _db.Students

                      join o in _db.Results on new { a = c.Matric_Number } equals new { a = o.Matric_Number }


                      //  where ((c.Payment_Status == "Paid"))

                      //  where ((c.Transaction_Date.Value.Date == start_date2.Date) && (c.Transaction_Date.Value.Date <= end_date2.Date))
                      where (c.Year == o.Year &&  c.Service_Code == service && c.Institution_Code == Institution && c.Matric_Number == student_no)



                      select c).Include(o => o.Results).Include(o => o.Institution).Distinct().ToList();


            Response.ContentType = "application/pdf";

            Response.AddHeader("content-disposition",

             "attachment;filename=Partnerold.pdf");

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

            //   PdfWriter.GetInstance(pdfDoc, Response.OutputStream);

            pdfDoc.Open();

            PdfPTable table = new PdfPTable(8);
            table.SpacingBefore = 20f;
            table.SetWidthPercentage(new float[8] { 60F, 60F, 60F, 60F, 60F, 60F, 60F, 60F }, pdfDoc.PageSize);
            table.DefaultCell.Border = 0;

            PdfPTable table2 = new PdfPTable(2);
            table2.SpacingBefore = 20f;
            table2.SetWidthPercentage(new float[2] { 80F, 80F }, pdfDoc.PageSize);
            table2.DefaultCell.Border = 0;

            string imagepath = Server.MapPath("img");

            iTextSharp.text.Image gif = iTextSharp.text.Image.GetInstance(imagepath + "/Logo2.png");
            gif.ScaleToFit(600f, 100f);
            pdfDoc.Add(gif);

            Paragraph jp = new Paragraph("RESULT", times3);
            jp.SpacingBefore = 20f;


            foreach (var student in vv)
            {
                PdfPCell PdfCell = new PdfPCell(new Phrase(new Chunk("STUDENT ID", times2)));
                PdfCell.Border = 0;
                table.AddCell(PdfCell);

                PdfPCell PdfCell2 = new PdfPCell(new Phrase(new Chunk(student.Matric_Number, times)));
                PdfCell2.Border = 0;
                table.AddCell(PdfCell2);


                PdfPCell PdfCella = new PdfPCell(new Phrase(new Chunk("STUDENT NAME", times2)));
                PdfCella.Border = 0;
                table.AddCell(PdfCella);

                PdfPCell PdfCell2B = new PdfPCell(new Phrase(new Chunk(student.Student_name, times)));
                PdfCell2B.Border = 0;
                table.AddCell(PdfCell2B);

                PdfPCell PdfCell3 = new PdfPCell(new Phrase(new Chunk("INSTITUTION", times2)));
                PdfCell3.Border = 0;
                table.AddCell(PdfCell3);



                PdfPCell PdfCell4 = new PdfPCell(new Phrase(new Chunk(student.Institution.Institution_Name, times)));
                PdfCell4.Border = 0;
                table.AddCell(PdfCell4);


                PdfPCell PdfCell5 = new PdfPCell(new Phrase(new Chunk("YEAR", times2)));
                PdfCell5.Border = 0;
                table.AddCell(PdfCell5);


                PdfPCell PdfCell6 = new PdfPCell(new Phrase(new Chunk(student.Year, times)));
                PdfCell6.Border = 0;
                table.AddCell(PdfCell6);



                jp.Alignment = Element.ALIGN_CENTER;
                int rows = 0;

                PdfPCell PdfCell7b = new PdfPCell(new Phrase(new Chunk("COURSE", times2)));
                PdfCell7b.Border = 0;
                table2.AddCell(PdfCell7b);

                PdfPCell PdfCell7bb = new PdfPCell(new Phrase(new Chunk("GRADE", times2)));
                PdfCell7bb.Border = 0;
                table2.AddCell(PdfCell7bb);

                foreach (var student2 in student.Results)
                {
                    rows = rows + 1;
                    PdfPCell PdfCell7 = new PdfPCell(new Phrase(new Chunk(student2.Course_Code, times)));
                    PdfCell.Border = 0;

                    if (rows % 2 == 0)
                    {
                        PdfCell7.BackgroundColor = new BaseColor(192, 192, 192);
                    }

                    PdfCell7.Border = 0;
                    table2.AddCell(PdfCell7);

                    PdfPCell PdfCell8 = new PdfPCell(new Phrase(new Chunk(student2.Grade, times)));
                    if (rows % 2 == 0)
                    {
                        PdfCell8.BackgroundColor = new BaseColor(192, 192, 192);
                    }

                    PdfCell8.Border = 0;
                    table2.AddCell(PdfCell8);


                }

            }


            pdfDoc.Add(table);
            pdfDoc.Add(jp);
            pdfDoc.Add(table2);
            pdfDoc.Close();

            Response.Write(pdfDoc);

            Response.End();




            //   string json = "{\"name\":\"Joe\"}";

        }

        public void Exportpdf2(string student_no, string service, string year, string Institution)
        {

            var _db = new ApplicationDbContext();

            _db.Configuration.ProxyCreationEnabled = false;


            var vv = (from c in _db.Students

                      join o in _db.Results on new { a = c.Matric_Number } equals new { a = o.Matric_Number }


                      //  where ((c.Payment_Status == "Paid"))

                      //  where ((c.Transaction_Date.Value.Date == start_date2.Date) && (c.Transaction_Date.Value.Date <= end_date2.Date))
                      where (c.Year == o.Year  && c.Service_Code == service && c.Institution_Code == Institution && c.Matric_Number == student_no)



                      select c).Include(o => o.Results).Include(o => o.Institution).Distinct().ToList();


            Response.ContentType = "application/pdf";

            Response.AddHeader("content-disposition",

             "attachment;filename=partner.pdf");

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

            PdfPTable table = new PdfPTable(6);
            table.SpacingBefore = 20f;
            table.SetWidthPercentage(new float[6] { 60F, 60F, 60F, 60F, 60F, 60F }, pdfDoc.PageSize);
            table.DefaultCell.Border = 0;

            PdfPTable table2 = new PdfPTable(2);
            table2.SpacingBefore = 20f;
            table2.SetWidthPercentage(new float[2] { 80F, 80F }, pdfDoc.PageSize);
            table2.DefaultCell.Border = 0;

            string imagepath = Server.MapPath("img");

            iTextSharp.text.Image gif = iTextSharp.text.Image.GetInstance(imagepath + "/Logo2.png");
            gif.ScaleToFit(600f, 100f);
            pdfDoc.Add(gif);

            Paragraph jp = new Paragraph("RESULT", times3);
            jp.SpacingBefore = 20f;


            foreach (var student in vv)
            {
                PdfPCell PdfCell = new PdfPCell(new Phrase(new Chunk("STUDENT ID", times2)));
                PdfCell.Border = 0;
                table.AddCell(PdfCell);

                PdfPCell PdfCell2 = new PdfPCell(new Phrase(new Chunk(student.Matric_Number, times)));
                PdfCell2.Border = 0;
                table.AddCell(PdfCell2);

                PdfPCell PdfCella = new PdfPCell(new Phrase(new Chunk("STUDENT NAME", times2)));
                PdfCella.Border = 0;
                table.AddCell(PdfCella);

                PdfPCell PdfCell2B = new PdfPCell(new Phrase(new Chunk(student.Student_name, times)));
                PdfCell2B.Border = 0;
                table.AddCell(PdfCell2B);

                PdfPCell PdfCell3 = new PdfPCell(new Phrase(new Chunk("INSTITUTION", times2)));
                PdfCell3.Border = 0;
                table.AddCell(PdfCell3);



                PdfPCell PdfCell4 = new PdfPCell(new Phrase(new Chunk(student.Institution.Institution_Name, times)));
                PdfCell4.Border = 0;
                table.AddCell(PdfCell4);


                PdfPCell PdfCell5 = new PdfPCell(new Phrase(new Chunk("YEAR", times2)));
                PdfCell5.Border = 0;
                table.AddCell(PdfCell5);


                PdfPCell PdfCell6 = new PdfPCell(new Phrase(new Chunk(student.Year, times)));
                PdfCell6.Border = 0;
                table.AddCell(PdfCell6);



                jp.Alignment = Element.ALIGN_CENTER;
                int rows = 0;

                PdfPCell PdfCell7b = new PdfPCell(new Phrase(new Chunk("COURSE", times2)));
                PdfCell7b.Border = 0;
                table2.AddCell(PdfCell7b);

                PdfPCell PdfCell7bb = new PdfPCell(new Phrase(new Chunk("GRADE", times2)));
                PdfCell7bb.Border = 0;
                table2.AddCell(PdfCell7bb);

                foreach (var student2 in student.Results)
                {
                    rows = rows + 1;
                    PdfPCell PdfCell7 = new PdfPCell(new Phrase(new Chunk(student2.Course_Code, times)));
                    PdfCell7.Border = 0;

                    if (rows % 2 == 0)
                    {
                        PdfCell7.BackgroundColor = new BaseColor(192, 192, 192);
                    }

                    PdfCell7.Border = 0;
                    table2.AddCell(PdfCell7);

                    PdfPCell PdfCell8 = new PdfPCell(new Phrase(new Chunk(student2.Grade, times)));
                    if (rows % 2 == 0)
                    {
                        PdfCell8.BackgroundColor = new BaseColor(192, 192, 192);
                    }

                    PdfCell8.Border = 0;
                    table2.AddCell(PdfCell8);


                }

            }
            pdfDoc.Add(table);
            pdfDoc.Add(jp);
            pdfDoc.Add(table2);
            pdfDoc.Close();

            Response.Write(pdfDoc);

            Response.End();
        }

        public void Exportpdf3(string student_no, string service, string year, string Institution,string email)
        {

            var _db = new ApplicationDbContext();

            _db.Configuration.ProxyCreationEnabled = false;


            var vv = (from c in _db.Students

                      join o in _db.Results on new { a = c.Matric_Number } equals new { a = o.Matric_Number }


                      //  where ((c.Payment_Status == "Paid"))

                      //  where ((c.Transaction_Date.Value.Date == start_date2.Date) && (c.Transaction_Date.Value.Date <= end_date2.Date))
                      where (c.Year == o.Year && c.Year == year && c.Service_Code == service && c.Institution_Code == Institution && c.Matric_Number == student_no)



                      select c).Include(o => o.Results).Include(o => o.Institution).Distinct().ToList();


            Response.ContentType = "application/pdf";

            Response.AddHeader("content-disposition",

             "attachment;filename=Partnermail.pdf");

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

            //  PdfWriter.GetInstance(pdfDoc, Response.OutputStream);
            using (MemoryStream memoryStream = new MemoryStream())
            {

                PdfWriter writer = PdfWriter.GetInstance(pdfDoc, memoryStream);
                pdfDoc.Open();

                PdfPTable table = new PdfPTable(6);
                table.SpacingBefore = 20f;
                table.SetWidthPercentage(new float[6] { 60F, 60F, 60F, 60F, 60F, 60F }, pdfDoc.PageSize);
                table.DefaultCell.Border = 0;

                PdfPTable table2 = new PdfPTable(2);
                table2.SpacingBefore = 20f;
                table2.SetWidthPercentage(new float[2] { 80F, 80F }, pdfDoc.PageSize);
                table2.DefaultCell.Border = 0;

                string imagepath = Server.MapPath("img");

                iTextSharp.text.Image gif = iTextSharp.text.Image.GetInstance(imagepath + "/Logo2.png");
                gif.ScaleToFit(600f, 100f);
                pdfDoc.Add(gif);


                Paragraph jp = new Paragraph("RESULT", times3);
                jp.SpacingBefore = 20f;


               


                foreach (var student in vv)
                {
                    PdfPCell PdfCell = new PdfPCell(new Phrase(new Chunk("STUDENT ID", times2)));
                    PdfCell.Border = 0;
                    table.AddCell(PdfCell);

                    PdfPCell PdfCell2 = new PdfPCell(new Phrase(new Chunk(student.Matric_Number, times)));
                    PdfCell2.Border = 0;
                    table.AddCell(PdfCell2);

                    PdfPCell PdfCella = new PdfPCell(new Phrase(new Chunk("STUDENT NAME", times2)));
                    PdfCella.Border = 0;
                    table.AddCell(PdfCella);

                    PdfPCell PdfCell2B = new PdfPCell(new Phrase(new Chunk(student.Student_name, times)));
                    PdfCell2B.Border = 0;
                    table.AddCell(PdfCell2B);

                    PdfPCell PdfCell3 = new PdfPCell(new Phrase(new Chunk("INSTITUTION", times2)));
                    PdfCell3.Border = 0;
                    table.AddCell(PdfCell3);



                    PdfPCell PdfCell4 = new PdfPCell(new Phrase(new Chunk(student.Institution.Institution_Name, times)));
                    PdfCell4.Border = 0;
                    table.AddCell(PdfCell4);


                    PdfPCell PdfCell5 = new PdfPCell(new Phrase(new Chunk("YEAR", times2)));
                    PdfCell5.Border = 0;
                    table.AddCell(PdfCell5);


                    PdfPCell PdfCell6 = new PdfPCell(new Phrase(new Chunk(student.Year, times)));
                    PdfCell6.Border = 0;
                    table.AddCell(PdfCell6);



                    jp.Alignment = Element.ALIGN_CENTER;
                    int rows = 0;

                    PdfPCell PdfCell7b = new PdfPCell(new Phrase(new Chunk("COURSE", times2)));
                    PdfCell7b.Border = 0;
                    table2.AddCell(PdfCell7b);

                    PdfPCell PdfCell7bb = new PdfPCell(new Phrase(new Chunk("GRADE", times2)));
                    PdfCell7bb.Border = 0;
                    table2.AddCell(PdfCell7bb);

                    foreach (var student2 in student.Results)
                    {
                        rows = rows + 1;
                        PdfPCell PdfCell7 = new PdfPCell(new Phrase(new Chunk(student2.Course_Code, times)));
                        PdfCell.Border = 0;

                        if (rows % 2 == 0)
                        {
                            PdfCell7.BackgroundColor = new BaseColor(192, 192, 192);
                        }

                        PdfCell7.Border = 0;
                        table2.AddCell(PdfCell7);

                        PdfPCell PdfCell8 = new PdfPCell(new Phrase(new Chunk(student2.Grade, times)));
                        if (rows % 2 == 0)
                        {
                            PdfCell8.BackgroundColor = new BaseColor(192, 192, 192);
                        }

                        PdfCell8.Border = 0;
                        table2.AddCell(PdfCell8);


                    }

                }
                pdfDoc.Add(table);
                pdfDoc.Add(jp);
                pdfDoc.Add(table2);
                pdfDoc.Close();

                byte[] bytes = memoryStream.ToArray();
                memoryStream.Close();

                try
                {
                    int port = 587;


                    MailMessage mail = new MailMessage();
                    mail.From =
               new MailAddress("Anthony.Ozoagu@gmail.com", "noreply@unifiedverificationportal.com");
                    // new MailAddress("tradeservices@fsdhgroup.com");
                    mail.Priority = MailPriority.High;

                    mail.To.Add(
        new MailAddress(email));

                    //    new MailAddress("ozotony@yahoo.com"));



                    //mail.CC.Add(new MailAddress("Anthony.Ozoagu@firstcitygroup.com"));

                    mail.Subject = "RESULT";
                    mail.Attachments.Add(new Attachment(new MemoryStream(bytes), "Student.pdf"));

                    mail.IsBodyHtml = true;
                    String ss2 = "Attached ";


                    String ss = "<html> <head> </head> <body>" + ss2 + "</body> </html>";

                    //  mail.Body = ss;

                    mail.Body = ss;

                    SmtpClient client = new SmtpClient("smtp.gmail.com");
                    //  SmtpClient client = new SmtpClient("192.168.0.12");

                    client.Port = port;

                    client.EnableSsl = true;

                    client.UseDefaultCredentials = false;

                    //    client.Credentials = new System.Net.NetworkCredential("paymentsupport@einaosolutions.com", "Zues.4102.Hector");

                    client.Credentials = new System.Net.NetworkCredential("anthony.ozoagu@gmail.com", "ozoTONY3");



                    //   new System.Net.NetworkCredential("ebusiness@firstcitygroup.com", "welcome@123");
                    //   new System.Net.NetworkCredential(q60.smtp_user, q60.smtp_password);







                    client.Send(mail);

                    ClientScript.RegisterStartupScript(this.GetType(), "", "alert('Document Emailed')", true);

                    string json = "{\"name\":\"Joe\"}";
                    Response.Clear();
                    Response.ContentType = "application/json; charset=utf-8";
                    Response.Write(json);
                    Response.End();

                }
                catch (Exception ee)
                {


                }
            }
        }

        public void Exportpdf3b(string student_no, string service, string year, string Institution, string email)
        {

            var _db = new ApplicationDbContext();

            _db.Configuration.ProxyCreationEnabled = false;


            var vv = (from c in _db.Students

                      join o in _db.Results on new { a = c.Matric_Number } equals new { a = o.Matric_Number }


                      //  where ((c.Payment_Status == "Paid"))

                      //  where ((c.Transaction_Date.Value.Date == start_date2.Date) && (c.Transaction_Date.Value.Date <= end_date2.Date))
                      where (c.Year == o.Year  && c.Service_Code == service && c.Institution_Code == Institution && c.Matric_Number == student_no)



                      select c).Include(o => o.Results).Include(o => o.Institution).Distinct().ToList();


            Response.ContentType = "application/pdf";

            Response.AddHeader("content-disposition",

             "attachment;filename=Partnermail.pdf");

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

            //  PdfWriter.GetInstance(pdfDoc, Response.OutputStream);
            using (MemoryStream memoryStream = new MemoryStream())
            {

                PdfWriter writer = PdfWriter.GetInstance(pdfDoc, memoryStream);
                pdfDoc.Open();

                PdfPTable table = new PdfPTable(6);
                table.SpacingBefore = 20f;
                table.SetWidthPercentage(new float[6] { 60F, 60F, 60F, 60F, 60F, 60F }, pdfDoc.PageSize);
                table.DefaultCell.Border = 0;

                PdfPTable table2 = new PdfPTable(2);
                table2.SpacingBefore = 20f;
                table2.SetWidthPercentage(new float[2] { 80F, 80F }, pdfDoc.PageSize);
                table2.DefaultCell.Border = 0;

                string imagepath = Server.MapPath("img");

                iTextSharp.text.Image gif = iTextSharp.text.Image.GetInstance(imagepath + "/Logo2.png");
                gif.ScaleToFit(600f, 100f);
                pdfDoc.Add(gif);


                Paragraph jp = new Paragraph("RESULT", times3);
                jp.SpacingBefore = 20f;





                foreach (var student in vv)
                {
                    PdfPCell PdfCell = new PdfPCell(new Phrase(new Chunk("STUDENT ID", times2)));
                    PdfCell.Border = 0;
                    table.AddCell(PdfCell);

                    PdfPCell PdfCell2 = new PdfPCell(new Phrase(new Chunk(student.Matric_Number, times)));
                    PdfCell2.Border = 0;
                    table.AddCell(PdfCell2);

                    PdfPCell PdfCella = new PdfPCell(new Phrase(new Chunk("STUDENT NAME", times2)));
                    PdfCella.Border = 0;
                    table.AddCell(PdfCella);

                    PdfPCell PdfCell2B = new PdfPCell(new Phrase(new Chunk(student.Student_name, times)));
                    PdfCell2B.Border = 0;
                    table.AddCell(PdfCell2B);

                    PdfPCell PdfCell3 = new PdfPCell(new Phrase(new Chunk("INSTITUTION", times2)));
                    PdfCell3.Border = 0;
                    table.AddCell(PdfCell3);



                    PdfPCell PdfCell4 = new PdfPCell(new Phrase(new Chunk(student.Institution.Institution_Name, times)));
                    PdfCell4.Border = 0;
                    table.AddCell(PdfCell4);


                    PdfPCell PdfCell5 = new PdfPCell(new Phrase(new Chunk("YEAR", times2)));
                    PdfCell5.Border = 0;
                    table.AddCell(PdfCell5);


                    PdfPCell PdfCell6 = new PdfPCell(new Phrase(new Chunk(student.Year, times)));
                    PdfCell6.Border = 0;
                    table.AddCell(PdfCell6);



                    jp.Alignment = Element.ALIGN_CENTER;
                    int rows = 0;

                    PdfPCell PdfCell7b = new PdfPCell(new Phrase(new Chunk("COURSE", times2)));
                    PdfCell7b.Border = 0;
                    table2.AddCell(PdfCell7b);

                    PdfPCell PdfCell7bb = new PdfPCell(new Phrase(new Chunk("GRADE", times2)));
                    PdfCell7bb.Border = 0;
                    table2.AddCell(PdfCell7bb);

                    foreach (var student2 in student.Results)
                    {
                        rows = rows + 1;
                        PdfPCell PdfCell7 = new PdfPCell(new Phrase(new Chunk(student2.Course_Code, times)));
                        PdfCell.Border = 0;

                        if (rows % 2 == 0)
                        {
                            PdfCell7.BackgroundColor = new BaseColor(192, 192, 192);
                        }

                        PdfCell7.Border = 0;
                        table2.AddCell(PdfCell7);

                        PdfPCell PdfCell8 = new PdfPCell(new Phrase(new Chunk(student2.Grade, times)));
                        if (rows % 2 == 0)
                        {
                            PdfCell8.BackgroundColor = new BaseColor(192, 192, 192);
                        }

                        PdfCell8.Border = 0;
                        table2.AddCell(PdfCell8);


                    }

                }
                pdfDoc.Add(table);
                pdfDoc.Add(jp);
                pdfDoc.Add(table2);
                pdfDoc.Close();

                byte[] bytes = memoryStream.ToArray();
                memoryStream.Close();

                try
                {
                    int port = 587;


                    MailMessage mail = new MailMessage();
                    mail.From =
               new MailAddress("Anthony.Ozoagu@gmail.com", "noreply@unifiedverificationportal.com");
                    // new MailAddress("tradeservices@fsdhgroup.com");
                    mail.Priority = MailPriority.High;

                    mail.To.Add(
        new MailAddress(email));

                    //    new MailAddress("ozotony@yahoo.com"));



                    //mail.CC.Add(new MailAddress("Anthony.Ozoagu@firstcitygroup.com"));

                    mail.Subject = "RESULT";
                    mail.Attachments.Add(new Attachment(new MemoryStream(bytes), "Student.pdf"));

                    mail.IsBodyHtml = true;
                    String ss2 = "Attached ";


                    String ss = "<html> <head> </head> <body>" + ss2 + "</body> </html>";

                    //  mail.Body = ss;

                    mail.Body = ss;

                    SmtpClient client = new SmtpClient("smtp.gmail.com");
                    //  SmtpClient client = new SmtpClient("192.168.0.12");

                    client.Port = port;

                    client.EnableSsl = true;

                    client.UseDefaultCredentials = false;

                    //    client.Credentials = new System.Net.NetworkCredential("paymentsupport@einaosolutions.com", "Zues.4102.Hector");

                    client.Credentials = new System.Net.NetworkCredential("anthony.ozoagu@gmail.com", "ozoTONY3");



                    //   new System.Net.NetworkCredential("ebusiness@firstcitygroup.com", "welcome@123");
                    //   new System.Net.NetworkCredential(q60.smtp_user, q60.smtp_password);







                    client.Send(mail);

                    ClientScript.RegisterStartupScript(this.GetType(), "", "alert('Document Emailed')", true);

                    string json = "{\"name\":\"Joe\"}";
                    Response.Clear();
                    Response.ContentType = "application/json; charset=utf-8";
                    Response.Write(json);
                    Response.End();

                }
                catch (Exception ee)
                {


                }
            }
        }

        public void Exportpdf4(string student_no, string service, string year, string Institution, string email)
        {

            var _db = new ApplicationDbContext();

            _db.Configuration.ProxyCreationEnabled = false;


            var vv = (from c in _db.Students

                      join o in _db.Results on new { a = c.Matric_Number } equals new { a = o.Matric_Number }


                      //  where ((c.Payment_Status == "Paid"))

                      //  where ((c.Transaction_Date.Value.Date == start_date2.Date) && (c.Transaction_Date.Value.Date <= end_date2.Date))
                      where (c.Year == o.Year  && c.Service_Code == service && c.Institution_Code == Institution && c.Matric_Number == student_no)



                      select c).Include(o => o.Results).Include(o => o.Institution).Distinct().ToList();


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

            //  PdfWriter.GetInstance(pdfDoc, Response.OutputStream);
            using (MemoryStream memoryStream = new MemoryStream())
            {

                PdfWriter writer = PdfWriter.GetInstance(pdfDoc, memoryStream);
                pdfDoc.Open();

                PdfPTable table = new PdfPTable(6);
                table.SpacingBefore = 20f;
                table.SetWidthPercentage(new float[6] { 60F, 60F, 60F, 60F, 60F, 60F }, pdfDoc.PageSize);
                table.DefaultCell.Border = 0;

                PdfPTable table2 = new PdfPTable(2);
                table2.SpacingBefore = 20f;
                table2.SetWidthPercentage(new float[2] { 80F, 80F }, pdfDoc.PageSize);
                table2.DefaultCell.Border = 0;


                string imagepath = Server.MapPath("img");

                iTextSharp.text.Image gif = iTextSharp.text.Image.GetInstance(imagepath + "/Logo2.png");
                gif.ScaleToFit(600f, 100f);
                pdfDoc.Add(gif);

                Paragraph jp = new Paragraph("RESULT", times3);
                jp.SpacingBefore = 20f;


                foreach (var student in vv)
                {
                    PdfPCell PdfCell = new PdfPCell(new Phrase(new Chunk("STUDENT ID", times2)));
                    PdfCell.Border = 0;
                    table.AddCell(PdfCell);

                    PdfPCell PdfCell2 = new PdfPCell(new Phrase(new Chunk(student.Matric_Number, times)));
                    PdfCell2.Border = 0;
                    table.AddCell(PdfCell2);

                    PdfPCell PdfCella = new PdfPCell(new Phrase(new Chunk("STUDENT NAME", times2)));
                    PdfCella.Border = 0;
                    table.AddCell(PdfCella);

                    PdfPCell PdfCell2B = new PdfPCell(new Phrase(new Chunk(student.Student_name, times)));
                    PdfCell2B.Border = 0;
                    table.AddCell(PdfCell2B);

                    PdfPCell PdfCell3 = new PdfPCell(new Phrase(new Chunk("INSTITUTION", times2)));
                    PdfCell3.Border = 0;
                    table.AddCell(PdfCell3);



                    PdfPCell PdfCell4 = new PdfPCell(new Phrase(new Chunk(student.Institution.Institution_Name, times)));
                    PdfCell4.Border = 0;
                    table.AddCell(PdfCell4);


                    PdfPCell PdfCell5 = new PdfPCell(new Phrase(new Chunk("YEAR", times2)));
                    PdfCell5.Border = 0;
                    table.AddCell(PdfCell5);


                    PdfPCell PdfCell6 = new PdfPCell(new Phrase(new Chunk(student.Year, times)));
                    PdfCell6.Border = 0;
                    table.AddCell(PdfCell6);



                    jp.Alignment = Element.ALIGN_CENTER;
                    int rows = 0;

                    PdfPCell PdfCell7b = new PdfPCell(new Phrase(new Chunk("COURSE", times2)));
                    PdfCell7b.Border = 0;
                    table2.AddCell(PdfCell7b);

                    PdfPCell PdfCell7bb = new PdfPCell(new Phrase(new Chunk("GRADE", times2)));
                    PdfCell7bb.Border = 0;
                    table2.AddCell(PdfCell7bb);

                    foreach (var student2 in student.Results)
                    {
                        rows = rows + 1;
                        PdfPCell PdfCell7 = new PdfPCell(new Phrase(new Chunk(student2.Course_Code, times)));
                        PdfCell.Border = 0;

                        if (rows % 2 == 0)
                        {
                            PdfCell7.BackgroundColor = new BaseColor(192, 192, 192);
                        }

                        PdfCell7.Border = 0;
                        table2.AddCell(PdfCell7);

                        PdfPCell PdfCell8 = new PdfPCell(new Phrase(new Chunk(student2.Grade, times)));
                        if (rows % 2 == 0)
                        {
                            PdfCell8.BackgroundColor = new BaseColor(192, 192, 192);
                        }

                        PdfCell8.Border = 0;
                        table2.AddCell(PdfCell8);


                    }

                }
                pdfDoc.Add(table);
                pdfDoc.Add(jp);
                pdfDoc.Add(table2);
                pdfDoc.Close();

                byte[] bytes = memoryStream.ToArray();
                memoryStream.Close();

                try
                {
                    int port = 587;


                    MailMessage mail = new MailMessage();
                    mail.From =
               new MailAddress("Anthony.Ozoagu@gmail.com", "noreply@unifiedverificationportal.com");
                    // new MailAddress("tradeservices@fsdhgroup.com");
                    mail.Priority = MailPriority.High;

                    mail.To.Add(
        new MailAddress(email));

                    //    new MailAddress("ozotony@yahoo.com"));



                    //mail.CC.Add(new MailAddress("Anthony.Ozoagu@firstcitygroup.com"));

                    mail.Subject = "TRANSCRIPT";
                    mail.Attachments.Add(new Attachment(new MemoryStream(bytes), "Student.pdf"));

                    mail.IsBodyHtml = true;
                    String ss2 = "Attached ";


                    String ss = "<html> <head> </head> <body>" + ss2 + "</body> </html>";

                    //  mail.Body = ss;

                    mail.Body = ss;

                    SmtpClient client = new SmtpClient("smtp.gmail.com");
                    //  SmtpClient client = new SmtpClient("192.168.0.12");

                    client.Port = port;

                    client.EnableSsl = true;

                    client.UseDefaultCredentials = false;

                    //    client.Credentials = new System.Net.NetworkCredential("paymentsupport@einaosolutions.com", "Zues.4102.Hector");

                    client.Credentials = new System.Net.NetworkCredential("anthony.ozoagu@gmail.com", "ozoTONY3");



                    //   new System.Net.NetworkCredential("ebusiness@firstcitygroup.com", "welcome@123");
                    //   new System.Net.NetworkCredential(q60.smtp_user, q60.smtp_password);







                    client.Send(mail);

                    ClientScript.RegisterStartupScript(this.GetType(), "", "alert('Document Emailed')", true);

                    //string json = "{\"name\":\"Joe\"}";
                    //Response.Clear();
                    //Response.ContentType = "application/json; charset=utf-8";
                    //Response.Write(json);
                    //Response.End();

                }
                catch (Exception ee)
                {


                }
            }
        }

        public void Exportpdf4b(string student_no, string service, string year, string Institution, string email)
        {

            var _db = new ApplicationDbContext();

            _db.Configuration.ProxyCreationEnabled = false;


            var vv = (from c in _db.Students

                      join o in _db.Results on new { a = c.Matric_Number } equals new { a = o.Matric_Number }


                      //  where ((c.Payment_Status == "Paid"))

                      //  where ((c.Transaction_Date.Value.Date == start_date2.Date) && (c.Transaction_Date.Value.Date <= end_date2.Date))
                      where (c.Year == o.Year && c.Service_Code == service && c.Institution_Code == Institution && c.Matric_Number == student_no)



                      select c).Include(o => o.Results).Include(o => o.Institution).Distinct().ToList();


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

            //  PdfWriter.GetInstance(pdfDoc, Response.OutputStream);
            using (MemoryStream memoryStream = new MemoryStream())
            {

                PdfWriter writer = PdfWriter.GetInstance(pdfDoc, memoryStream);
                pdfDoc.Open();

                PdfPTable table = new PdfPTable(6);
                table.SpacingBefore = 20f;
                table.SetWidthPercentage(new float[6] { 60F, 60F, 60F, 60F, 60F, 60F }, pdfDoc.PageSize);
                table.DefaultCell.Border = 0;

                PdfPTable table2 = new PdfPTable(2);
                table2.SpacingBefore = 20f;
                table2.SetWidthPercentage(new float[2] { 80F, 80F }, pdfDoc.PageSize);
                table2.DefaultCell.Border = 0;


                string imagepath = Server.MapPath("img");

                iTextSharp.text.Image gif = iTextSharp.text.Image.GetInstance(imagepath + "/Logo2.png");
                gif.ScaleToFit(600f, 100f);
                pdfDoc.Add(gif);

                Paragraph jp = new Paragraph("RESULT", times3);
                jp.SpacingBefore = 20f;


                foreach (var student in vv)
                {
                    PdfPCell PdfCell = new PdfPCell(new Phrase(new Chunk("STUDENT ID", times2)));
                    PdfCell.Border = 0;
                    table.AddCell(PdfCell);

                    PdfPCell PdfCell2 = new PdfPCell(new Phrase(new Chunk(student.Matric_Number, times)));
                    PdfCell2.Border = 0;
                    table.AddCell(PdfCell2);

                    PdfPCell PdfCella = new PdfPCell(new Phrase(new Chunk("STUDENT NAME", times2)));
                    PdfCella.Border = 0;
                    table.AddCell(PdfCella);

                    PdfPCell PdfCell2B = new PdfPCell(new Phrase(new Chunk(student.Student_name, times)));
                    PdfCell2B.Border = 0;
                    table.AddCell(PdfCell2B);

                    PdfPCell PdfCell3 = new PdfPCell(new Phrase(new Chunk("INSTITUTION", times2)));
                    PdfCell3.Border = 0;
                    table.AddCell(PdfCell3);



                    PdfPCell PdfCell4 = new PdfPCell(new Phrase(new Chunk(student.Institution.Institution_Name, times)));
                    PdfCell4.Border = 0;
                    table.AddCell(PdfCell4);


                    PdfPCell PdfCell5 = new PdfPCell(new Phrase(new Chunk("YEAR", times2)));
                    PdfCell5.Border = 0;
                    table.AddCell(PdfCell5);


                    PdfPCell PdfCell6 = new PdfPCell(new Phrase(new Chunk(student.Year, times)));
                    PdfCell6.Border = 0;
                    table.AddCell(PdfCell6);



                    jp.Alignment = Element.ALIGN_CENTER;
                    int rows = 0;

                    PdfPCell PdfCell7b = new PdfPCell(new Phrase(new Chunk("COURSE", times2)));
                    PdfCell7b.Border = 0;
                    table2.AddCell(PdfCell7b);

                    PdfPCell PdfCell7bb = new PdfPCell(new Phrase(new Chunk("GRADE", times2)));
                    PdfCell7bb.Border = 0;
                    table2.AddCell(PdfCell7bb);

                    foreach (var student2 in student.Results)
                    {
                        rows = rows + 1;
                        PdfPCell PdfCell7 = new PdfPCell(new Phrase(new Chunk(student2.Course_Code, times)));
                        PdfCell.Border = 0;

                        if (rows % 2 == 0)
                        {
                            PdfCell7.BackgroundColor = new BaseColor(192, 192, 192);
                        }

                        PdfCell7.Border = 0;
                        table2.AddCell(PdfCell7);

                        PdfPCell PdfCell8 = new PdfPCell(new Phrase(new Chunk(student2.Grade, times)));
                        if (rows % 2 == 0)
                        {
                            PdfCell8.BackgroundColor = new BaseColor(192, 192, 192);
                        }

                        PdfCell8.Border = 0;
                        table2.AddCell(PdfCell8);


                    }

                }
                pdfDoc.Add(table);
                pdfDoc.Add(jp);
                pdfDoc.Add(table2);
                pdfDoc.Close();

                byte[] bytes = memoryStream.ToArray();
                memoryStream.Close();

                try
                {
                    int port = 587;


                    MailMessage mail = new MailMessage();
                    mail.From =
               new MailAddress("Anthony.Ozoagu@gmail.com", "noreply@unifiedverificationportal.com");
                    // new MailAddress("tradeservices@fsdhgroup.com");
                    mail.Priority = MailPriority.High;

                    mail.To.Add(
        new MailAddress(email));

                    //    new MailAddress("ozotony@yahoo.com"));



                    //mail.CC.Add(new MailAddress("Anthony.Ozoagu@firstcitygroup.com"));

                    mail.Subject = "TRANSCRIPT";
                    mail.Attachments.Add(new Attachment(new MemoryStream(bytes), "Student.pdf"));

                    mail.IsBodyHtml = true;
                    String ss2 = "Attached ";


                    String ss = "<html> <head> </head> <body>" + ss2 + "</body> </html>";

                    //  mail.Body = ss;

                    mail.Body = ss;

                    SmtpClient client = new SmtpClient("smtp.gmail.com");
                    //  SmtpClient client = new SmtpClient("192.168.0.12");

                    client.Port = port;

                    client.EnableSsl = true;

                    client.UseDefaultCredentials = false;

                    //    client.Credentials = new System.Net.NetworkCredential("paymentsupport@einaosolutions.com", "Zues.4102.Hector");

                    client.Credentials = new System.Net.NetworkCredential("anthony.ozoagu@gmail.com", "ozoTONY3");



                    //   new System.Net.NetworkCredential("ebusiness@firstcitygroup.com", "welcome@123");
                    //   new System.Net.NetworkCredential(q60.smtp_user, q60.smtp_password);







                    client.Send(mail);

                    ClientScript.RegisterStartupScript(this.GetType(), "", "alert('Document Emailed')", true);

                    //string json = "{\"name\":\"Joe\"}";
                    //Response.Clear();
                    //Response.ContentType = "application/json; charset=utf-8";
                    //Response.Write(json);
                    //Response.End();

                }
                catch (Exception ee)
                {


                }
            }
        }
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request.Form["student_no"] != null)
            {
                var student_no = Convert.ToString(Request.Form["student_no"]);
                var service = Convert.ToString(Request.Form["service"]);
                var Year = Convert.ToString(Request.Form["Year"]);
                var type = Convert.ToString(Request.Form["type"]);
                var Institutioncode = Convert.ToString(Request.Form["Institutioncode"]);

                var email = Convert.ToString(Request.Form["email"]);
                if (email !=null  )
                {
                    if (type == "SV001")
                    {
                        if (Year != "NA")
                        {
                            Exportpdf3(student_no, service, Year, Institutioncode, email);

                        }

                        else
                        {

                            Exportpdf3b(student_no, service, Year, Institutioncode, email);
                        }
                    }

                    if (type == "SV003")
                    {
                        if (Year != "NA")
                        {
                            Exportpdf4(student_no, service, Year, Institutioncode, email);

                        }

                        else
                        {

                            Exportpdf4b(student_no, service, Year, Institutioncode, email);
                        }
                    }

                    if (type == "SV002")
                    {
                        if (Year != "NA")
                        {
                            Exportpdf4b(student_no, service, Year, Institutioncode, email);

                        }

                        else
                        {
                            Exportpdf4b(student_no, service, Year, Institutioncode, email);
                        }
                    }

                }

                else if (type == "SV001")
                {
                    if (Year != "NA")
                    {
                        Exportpdf(student_no, service, Year, Institutioncode);

                    }

                    else
                    {

                        Exportpdfb(student_no, service, Year, Institutioncode);
                    }
                }

                else if (type == "SV003")
                {
                    if (Year != "NA")
                    {
                        Exportpdf2(student_no, service, Year, Institutioncode);

                    }

                    else
                    {

                        Exportpdfb(student_no, service, Year, Institutioncode);
                    }
                }


                else if (type == "SV002")
                {
                    if (Year != "NA")
                    {
                        Exportpdfb(student_no, service, Year, Institutioncode);

                    }

                    else
                    {

                        Exportpdfb(student_no, service, Year, Institutioncode);
                    }
                }

            }


         

        }
    }
}