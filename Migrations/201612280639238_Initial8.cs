namespace WebApplication4.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial8 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetRoles", "Description1", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.AspNetRoles", "Description1");
        }
    }
}
