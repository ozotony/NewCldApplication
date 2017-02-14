namespace WebApplication4.Migrations3
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial1 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.fee_details", "twalletID", c => c.Long(nullable: false));
            CreateIndex("dbo.fee_details", "twalletID");
            AddForeignKey("dbo.fee_details", "twalletID", "dbo.twallet", "xid", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.fee_details", "twalletID", "dbo.twallet");
            DropIndex("dbo.fee_details", new[] { "twalletID" });
            AlterColumn("dbo.fee_details", "twalletID", c => c.String());
        }
    }
}
