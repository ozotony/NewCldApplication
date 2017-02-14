namespace WebApplication4.Migrations3
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration2 : DbMigrationsConfiguration<WebApplication4.Model3.Model4>
    {
        public Configuration2()
        {
            AutomaticMigrationsEnabled = true;
            MigrationsDirectory = @"Migrations3";
            ContextKey = "WebApplication4.Model3.Model4";
        }

        protected override void Seed(WebApplication4.Model3.Model4 context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
        }
    }
}
