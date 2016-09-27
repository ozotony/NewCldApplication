using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class Clients
    {
        //[Key, Column(Order = 0)]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        [MaxLength(200)]
        [Required]
        //[Key, Column(Order = 1)]
        [Key]
        public String Client_Code { get; set; }
        [MaxLength(200)]
        [Required]
        public String Client_Name { get; set; }

        [MaxLength(200)]
        [Required]
        public String Image_url { get; set; }

        [MaxLength(200)]
       
        public String Webservice_url { get; set; }

        [MaxLength(200)]

        public String Page_url { get; set; }

        [MaxLength(200)]

        public String Client_Address { get; set; }

        [MaxLength(200)]

        public String Client_PhoneNumber { get; set; }

        [MaxLength(200)]

        public String Client_Email { get; set; }

      

        public Boolean  visible { get; set; }
    }
}