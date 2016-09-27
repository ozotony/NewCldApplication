using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class Shopping_card2
    {
        public Applicant bb { get; set; }
        public Shopping_card[] cc { get; set; }

        public XObjs.Registration dd { get; set; }

        public XObjs.Twallet ee { get; set; }

        public XObjs.InterSwitchPostFields ff { get; set; }

        public List<Fee_details> pp { get; set; }


    }
}