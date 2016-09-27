using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class ViewBasket
    {
        public string xname { get; set; }
        public string address { get; set; }
        public string xemail { get; set; }
        public string xmobile { get; set; }
        public string xid { get; set; }
        public int  sn { get; set; }
        public string transID { get; set; }
        public string fee_detailsID { get; set; }
        public string product_title { get; set; }
        public string used_status { get; set; }
        public string xreg_date { get; set; }
        public string used_date { get; set; }
        public string new_transID { get; set; }
        public string item_code { get; set; }
        public string xdesc { get; set; }
        public Double init_amt { get; set; }
    }
}