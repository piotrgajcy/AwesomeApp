namespace AwesomeApp.WebAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ConvertIdByteToInt : DbMigration
    {
        public override void Up()
        {
            DropPrimaryKey("dbo.Todoes");
            AlterColumn("dbo.Todoes", "Id", c => c.Int(nullable: false, identity: true));
            AddPrimaryKey("dbo.Todoes", "Id");
        }
        
        public override void Down()
        {
            DropPrimaryKey("dbo.Todoes");
            AlterColumn("dbo.Todoes", "Id", c => c.Byte(nullable: false));
            AddPrimaryKey("dbo.Todoes", "Id");
        }
    }
}
