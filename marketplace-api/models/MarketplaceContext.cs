#nullable disable
using Microsoft.EntityFrameworkCore;

public class MarketplaceContext : DbContext
{
    public MarketplaceContext(DbContextOptions<MarketplaceContext> options): base(options){}

    //ADD WHAT ITEMS WE HAVE HERE      public DbSet<f1_api.Models.Driver> Driver {get; set;}

    
}