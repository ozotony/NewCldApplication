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

         //   ReadXml2(pp);
        }

     


      

    }
}