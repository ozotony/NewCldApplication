namespace WebApplication4.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial4 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetRoles", "Description", c => c.String());
            AddColumn("dbo.AspNetRoles", "Discriminator", c => c.String(nullable: false, maxLength: 128));
            AddColumn("dbo.AspNetUsers", "LogoPath", c => c.String());
            AddColumn("dbo.AspNetUsers", "Security_Question", c => c.String());
            AddColumn("dbo.AspNetUsers", "Security_Answer", c => c.String());
            AddColumn("dbo.AspNetUsers", "First_Name", c => c.String());
            AddColumn("dbo.AspNetUsers", "Surname_Name", c => c.String());
            AddColumn("dbo.AspNetUsers", "Institution_Code", c => c.String());
            AddColumn("dbo.AspNetUsers", "Subscription_Type", c => c.String());
            AddColumn("dbo.AspNetUsers", "changepassword", c => c.Boolean());
            AddColumn("dbo.AspNetUsers", "AccountStatus", c => c.String());
            AddColumn("dbo.AspNetUsers", "Discriminator", c => c.String(nullable: false, maxLength: 128));
        }
        
        public override void Down()
        {
            DropColumn("dbo.AspNetUsers", "Discriminator");
            DropColumn("dbo.AspNetUsers", "AccountStatus");
            DropColumn("dbo.AspNetUsers", "changepassword");
            DropColumn("dbo.AspNetUsers", "Subscription_Type");
            DropColumn("dbo.AspNetUsers", "Institution_Code");
            DropColumn("dbo.AspNetUsers", "Surname_Name");
            DropColumn("dbo.AspNetUsers", "First_Name");
            DropColumn("dbo.AspNetUsers", "Security_Answer");
            DropColumn("dbo.AspNetUsers", "Security_Question");
            DropColumn("dbo.AspNetUsers", "LogoPath");
            DropColumn("dbo.AspNetRoles", "Discriminator");
            DropColumn("dbo.AspNetRoles", "Description");
        }
    }
}
