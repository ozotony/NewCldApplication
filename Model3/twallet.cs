namespace WebApplication4.Model3
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("twallet")]
    public partial class twallet
    {
        [Key]
        public long xid { get; set; }

        public string transID { get; set; }

        public string xmemberID { get; set; }

        public string xmembertype { get; set; }

        [StringLength(50)]
        public string xpay_status { get; set; }

        [StringLength(50)]
        public string xgt { get; set; }

        public string ref_no { get; set; }

        public string xbankerID { get; set; }

        [StringLength(50)]
        public string xreg_date { get; set; }

        [StringLength(10)]
        public string xvisible { get; set; }

        [StringLength(10)]
        public string xsync { get; set; }

        public string applicantID { get; set; }

       

       

        public virtual ICollection<fee_details> fee_details { get; set; }
    }
}
