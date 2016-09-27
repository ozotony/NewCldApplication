using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class ApplicationStatus2
    {
        public List<XObjs.PaymentReciept> lt_pr { get; set; }

        public XObjs.Twallet twallet { get; set; }

        public List<XObjs.Fee_details>  feedetails  { get; set; }

        public XObjs.Applicant applicant { get; set; }

        public int vcount { get; set; }

        public String total_amt { get; set; }


        public XObjs.InterSwitchPostFields isw_fields { get; set; }
    }
}