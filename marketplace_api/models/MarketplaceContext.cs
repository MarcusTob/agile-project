#nullable disable
using Microsoft.EntityFrameworkCore;
using marketplace_api.Models;

public class MarketplaceContext : DbContext
{
    public MarketplaceContext(DbContextOptions<MarketplaceContext> options): base(options){}

    //ADD WHAT ITEMS WE HAVE HERE
    public DbSet<marketplace_api.Models.Product> Product {get; set;}
    public DbSet<marketplace_api.Models.Package> Package {get; set;}
    public DbSet<marketplace_api.Models.User> User {get; set;}
    
    public DbSet<marketplace_api.Models.ShoppingCart> ShoppingCart {get; set;}

    protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<ShoppingCart>()
        .HasOne(sc => sc.User)
        .WithOne(u => u.ShoppingCart)
        .HasForeignKey<ShoppingCart>(sc => sc.UserID);

    modelBuilder.Entity<ShoppingCart>()
        .HasOne(sc => sc.Product)
        .WithMany(p => p.ShoppingCarts)
        .HasForeignKey(sc => sc.ProductID);
}

}
