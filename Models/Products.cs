using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class Products
    {
        [Key]
        public int ProductID { get; set; }
         [MaxLength(200)] 
        public string Name { get; set; }
        [MaxLength(200)] 
        public string Description { get; set; }

        public string Merchant_Id { get; set; }
        public string LogoPath { get; set; }
        public Double  Amount { get; set; }

        public Double Tech_Amount { get; set; }

        public DateTime Date_Created { get; set; }
    }
}