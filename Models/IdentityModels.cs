using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using System.Data.Entity;

namespace WebApplication4.Models
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit http://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser
    {
      
        public string LogoPath { get; set; }

        public string Security_Question { get; set; }

        public string Security_Answer { get; set; }

        public string First_Name { get; set; }

        public string Surname_Name { get; set; }

        public string Institution_Code { get; set; }

        public string Subscription_Type { get; set; }


        public bool  changepassword { get; set; }


        public string AccountStatus { get; set; }






        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }
    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<Book> Books { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Products> Products { get; set; }

        public DbSet<Bank> Banks { get; set; }

        public DbSet<AdditionalFee> AdditionalFee { get; set; }



        public DbSet<Subscription> Subscription { get; set; }
        public DbSet<Subscription_Type> Subscription_Type { get; set; }
        public DbSet<Clients> Clients { get; set; }

        public DbSet<Institution_Type> Institution_Type { get; set; }

        public DbSet<Institution> Institutions { get; set; }

        public DbSet<Transaction> Transaction { get; set; }

        public DbSet<Subscription_Details> Subscription_Details { get; set; }

        public DbSet<Partner_Organisation> Partner_Organisation { get; set; }

        public DbSet<Course> Course { get; set; }

        public DbSet<Students> Students { get; set; }

        public DbSet<Results> Results { get; set; }

        public DbSet<User_Detail> User_Detail { get; set; }

        public DbSet<Services> Services { get; set; }

        public DbSet<TopMenu> TopMenu { get; set; }

        public DbSet<RolesPriviledges> RolesPriviledges { get; set; }


        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
            
        }
        
        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }
    }
}