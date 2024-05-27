#nullable disable
using Microsoft.EntityFrameworkCore;

public class MarketplaceContext : DbContext
{
    public MarketplaceContext(DbContextOptions<MarketplaceContext> options): base(options){}

    //ADD WHAT ITEMS WE HAVE HERE
    public DbSet<marketplace_api.Models.Product> Product {get; set;}
    public DbSet<marketplace_api.Models.Package> Package {get; set;}
    // public DbSet<marketplace_api.Models.PackageProduct> PackageProduct {get; set;}

}