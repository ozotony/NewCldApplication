using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class Shopping_card
    {
        public double amt { get; set; }

        public double init_amt { get; set; }

        public string item_code { get; set; }

        public string item_desc { get; set; }

        public int qty { get; set; }

        public double tech_amt { get; set; }

        public int xid { get; set; }

        public int sn { get; set; }
    }
}