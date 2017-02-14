namespace WebApplication4.Model2
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Xrole_Granted
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }

        [Key]
        [Column(Order = 0)]
        [StringLength(50)]
        public string Agent_Code { get; set; }

        [Key]
        [Column(Order = 1)]
        [StringLength(50)]
        public string Role_Name { get; set; }
    }
}
