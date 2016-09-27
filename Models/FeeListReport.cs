using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class FeeListReport
    {
        public long xid { get; set; }
        public string item { get; set; }
        public string item_code { get; set; }
        public string qt_code { get; set; }
        public string xdesc { get; set; }
        public Nullable<int> init_amt { get; set; }
        public Nullable<int> tech_amt { get; set; }
        public string xcategory { get; set; }
        public string xlogstaff { get; set; }
        public string xreg_date { get; set; }
        public string xvisible { get; set; }
        public string xsync { get; set; }

        public Boolean showbtn { get; set; }

        public Boolean showbtn2 { get; set; }

        public int sn {get;set;}

        public int? amt { get; set; }
    }
}