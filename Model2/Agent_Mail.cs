namespace WebApplication4.Model2
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Agent_Mail
    {
        public int Id { get; set; }

        [Required]
        [StringLength(500)]
        public string Subject { get; set; }

        [StringLength(500)]
        public string Message { get; set; }

        public DateTime? Date_Sent { get; set; }

        [StringLength(50)]
        public string Agent_Code { get; set; }

        public bool? Status { get; set; }
    }
}
