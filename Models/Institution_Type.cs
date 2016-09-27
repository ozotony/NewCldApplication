using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class Institution_Type
    {
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        [MaxLength(200)]
        [Required]
        //[Key, Column(Order = 1)]
        [Key]
        public String InstitutionType_Code { get; set; }
        [MaxLength(200)]
        [Required]
        public String InstitutionType_Name { get; set; }

        public virtual ICollection<Institution> Institution { get; set; }
    }
}