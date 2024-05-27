using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using marketplace_api.Models;

namespace marketplace_api.Controllers;

[ApiController]
[Route("[controller]")]
public class MarketplaceController : ControllerBase
{
    private readonly MarketplaceContext context;
    public MarketplaceController(MarketplaceContext _context)
    {
        context = _context;
    }

    //CRUD OPERATIONS
    //GET
    [HttpGet("products")]
    public async Task<List<Product>> GetProducts() {
        List<Product> products = await context.Product.ToListAsync();
        return products;
    }

    //POST

    //UPDATE

    //DELETE
}