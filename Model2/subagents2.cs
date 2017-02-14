namespace WebApplication4.Model2
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class subagents2
    {
        [Key]
        public long xid { get; set; }

        [StringLength(50)]
        public string RegistrationID { get; set; }

        public string Surname { get; set; }

        public string Firstname { get; set; }

        public string Email { get; set; }

        [Column(TypeName = "text")]
        public string xpassword { get; set; }

        public string Telephone { get; set; }

        [StringLength(50)]
        public string AssignID { get; set; }

        [Column(TypeName = "text")]
        public string Address { get; set; }

        [Column(TypeName = "text")]
        public string AgentPassport { get; set; }

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
