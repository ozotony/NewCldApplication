namespace WebApplication4.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class tt2 : DbMigration
    {
        public override void Up()
        {
           
            
            CreateTable(
                "dbo.Test2",
                c => new
                    {
                        id = c.String(nullable: false, maxLength: 128),
                        name = c.String(),
                    })
                .PrimaryKey(t => t.id);
          
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Xrole_Granted");
            DropTable("dbo.xpartner");
            DropTable("dbo.xmember");
            DropTable("dbo.xbanker");
            DropTable("dbo.xagent");
            DropTable("dbo.Test2");
            DropTable("dbo.subagents2");
            DropTable("dbo.subagents");
            DropTable("dbo.state");
            DropTable("dbo.roles");
            DropTable("dbo.registrations");
            DropTable("dbo.registration2");
            DropTable("dbo.pwallet");
            DropTable("dbo.lga");
            DropTable("dbo.fee_list");
            DropTable("dbo.country");
            DropTable("dbo.Agent_Mail");
            DropTable("dbo.admin_lg");
            DropTable("dbo.address");
        }
    }
}
