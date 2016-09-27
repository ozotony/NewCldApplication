using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class Bank
    {
       //[Key, Column(Order = 0)]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        [MaxLength(200)] 
        [Required]
        //[Key, Column(Order = 1)]
            [Key]
        public String  Bank_Code { get; set; }
        [MaxLength(200)]
        [Required]
        public String Bank_Name { get; set; }

        [MaxLength(200)]
        [Required]
        public String AccountNumber { get; set; }

        public virtual ICollection<Transaction> Transaction { get; set; }
    }
}