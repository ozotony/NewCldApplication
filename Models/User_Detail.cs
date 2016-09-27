using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class User_Detail
    {
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ID { get; set; }
        [MaxLength(200)]
        [Required]
        public String User_Id { get; set; }

      
        [Required]
        public bool Fee { get; set; }

       
        [Required]
        public Double Fee_amount  { get; set; }


        [MaxLength(200)]
        [Required]
        public String Services  { get; set; }
    }
}