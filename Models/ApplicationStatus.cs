using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class ApplicationStatus
    {
        public SortedList<string, string> ppx { get; set; }

        public List<Stage> lt_pw { get; set; }

        public List<PtInfo> lt_pw2 { get;set;}
        public List<Stage> lt_stage { get; set; }

        public int vcount { get; set; }
    }
}