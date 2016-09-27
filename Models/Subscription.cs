using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class Subscription
    {
        
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }

        [MaxLength(20)]
        [Required]
        [Key]
        public String Subscription_Code { get; set; }
        [MaxLength(200)]
        [Required]
        public String Subscription_Name { get; set; }
      
       

        [ForeignKey("Subscription_Type")]
        public String  Subscription_Type_Code { get; set; }

        [Required]
        public Double Amount { get; set; }

       
        public Double CovienientFee { get; set; }

        public String Transactionid { get; set; }



        public String Duration { get; set; }

        public virtual Subscription_Type Subscription_Type { get; set; }

        public virtual ICollection<Transaction> Transaction { get; set; }

        public virtual ICollection<Subscription_Details> Subscription_Details { get; set; }
    }
}