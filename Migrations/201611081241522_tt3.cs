namespace WebApplication4.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class tt3 : DbMigration
    {
        public override void Up()
        {
            DropTable("dbo.Test2");
        }
        
        public override void Down()
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
    }
}
