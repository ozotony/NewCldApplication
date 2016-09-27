using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml;
using System.Xml.Linq;
using System.Xml.Schema;
using WebApplication4.Models;

namespace WebApplication4
{
    public partial class ValidateXml : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            var pp = "C:\\Einao\\VS Source\\Projects\\WebApi_PayExpress5\\WebApplication4\\WebApplication4\\xml\\Student.xml";
            var pp2 = "C:\\Einao\\VS Source\\Projects\\WebApi_PayExpress5\\WebApplication4\\WebApplication4\\xml\\Student2.xsd";

          //  bool pp3 = IsValidXml(pp, pp2);

            ReadXml2(pp);
        }

        public static bool IsValidXml(string xmlFilePath, string xsdFilePath)
        {
            var xdoc = XDocument.Load(xmlFilePath);
            var schemas = new XmlSchemaSet();
            schemas.Add(null, xsdFilePath);

            try
            {
                xdoc.Validate(schemas, null);
            }
            catch (XmlSchemaValidationException)
            {
                return false;
            }

            return true;
        }


        public void ReadXml2(string xmlFilePath)
        {
            var _db = new ApplicationDbContext();
            

            XElement xelement = XElement.Load(xmlFilePath);
            IEnumerable<XElement> employees = xelement.Elements();


            foreach (var item in employees)
            {
                Students ssp = new Students();

                string name = item.Element("PartnerID").Value;

                string name2 = item.Element("StudentName").Value;

                string name3 = item.Element("StudentID").Value;

                string name4 = item.Element("Year").Value;

                string name5 = item.Element("Term").Value;

                ssp.Matric_Number = name3;

                ssp.Student_name = name2;

                ssp.Term = name5;
                ssp.Year = name4;
                _db.Students.Add(ssp);

                _db.SaveChanges();

                foreach (var  xEle in item.Descendants("Result"))
                {

                    WebApplication4.Models.Results ffx = new WebApplication4.Models.Results();

                    string name7 = xEle.Element("Course").Value;
                    string name8 = xEle.Element("Grade").Value;
                    string name9 = xEle.Element("Score").Value;
                    var xx = "";

                    ffx.Course_Code = name7;

                    ffx.Grade = name8;

                    ffx.Matric_Number = name3;
                    ffx.Score =Convert.ToDecimal( name9);


                    _db.Results.Add(ffx);

                    _db.SaveChanges();

                    // Console.WriteLine((string)xEle);
                }

               

            }

            var dd = "";
            //  string xml2 = form.Get("xmlmsg");

            // sendemail5("ozotony@yahoo.com", xml2);



            //  var response = Request.CreateResponse(HttpStatusCode.Moved);
            // response.Headers.Location = new Uri("http://88.150.164.30/ups#/form/success?MessageID=01&&TranDateTime2=" + TranDateTime2 + "&&ResponseDescription2=" + ResponseDescription2 + "&&MerchantTranID2=" + OrderID2);
            // return response;



        }

    }
}