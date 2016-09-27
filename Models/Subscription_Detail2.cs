using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class Subscription_Detail2
    {

      
        public String Subscription_Code { get; set; }
     
        public String user_id { get; set; }

        public DateTime Payment_Date { get; set; }

        public DateTime Expiry_Date { get; set; }

        public String Transaction_Code { get; set; }

        public String Service  { get; set; }

      
    }
}