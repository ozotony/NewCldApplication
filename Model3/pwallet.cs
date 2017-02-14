namespace WebApplication4.Model3
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("pwallet")]
    public partial class pwallet
    {
        [Key]
        public long xid { get; set; }

        [StringLength(50)]
        public string xmembertype { get; set; }

        public string xmemberID { get; set; }

        public string xemail { get; set; }

        public string xmobile { get; set; }

        public string xpass { get; set; }

        [StringLength(50)]
        public string reg_date { get; set; }
    }
}
