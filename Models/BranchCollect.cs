using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class BranchCollect
    {
        public String TransactionID { get; set; }
        public String CustomerFirstname { get; set; }

        public String Agent_name { get; set; }

        public String TransactionDate { get; set; }

        public String ItemDescription { get; set; }

        public String ItemAmount { get; set; }

        public String paymentcode { get; set; }

        public String Serial_No { get; set; }

        public String CustomerEmail { get; set; }

        public String CustomerGSM { get; set; }

        public String ApplicantEmail { get; set; }

        public String ApplicantPhone { get; set; }
    }
}