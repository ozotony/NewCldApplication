namespace WebApplication4.Model3
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("address")]
    public partial class address
    {
        public long ID { get; set; }

        [StringLength(10)]
        public string countryID { get; set; }

        [StringLength(10)]
        public string stateID { get; set; }

        [StringLength(10)]
        public string lgaID { get; set; }

        [StringLength(40)]
        public string city { get; set; }

        [Column(TypeName = "text")]
        public string street { get; set; }

        [StringLength(10)]
        public string zip { get; set; }

        [StringLength(40)]
        public string telephone1 { get; set; }

        [StringLength(40)]
        public string telephone2 { get; set; }

        [StringLength(40)]
        public string email1 { get; set; }

        [StringLength(40)]
        public string email2 { get; set; }

        [StringLength(40)]
        public string log_staff { get; set; }

        [StringLength(40)]
        public string reg_date { get; set; }

        [StringLength(10)]
        public string visible { get; set; }

        [StringLength(10)]
        public string xsync { get; set; }
    }
}
