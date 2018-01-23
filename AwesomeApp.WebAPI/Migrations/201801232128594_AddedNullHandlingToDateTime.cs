namespace AwesomeApp.WebAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedNullHandlingToDateTime : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Todoes", "DateAdded", c => c.DateTime());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Todoes", "DateAdded", c => c.DateTime(nullable: false));
        }
    }
}
