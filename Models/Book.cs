using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    [Table("Books")] 
    public class Book
    {
        [Key] // Primary key
        public int BookID { get; set; }
        public string BookName { get; set; }
        public string ISBN { get; set; }

        // This is to maintain the many reviews associated with a book entity
        public virtual ICollection<Review> Reviews { get; set; }
    }
}