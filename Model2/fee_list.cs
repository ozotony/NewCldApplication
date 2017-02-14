namespace WebApplication4.Model2
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class fee_list
    {
        [Key]
        public long xid { get; set; }

        public string item { get; set; }

        public string item_code { get; set; }

        public string qt_code { get; set; }

        [Column(TypeName = "text")]
        public string xdesc { get; set; }

        public int? init_amt { get; set; }

        public int? tech_amt { get; set; }

        public string xcategory { get; set; }

        [StringLength(50)]
        public string xlogstaff { get; set; }

        [StringLength(50)]
        public string xreg_date { get; set; }

        [StringLength(10)]
        public string xvisible { get; set; }


       


        [StringLength(10)]
        public string xsync { get; set; }
    }
}
