using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class Transaction
    {
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ID { get; set; }
        [MaxLength(200)]
        [Required]
        //[Key, Column(Order = 1)]
      
        public String Transaction_Code { get; set; }
        [MaxLength(200)]

        [ForeignKey("Institution")]
        public String Institution_Code { get; set; }

        [ForeignKey("Subscription")]
        public String Subscription_Code { get; set; }

        [ForeignKey("Bank")]
        public String Bank_Code { get; set; }

        public virtual Subscription Subscription { get; set; }

        public virtual Bank Bank { get; set; }

        public virtual Institution Institution { get; set; }

        public String payment_type { get; set; }

        public String user_id { get; set; }

        public Double amount  { get; set; }

        public String Status  { get; set; }

        public String Payment_Status { get; set; }

        public String Account_Number { get; set; }

        public String Order_Id { get; set; }

        public String Transaction_Status { get; set; }

        public String transationid { get; set; }

        [ForeignKey("AdditionalFee")]
        public String Fee_Code { get; set; }

        public DateTime ?  Transaction_Date  { get; set; }

        public String Service { get; set; }

        public String StudentNumber { get; set; }

        public String Rawxml { get; set; }


        public virtual AdditionalFee AdditionalFee { get; set; }
    }
}