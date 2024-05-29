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
    [HttpGet("products/{id}")]
    public async Task<ActionResult<Product>> GetProductByID(int id) {
        Product? product = await context.Product.FindAsync(id);
        if (product != null) {
            return Ok(product);
        } else{
            return NotFound();
        }
    }
    [HttpGet("packages")]
    public async Task<List<Package>> GetPackages() {
        List<Package> packages = await context.Package.ToListAsync();
        return packages;
    }

    //POST
    [HttpPost("products")]
    public async Task<ActionResult<Product>> Post(Product newProduct) {
        context.Product.Add(newProduct);
        await context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetProducts), new { id = newProduct.ProductID }, newProduct);
    }
    [HttpPost("packages")]
    public async Task<ActionResult<Package>> Post(Package newPackage) {
        context.Package.Add(newPackage);
        await context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetPackages), new { id = newPackage.PackageID }, newPackage);
    }

    //UPDATE
    [HttpPut("products/{id}")]
    public async Task<ActionResult<Product>> PutProduct(int id, Product updatedProduct) {
        Product? productToUpdate = await context.Product.FindAsync(id);
        if (productToUpdate == null) {
            return NotFound();
        }
        context.Entry(productToUpdate).CurrentValues.SetValues(updatedProduct);
        context.Entry(productToUpdate).State = EntityState.Modified;
        await context.SaveChangesAsync();
        return NoContent();
    }
    [HttpPut("packages/{id}")]
    public async Task<ActionResult<Package>> PutPackage(int id, Package updatedPackage) {
        Package? packageToUpdate = await context.Package.FindAsync(id);
        if (packageToUpdate == null) {
            return NotFound();
        }
        context.Entry(packageToUpdate).CurrentValues.SetValues(updatedPackage);
        context.Entry(packageToUpdate).State = EntityState.Modified;
        await context.SaveChangesAsync();
        return NoContent();
    }

    //DELETE
    [HttpDelete("products/{id}")]
    public async Task<ActionResult<Product>> DeleteProduct(int id) {
        Product? product = await context.Product.FindAsync(id);
        if (product != null) {
            context.Product.Remove(product);
            await context.SaveChangesAsync();
        }
        return NoContent();
    }
    [HttpDelete("package/{id}")]
    public async Task<ActionResult<Package>> DeletePackage(int id) {
        Package? package = await context.Package.FindAsync(id);
        if (package != null) {
            context.Package.Remove(package);
            await context.SaveChangesAsync();
        }
        return NoContent();
    }
}