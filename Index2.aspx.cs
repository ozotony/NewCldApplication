using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplication4
{
    public partial class Index2 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!base.IsPostBack)
            {
                xname.Value = Request.QueryString["TransactionidID"];

                Session["TransactionidID"] = Request.QueryString["TransactionidID"];

            }
        }
    }
}