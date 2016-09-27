using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class GetTransaction
    {
        public String Account_Number { get; set; }

        public Double amount { get; set; }

        public String Transaction_Code { get; set; }

        public String Subscription_Name         { get; set; }

        public String Bank_Name         { get; set; }

        public String User_Name { get; set; }

        public String Institution_Name { get; set; }

        public String Payment_Status { get; set; }

        public String Subscription_Code { get; set; }

        public String TranDateTime2 { get; set; }

        public String ResponseDescription2 { get; set; }

        public String Order_Id { get; set; }

        public String Transaction_Status { get; set; }

        public String Transaction_Date { get; set; }



    }
}