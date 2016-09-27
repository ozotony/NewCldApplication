using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class Results
    {
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ID { get; set; }

       
        [Required]
        public Decimal  Score { get; set; }
        
        [ForeignKey("Students"), Column(Order = 0)]
        public String Matric_Number { get; set; }
        [ForeignKey("Students"), Column(Order = 1)]
        public String Year { get; set; }
        [ForeignKey("Students"), Column(Order = 2)]
        public String Term { get; set; }

        [ForeignKey("Students"), Column(Order = 3)]
        public String Institution_Code { get; set; }

        [ForeignKey("Students"), Column(Order = 4)]
        public String Service_Code { get; set; }

        public String Course_Code { get; set; }

        public string Grade { get; set; }

      

        public virtual Students Students { get; set; }

        //public virtual Course Course { get; set; }

      
    }
}