using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class Email4
    {
        public int id { get; set; }

        public String Subject { get; set; }

        public String Message { get; set; }

        public String Agent_Code { get; set; }

        public Boolean Status { get; set; }

        public String Sent_Date { get; set; }
    }
}