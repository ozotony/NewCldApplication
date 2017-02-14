namespace WebApplication4.Model3
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;
    using Microsoft.AspNet.Identity.EntityFramework;
    using System.Threading.Tasks;
    using System.Security.Claims;
    using Microsoft.AspNet.Identity;

    public class MyIdentityRole2 : IdentityRole
    {
        public string Description { get; set; }
    }

    public class ApplicationUser4 : IdentityUser
    {


        public int LoginCount { get; set; }





        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser4> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }
    }

    public partial class Model4 : IdentityDbContext<ApplicationUser4>
    {
        public Model4()
            : base("name=Model4")
        {
        }

        public virtual DbSet<C__MigrationHistory> C__MigrationHistory { get; set; }
        public virtual DbSet<address> addresses { get; set; }
        public virtual DbSet<admin_lg> admin_lg { get; set; }
        public virtual DbSet<applicant> applicants { get; set; }
        public virtual DbSet<AspNetRole> AspNetRoles { get; set; }
        public virtual DbSet<AspNetUserClaim> AspNetUserClaims { get; set; }
        public virtual DbSet<AspNetUserLogin> AspNetUserLogins { get; set; }
        public virtual DbSet<AspNetUser> AspNetUsers { get; set; }
        public virtual DbSet<country> countries { get; set; }
        public virtual DbSet<fee_details> fee_details { get; set; }
        public virtual DbSet<fee_list> fee_list { get; set; }
        public virtual DbSet<hwallet> hwallets { get; set; }
        public virtual DbSet<InterSwitchPostField> InterSwitchPostFields { get; set; }
        public virtual DbSet<lga> lgas { get; set; }
        public virtual DbSet<p_ratio> p_ratio { get; set; }
        public virtual DbSet<pwallet> pwallets { get; set; }
        public virtual DbSet<role> roles { get; set; }
        public virtual DbSet<scard> scards { get; set; }
        public virtual DbSet<state> states { get; set; }
        public virtual DbSet<twallet> twallets { get; set; }
        public virtual DbSet<xadmin> xadmins { get; set; }
        public virtual DbSet<xagent> xagents { get; set; }
        public virtual DbSet<xbanker> xbankers { get; set; }
        public virtual DbSet<xmember> xmembers { get; set; }
        public virtual DbSet<xpartner> xpartners { get; set; }
        public virtual DbSet<fee_listx> fee_listx { get; set; }
        public virtual DbSet<InterSwitchPostFields2> InterSwitchPostFields2 { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
