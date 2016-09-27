using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class Partner_Organisation
    {
         [Key]
        public int ID { get; set; }
        [MaxLength(200)]
        [Required]
           
        public String Institution_Code { get; set; }

        [MaxLength(200)]
        [Required]
        public String File_Name { get; set; }


        public DateTime DateCreated { get; set; }
    }
}