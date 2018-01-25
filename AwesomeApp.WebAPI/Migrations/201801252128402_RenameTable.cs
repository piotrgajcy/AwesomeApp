namespace AwesomeApp.WebAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RenameTable : DbMigration
    {
        public override void Up()
        {
            RenameTable("Todos", "Todoes");
        }
        
        public override void Down()
        {
            RenameTable("Todos", "Todoes");
        }
    }
}
