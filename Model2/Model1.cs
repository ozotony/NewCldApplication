namespace WebApplication4.Model2
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using System.Threading.Tasks;
    using System.Security.Claims;
    using System.ComponentModel.DataAnnotations;

    public class MyIdentityRole : IdentityRole
    {
        public string Description { get; set; }
    }

    public  class ApplicationUser3 : IdentityUser
    {


        public int  LoginCount { get; set; }





        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser3> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }
    }

   // public partial class Model1 : IdentityDbContext<ApplicationUser>
     public class Model1 : IdentityDbContext<ApplicationUser3>
    {
        public Model1()
            : base("name=Model1")
        {
        }

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

        public DbSet<TopMenu> TopMenu { get; set; }

        public DbSet<RolesPriviledges> RolesPriviledges { get; set; }



        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
             base.OnModelCreating(modelBuilder);

           
        }

        public static Model1 Create()
        {
            return new Model1();
        }
    }
}
