using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class Institution
    {
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        [MaxLength(200)]
        [Required]
        //[Key, Column(Order = 1)]
        [Key]
        public String Institution_Code { get; set; }

        [ForeignKey("Institution_Type")]
        public String InstitutionType_Code { get; set; }
        [MaxLength(200)]
        [Required]
        public String Institution_Name { get; set; }

        public String Data_Model { get; set; }

        public String InstitutionType_Code2 { get; set; }

         public string AccountStatus { get; set; }
 

        public virtual Institution_Type Institution_Type { get; set; }

        public virtual ICollection<Transaction> Transaction { get; set; }

        public virtual ICollection<Students> Students { get; set; }
    }
}