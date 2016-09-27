using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class Aknowlegement
    {
        public MarkInfo markinfo { get; set; }
        public Representative representative { get; set; }

        public Stage stage { get; set; }
        public Applicant applicant { get; set; }
        public Address Address { get; set; }

        public String  vurl  { get; set; }

        public XObjs.Hwallet hwallet { get; set; }
    }
}