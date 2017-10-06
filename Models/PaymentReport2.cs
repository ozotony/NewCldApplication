using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class PaymentReport2
    {
        public XObjs.Applicant applicant { get; set; }
        public XObjs.InterSwitchPostFields InterSwitchPostField { get; set; }

        public XObjs.Twallet twallet { get; set; }

        public List<Fee_details> fee_details { get; set; }
    }
}