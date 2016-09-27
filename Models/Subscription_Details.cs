using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class Subscription_Details
    {
         [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
          [Key]
        public int ID { get; set; }

         [ForeignKey("Subscription")]
         public String Subscription_Code { get; set; }
        [MaxLength(200)]
         public String user_id { get; set; }

        public DateTime Payment_Date { get; set; }

        public DateTime? Expiry_Date { get; set; }

        [MaxLength(200)]
        public String Transaction_id { get; set; }
          [MaxLength(200)]
        public String Service { get; set; }

        public Boolean Used { get; set; }

        public virtual Subscription Subscription { get; set; }



      
      

    }
}