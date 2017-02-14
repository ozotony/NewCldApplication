namespace WebApplication4.Model3
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("applicant")]
    public partial class applicant
    {
        [Key]
        public long xid { get; set; }

        public string xname { get; set; }

        [Column(TypeName = "text")]
        public string address { get; set; }

        public string xemail { get; set; }

        public string xmobile { get; set; }

       
    }
}
