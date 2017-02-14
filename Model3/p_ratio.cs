namespace WebApplication4.Model3
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class p_ratio
    {
        [Key]
        public long xid { get; set; }

        public string xpartnerID { get; set; }

        [StringLength(50)]
        public string p_type { get; set; }

        [StringLength(50)]
        public string xratio { get; set; }

        [StringLength(50)]
        public string r_type { get; set; }

        [StringLength(50)]
        public string xreg_date { get; set; }

        [StringLength(10)]
        public string xvisible { get; set; }

        public string xdec { get; set; } 
        [StringLength(10)]
        public string xsync { get; set; }
    }
}
