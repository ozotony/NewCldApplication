namespace WebApplication4.Model2
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class registration2
    {
        [Key]
        public long xid { get; set; }

        public string AccrediationType { get; set; }

        [StringLength(50)]
        public string Sys_ID { get; set; }

        public string Firstname { get; set; }

        public string Surname { get; set; }

        public string Email { get; set; }

        [Column(TypeName = "text")]
        public string xpassword { get; set; }

        [StringLength(50)]
        public string DateOfBrith { get; set; }

        [StringLength(50)]
        public string IncorporatedDate { get; set; }

        [StringLength(50)]
        public string Nationality { get; set; }

        public string PhoneNumber { get; set; }

        public string CompanyName { get; set; }

        [Column(TypeName = "text")]
        public string CompanyAddress { get; set; }

        [Column(TypeName = "text")]
        public string ContactPerson { get; set; }

        public string ContactPersonPhone { get; set; }

        public string CompanyWebsite { get; set; }

        [Column(TypeName = "text")]
        public string Certificate { get; set; }

        [Column(TypeName = "text")]
        public string Introduction { get; set; }

        [Column(TypeName = "text")]
        public string Principal { get; set; }

        [StringLength(50)]
        public string xreg_date { get; set; }

        [StringLength(10)]
        public string xstatus { get; set; }

        [StringLength(10)]
        public string xvisible { get; set; }

        [StringLength(10)]
        public string xsync { get; set; }
    }
}
