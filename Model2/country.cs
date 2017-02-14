namespace WebApplication4.Model2
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("country")]
    public partial class country
    {
        public long ID { get; set; }

        [StringLength(10)]
        public string code { get; set; }

        [StringLength(50)]
        public string name { get; set; }
    }
}
