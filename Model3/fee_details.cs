namespace WebApplication4.Model3
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class fee_details
    {
        [Key]
        public long xid { get; set; }

        public string fee_listID { get; set; }

        [ForeignKey("twallet")]
        public long twalletID { get; set; }

        [StringLength(50)]
        public string xqty { get; set; }

        [StringLength(50)]
        public string xused { get; set; }

        public string init_amt { get; set; }

        public string tech_amt { get; set; }

        public string tot_amt { get; set; }


       

        [StringLength(50)]
        public string xlogstaff { get; set; }

        [StringLength(50)]
        public string xreg_date { get; set; }

        [StringLength(10)]
        public string xvisible { get; set; }

        [StringLength(10)]
        public string xsync { get; set; }


        public virtual twallet twallet { get; set; }
    }
}
