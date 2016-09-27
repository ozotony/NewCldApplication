using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class Students
    {
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
         public int ID { get; set; }

        [MaxLength(200)]
        [Required]
        public String Student_name { get; set; }

        [MaxLength(200)]
        [Required]
        [Key, Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public String Matric_Number { get; set; }
        [Key, Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public String Year { get; set; }
        [Key, Column(Order = 2)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public String Term { get; set; }

        [ForeignKey("Institution")]
        [Key, Column(Order = 3)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public String Institution_Code { get; set; }

        [Key, Column(Order = 4)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public String Service_Code { get; set; }

        public DateTime ? UploadDate { get; set; }

        public String UploadBy { get; set; }

        public String ApprovedBy { get; set; }

        public String Status { get; set; }

        public virtual Institution Institution { get; set; }

        public virtual ICollection<Results> Results { get; set; }
    }
}