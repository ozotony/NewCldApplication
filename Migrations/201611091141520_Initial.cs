namespace WebApplication4.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
           
            AddColumn("dbo.fee_list", "Test", c => c.String(maxLength: 10));
        }
        
        public override void Down()
        {
            DropColumn("dbo.fee_list", "Test");
        }
    }
}
