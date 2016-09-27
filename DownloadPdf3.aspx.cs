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



            GetTransaction3b(start_date, end_date, studentnumber, institution, subscription, paymentstatus);




        }

        public void  GetTransaction3b( string start_date,  string end_date,  string studentnumber,  string institution,  string subscription,  string paymentstatus)
        {
            var _db = new ApplicationDbContext();

            _db.Configuration.ProxyCreationEnabled = false;

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


            PdfPCell PdfCell = new PdfPCell(new Phrase(new Chunk("USER ID", times2)));
            PdfCell.Border = 0;
            table.AddCell(PdfCell);

            PdfPCell PdfCella = new PdfPCell(new Phrase(new Chunk("ORDER ID", times2)));
            PdfCella.Border = 0;
            table.AddCell(PdfCella);

            PdfPCell PdfCellb = new PdfPCell(new Phrase(new Chunk("PAYMENT STATUS", times2)));
            PdfCellb.Border = 0;
            table.AddCell(PdfCellb);

            PdfPCell PdfCellc = new PdfPCell(new Phrase(new Chunk("TRANSACTION STATUS DESCRIPTION", times2)));
            PdfCellc.Border = 0;
            table.AddCell(PdfCellc);

            PdfPCell PdfCelld = new PdfPCell(new Phrase(new Chunk("SUBSCRIPTION TYPE", times2)));
            PdfCelld.Border = 0;
            table.AddCell(PdfCelld);

            PdfPCell PdfCelle = new PdfPCell(new Phrase(new Chunk("INSTITUTION NAME", times2)));
            PdfCelle.Border = 0;
            table.AddCell(PdfCelle);


            PdfPCell PdfCellf = new PdfPCell(new Phrase(new Chunk("TRANSACTION DATE", times2)));
            PdfCellf.Border = 0;
            table.AddCell(PdfCellf);

            PdfPCell PdfCellg = new PdfPCell(new Phrase(new Chunk("AMOUNT", times2)));
            PdfCellg.Border = 0;
            table.AddCell(PdfCellg);



            var vv = (from c in _db.Transaction

                      join o in _db.Subscription on new { a = c.Subscription_Code } equals new { a = o.Subscription_Code }

                      join p in _db.Banks on new { a = c.Bank_Code } equals new { a = p.Bank_Code } into sr2
                      from x in sr2.DefaultIfEmpty()

                      join k in _db.Institutions on new { a = c.Institution_Code } equals new { a = k.Institution_Code }
                      //  where ((c.Payment_Status == "Paid"))

                      //  where ((c.Transaction_Date.Value.Date == start_date2.Date) && (c.Transaction_Date.Value.Date <= end_date2.Date))

                      //  where (DbFunctions.TruncateTime(c.Transaction_Date) >= DbFunctions.TruncateTime(start_date2) ) && (DbFunctions.TruncateTime(c.Transaction_Date) <= DbFunctions.TruncateTime(start_date2))
                      // where ( c.Transaction_Date>= start_date2 && c.Transaction_Date <= end_date2)



                      select new { c.Account_Number, c.amount, c.Transaction_Code, o.Subscription_Name, x.Bank_Name, k.Institution_Name, c.user_id, c.Payment_Status, o.Subscription_Code, c.Order_Id, c.Transaction_Status, c.Transaction_Date, c.StudentNumber, c.Institution_Code });
            if ((start_date != "NA") && (end_date != "NA"))
            {

                DateTime end_date2 = Convert.ToDateTime(end_date);
                DateTime start_date2 = Convert.ToDateTime(start_date);

                vv = vv.Where(u => DbFunctions.TruncateTime(u.Transaction_Date) >= DbFunctions.TruncateTime(start_date2) && (DbFunctions.TruncateTime(u.Transaction_Date) <= DbFunctions.TruncateTime(end_date2)));
            }


            if (studentnumber != "NA")

                vv = vv.Where(u => u.StudentNumber == studentnumber);

            if (institution != "NA")

                vv = vv.Where(u => u.Institution_Code == institution);

            if (subscription != "NA")

                vv = vv.Where(u => u.Subscription_Code == subscription);

            if (paymentstatus != "NA")

                vv = vv.Where(u => u.Payment_Status == paymentstatus);



            var pp = vv.ToList();

            List<GetTransaction> xk2 = new List<GetTransaction>();
            foreach (var vv2 in pp)
            {

                PdfPCell PdfCellaa = new PdfPCell(new Phrase(new Chunk(vv2.user_id, times)));
                PdfCellaa.Border = 0;
                table.AddCell(PdfCellaa);

                PdfPCell PdfCell2 = new PdfPCell(new Phrase(new Chunk(vv2.Order_Id, times)));
                PdfCell2.Border = 0;
                table.AddCell(PdfCell2);


                PdfPCell PdfCellab = new PdfPCell(new Phrase(new Chunk(vv2.Payment_Status, times)));
                PdfCellab.Border = 0;
                table.AddCell(PdfCellab);

                PdfPCell PdfCell2B = new PdfPCell(new Phrase(new Chunk(vv2.Transaction_Status, times)));
                PdfCell2B.Border = 0;
                table.AddCell(PdfCell2B);

                PdfPCell PdfCell3 = new PdfPCell(new Phrase(new Chunk(vv2.Subscription_Name, times)));
                PdfCell3.Border = 0;
                table.AddCell(PdfCell3);



                PdfPCell PdfCell4a = new PdfPCell(new Phrase(new Chunk(vv2.Institution_Name, times)));
                PdfCell4a.Border = 0;
                table.AddCell(PdfCell4a);


                PdfPCell PdfCell5 = new PdfPCell(new Phrase(new Chunk(vv2.Transaction_Date.ToString(), times)));
                PdfCell5.Border = 0;
                table.AddCell(PdfCell5);


                PdfPCell PdfCell6 = new PdfPCell(new Phrase(new Chunk(vv2.amount.ToString("#,##0"), times)));
                PdfCell6.Border = 0;
                table.AddCell(PdfCell6);

                //GetTransaction xk = new GetTransaction();
                //xk.Account_Number = vv2.Account_Number;
                //xk.amount = vv2.amount;
                //xk.Bank_Name = vv2.Bank_Name;
                //xk.Institution_Name = vv2.Institution_Name;
                //xk.Subscription_Name = vv2.Subscription_Name;
                //xk.Transaction_Code = vv2.Transaction_Code;
                //xk.User_Name = vv2.user_id;
                //xk.Payment_Status = vv2.Payment_Status;
                //xk.Subscription_Code = vv2.Subscription_Code;
                //xk.Order_Id = vv2.Order_Id;
                //xk.Transaction_Status = vv2.Transaction_Status;

                //xk.Transaction_Date = vv2.Transaction_Date.ToString();

                //xk2.Add(xk);


            }




          




            pdfDoc.Add(table);
          //  pdfDoc.Add(jp);
          //  pdfDoc.Add(table2);
            pdfDoc.Close();

            Response.Write(pdfDoc);

            Response.End();






            //  return xk2;
        }

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

        public void Exportpdfb(string student_no, string service, string year, string Institution)
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
    }
}