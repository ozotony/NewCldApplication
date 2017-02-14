using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using System.Data.Entity;

namespace WebApplication4.Model2
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit http://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser2 : IdentityUser
    {
      
        




        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser2> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }
    }

    public class ApplicationDbContext2 : IdentityDbContext<ApplicationUser2>
    {
        public virtual DbSet<address> addresses { get; set; }
        public virtual DbSet<admin_lg> admin_lg { get; set; }
        public virtual DbSet<Agent_Mail> Agent_Mail { get; set; }


        public virtual DbSet<country> countries { get; set; }
        public virtual DbSet<fee_list> fee_list { get; set; }
        public virtual DbSet<lga> lgas { get; set; }
        public virtual DbSet<pwallet> pwallets { get; set; }
        public virtual DbSet<registration> registrations { get; set; }
        public virtual DbSet<role> roles { get; set; }
        public virtual DbSet<state> states { get; set; }
        public virtual DbSet<subagent> subagents { get; set; }
        public virtual DbSet<xagent> xagents { get; set; }
        public virtual DbSet<xmember> xmembers { get; set; }
        public virtual DbSet<Xrole_Granted> Xrole_Granted { get; set; }
        public virtual DbSet<registration2> registration2 { get; set; }
        public virtual DbSet<subagents2> subagents2 { get; set; }
        public virtual DbSet<xbanker> xbankers { get; set; }
        public virtual DbSet<xpartner> xpartners { get; set; }


        public ApplicationDbContext2()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
            
        }
        
        public static ApplicationDbContext2 Create()
        {
            return new ApplicationDbContext2();
        }
    }
}