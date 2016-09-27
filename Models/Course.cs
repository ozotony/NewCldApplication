using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class Course
    {
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
      
        [MaxLength(200)]
        [Required]
        [Key]
        public String Course_Code { get; set; }

        [MaxLength(200)]
        [Required]
        public String Course_Description { get; set; }

        //public virtual ICollection<Results> Results { get; set; }
    }
}