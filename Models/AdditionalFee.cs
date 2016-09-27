using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class AdditionalFee
    {

        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }

        [MaxLength(20)]
        [Required]
        [Key]
        public String Fee_Code { get; set; }
        [MaxLength(200)]
        [Required]
        public String Fee_Name { get; set; }



       

      
        public Double Amount { get; set; }

        public virtual ICollection<Transaction> Transaction { get; set; }
    }
}