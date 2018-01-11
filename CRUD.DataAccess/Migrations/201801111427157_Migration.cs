namespace CRUD.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Migration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Articles",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Name = c.String(maxLength: 50),
                        Year = c.String(maxLength: 50),
                        AuthorId = c.Guid(),
                        JournalId = c.Guid(),
                        LastUpdateDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Authors", t => t.AuthorId)
                .ForeignKey("dbo.Journals", t => t.JournalId)
                .Index(t => t.AuthorId)
                .Index(t => t.JournalId);
            
            CreateTable(
                "dbo.Authors",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        FirstName = c.String(maxLength: 50),
                        LastName = c.String(maxLength: 50),
                        Patronymic = c.String(maxLength: 50),
                        Abbreviated = c.String(maxLength: 50),
                        LastUpdateDate = c.DateTime(nullable: false),
                        Book_Id = c.Guid(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Books", t => t.Book_Id)
                .Index(t => t.Book_Id);
            
            CreateTable(
                "dbo.Books",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Name = c.String(),
                        Year = c.String(),
                        PublisherId = c.Guid(),
                        LastUpdateDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Publishers", t => t.PublisherId)
                .Index(t => t.PublisherId);
            
            CreateTable(
                "dbo.BooksAuthors",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        AuthorId = c.Guid(nullable: false),
                        BookId = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Journals",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Name = c.String(),
                        Date = c.String(),
                        PublisherId = c.Guid(),
                        LastUpdateDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Publishers", t => t.PublisherId)
                .Index(t => t.PublisherId);
            
            CreateTable(
                "dbo.Publishers",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Name = c.String(),
                        LastUpdateDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Journals", "PublisherId", "dbo.Publishers");
            DropForeignKey("dbo.Books", "PublisherId", "dbo.Publishers");
            DropForeignKey("dbo.Articles", "JournalId", "dbo.Journals");
            DropForeignKey("dbo.Authors", "Book_Id", "dbo.Books");
            DropForeignKey("dbo.Articles", "AuthorId", "dbo.Authors");
            DropIndex("dbo.Journals", new[] { "PublisherId" });
            DropIndex("dbo.Books", new[] { "PublisherId" });
            DropIndex("dbo.Authors", new[] { "Book_Id" });
            DropIndex("dbo.Articles", new[] { "JournalId" });
            DropIndex("dbo.Articles", new[] { "AuthorId" });
            DropTable("dbo.Publishers");
            DropTable("dbo.Journals");
            DropTable("dbo.BooksAuthors");
            DropTable("dbo.Books");
            DropTable("dbo.Authors");
            DropTable("dbo.Articles");
        }
    }
}
