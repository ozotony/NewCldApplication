namespace WebApplication4.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class tt4 : DbMigration
    {
        public override void Up()
        {
           
            CreateTable(
                "dbo.AspNetRoles",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Name, unique: true, name: "RoleNameIndex");
            
            CreateTable(
                "dbo.AspNetUserRoles",
                c => new
                    {
                        UserId = c.String(nullable: false, maxLength: 128),
                        RoleId = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.UserId, t.RoleId })
                .ForeignKey("dbo.AspNetRoles", t => t.RoleId, cascadeDelete: true)
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId)
                .Index(t => t.RoleId);
            
            CreateTable(
                "dbo.AspNetUsers",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Email = c.String(maxLength: 256),
                        EmailConfirmed = c.Boolean(nullable: false),
                        PasswordHash = c.String(),
                        SecurityStamp = c.String(),
                        PhoneNumber = c.String(),
                        PhoneNumberConfirmed = c.Boolean(nullable: false),
                        TwoFactorEnabled = c.Boolean(nullable: false),
                        LockoutEndDateUtc = c.DateTime(),
                        LockoutEnabled = c.Boolean(nullable: false),
                        AccessFailedCount = c.Int(nullable: false),
                        UserName = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.UserName, unique: true, name: "UserNameIndex");
            
            CreateTable(
                "dbo.AspNetUserClaims",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.String(nullable: false, maxLength: 128),
                        ClaimType = c.String(),
                        ClaimValue = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.AspNetUserLogins",
                c => new
                    {
                        LoginProvider = c.String(nullable: false, maxLength: 128),
                        ProviderKey = c.String(nullable: false, maxLength: 128),
                        UserId = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.LoginProvider, t.ProviderKey, t.UserId })
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
           
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.AspNetUserRoles", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserLogins", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserClaims", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserRoles", "RoleId", "dbo.AspNetRoles");
            DropIndex("dbo.AspNetUserLogins", new[] { "UserId" });
            DropIndex("dbo.AspNetUserClaims", new[] { "UserId" });
            DropIndex("dbo.AspNetUsers", "UserNameIndex");
            DropIndex("dbo.AspNetUserRoles", new[] { "RoleId" });
            DropIndex("dbo.AspNetUserRoles", new[] { "UserId" });
            DropIndex("dbo.AspNetRoles", "RoleNameIndex");
            DropPrimaryKey("dbo.Xrole_Granted");
            AlterColumn("dbo.Xrole_Granted", "Role_Name", c => c.String(nullable: false, maxLength: 50, unicode: false));
            AlterColumn("dbo.Xrole_Granted", "Agent_Code", c => c.String(nullable: false, maxLength: 50, unicode: false));
            AlterColumn("dbo.registrations", "xsync", c => c.String(unicode: false));
            AlterColumn("dbo.registrations", "xvisible", c => c.String(unicode: false));
            AlterColumn("dbo.registrations", "xstatus", c => c.String(unicode: false));
            AlterColumn("dbo.registrations", "xreg_date", c => c.String(unicode: false));
            AlterColumn("dbo.registrations", "CompanyWebsite", c => c.String(unicode: false));
            AlterColumn("dbo.registrations", "ContactPersonPhone", c => c.String(unicode: false));
            AlterColumn("dbo.registrations", "ContactPerson", c => c.String(unicode: false));
            AlterColumn("dbo.registrations", "CompanyName", c => c.String(unicode: false));
            AlterColumn("dbo.registrations", "PhoneNumber", c => c.String(unicode: false));
            AlterColumn("dbo.registrations", "Nationality", c => c.String(unicode: false));
            AlterColumn("dbo.registrations", "IncorporatedDate", c => c.String(unicode: false));
            AlterColumn("dbo.registrations", "DateOfBrith", c => c.String(unicode: false));
            AlterColumn("dbo.registrations", "xpassword", c => c.String(unicode: false));
            AlterColumn("dbo.registrations", "Email", c => c.String(unicode: false));
            AlterColumn("dbo.registrations", "Surname", c => c.String(unicode: false));
            AlterColumn("dbo.registrations", "Firstname", c => c.String(unicode: false));
            AlterColumn("dbo.registrations", "Sys_ID", c => c.String(unicode: false));
            AlterColumn("dbo.registrations", "AccrediationType", c => c.String(unicode: false));
            AlterColumn("dbo.lga", "stateID", c => c.String(maxLength: 10, fixedLength: true));
            AlterColumn("dbo.country", "code", c => c.String(maxLength: 10, fixedLength: true));
            AlterColumn("dbo.Agent_Mail", "Agent_Code", c => c.String(maxLength: 50, unicode: false));
            AlterColumn("dbo.Agent_Mail", "Message", c => c.String(maxLength: 500, unicode: false));
            AlterColumn("dbo.Agent_Mail", "Subject", c => c.String(nullable: false, maxLength: 500, unicode: false));
            AlterColumn("dbo.admin_lg", "log_time", c => c.String(maxLength: 200, unicode: false));
            AlterColumn("dbo.admin_lg", "log_date", c => c.String(maxLength: 200, unicode: false));
            AlterColumn("dbo.admin_lg", "adminID", c => c.String(maxLength: 200, unicode: false));
            DropTable("dbo.AspNetUserLogins");
            DropTable("dbo.AspNetUserClaims");
            DropTable("dbo.AspNetUsers");
            DropTable("dbo.AspNetUserRoles");
            DropTable("dbo.AspNetRoles");
            AddPrimaryKey("dbo.Xrole_Granted", new[] { "Agent_Code", "Role_Name" });
        }
    }
}
