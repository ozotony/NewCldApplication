namespace WebApplication4.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial1 : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.fee_list", "Test");
        }
        
        public override void Down()
        {
            AddColumn("dbo.fee_list", "Test", c => c.String(maxLength: 10));
        }
    }
}
