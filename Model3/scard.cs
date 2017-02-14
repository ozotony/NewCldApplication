namespace WebApplication4.Model3
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("scard")]
    public partial class scard
    {
        [Key]
        public long xid { get; set; }

        public string xnum { get; set; }

        [StringLength(50)]
        public string xvalid { get; set; }

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
