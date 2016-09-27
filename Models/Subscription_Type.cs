using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class Subscription_Type
    {
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }

        [MaxLength(20)]
        [Required]
        [Key]
        public String Subscription_Type_Code { get; set; }
        [MaxLength(200)]
        [Required]
        public String Subscription_Type_Name { get; set; }
        public virtual ICollection<Subscription> Subscription { get; set; }
    }
}