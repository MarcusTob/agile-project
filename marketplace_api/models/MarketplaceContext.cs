#nullable disable
using Microsoft.EntityFrameworkCore;

public class MarketplaceContext : DbContext
{
    public MarketplaceContext(DbContextOptions<MarketplaceContext> options): base(options){}

    //ADD WHAT ITEMS WE HAVE HERE
    public DbSet<marketplace_api.Models.Product> Product {get; set;}


}