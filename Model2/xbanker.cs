namespace WebApplication4.Model2
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("xbanker")]
    public partial class xbanker
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long xid { get; set; }

        public string xname { get; set; }

        public string bankname { get; set; }

        [StringLength(50)]
        public string xpassword { get; set; }

        public string nationality { get; set; }

        public string addressID { get; set; }

        public string xposition { get; set; }

        public string sys_ID { get; set; }

        [StringLength(50)]
        public string xreg_date { get; set; }

        [StringLength(10)]
        public string xvisible { get; set; }

        [StringLength(10)]
        public string xsync { get; set; }
    }
}
