namespace WebApplication4.Model3
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("hwallet")]
    public partial class hwallet
    {
        [Key]
        public long xid { get; set; }

        public string transID { get; set; }

        public string fee_detailsID { get; set; }

        public string product_title { get; set; }

        [StringLength(50)]
        public string used_status { get; set; }

        [StringLength(50)]
        public string xreg_date { get; set; }

        [StringLength(50)]
        public string used_date { get; set; }
    }
}
