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
    //Products
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
    [HttpPost("products")]
    public async Task<ActionResult<Product>> Post(Product newProduct) {
        context.Product.Add(newProduct);
        await context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetProducts), new { id = newProduct.ProductID }, newProduct);
    }
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
    [HttpDelete("products/{id}")]
    public async Task<ActionResult<Product>> DeleteProduct(int id) {
        Product? product = await context.Product.FindAsync(id);
        if (product != null) {
            context.Product.Remove(product);
            await context.SaveChangesAsync();
        }
        return NoContent();
    }

    //Packages
    [HttpGet("packages")]
    public async Task<List<Package>> GetPackages() {
        List<Package> packages = await context.Package.ToListAsync();
        return packages;
    }
    [HttpGet("packages/{id}")]
    public async Task<ActionResult<Product>> GetPackageByID(int id) {
        Package? package = await context.Package.FindAsync(id);
        if (package != null) {
            return Ok(package);
        } else{
            return NotFound();
        }
    }
    [HttpPost("packages")]
    public async Task<ActionResult<Package>> Post(Package newPackage) {
        context.Package.Add(newPackage);
        await context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetPackages), new { id = newPackage.PackageID }, newPackage);
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
    [HttpDelete("package/{id}")]
    public async Task<ActionResult<Package>> DeletePackage(int id) {
        Package? package = await context.Package.FindAsync(id);
        if (package != null) {
            context.Package.Remove(package);
            await context.SaveChangesAsync();
        }
        return NoContent();
    }

    //User
    [HttpGet("user/{id}")]
    public async Task<ActionResult<User>> GetUserByID(int id) {
        User? user = await context.User.FindAsync(id);
        if (user != null) {
            return Ok(user);
        } else{
            return NotFound();
        }
    }
    [HttpPost("user")]
    public async Task<ActionResult<User>> Post(User newUser) {
        context.User.Add(newUser);
        await context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetUserByID), new { id = newUser.UserID }, newUser);
    }
    [HttpPost("user/login")]
    public async Task<ActionResult<User>> Login(User user) {
        User? userToLogin = await context.User.FirstOrDefaultAsync(u => u.Username == user.Username && u.Password == user.Password);
        if (userToLogin != null) {
            return Ok(userToLogin);
        } else {
            return NotFound();
        }
    }
    [HttpDelete("user/{id}")]
    public async Task<ActionResult<User>> DeleteUser(int id) {
        User? user = await context.User.FindAsync(id);
        if (user != null) {
            context.User.Remove(user);
            await context.SaveChangesAsync();
        }
        return NoContent();
    }


    //ShoppingCart
    [HttpGet("shoppingCart/{id}")]
    public async Task<ActionResult<ShoppingCart>> GetShoppingCart(int id) {
        ShoppingCart? shoppingCart = await context.ShoppingCart.FindAsync(id);
        if (shoppingCart != null) {
            return Ok(shoppingCart);
        } else {
            return NotFound();
        }
    }   
    [HttpPost("shoppingCart/initializeCart")]
    public async Task<ActionResult<ShoppingCart>> InitializeCart(int userID) {
    var user = await context.User.FindAsync(userID);

    if (user == null) {
        return NotFound();
    }

    var shoppingCart = new ShoppingCart {
        UserID = userID,
    };

    context.ShoppingCart.Add(shoppingCart);
    await context.SaveChangesAsync();

    return CreatedAtAction(nameof(GetShoppingCart), new { id = shoppingCart.CartID }, shoppingCart);
}
    [HttpPost("shoppingCart/addToCart")]
    public async Task<ActionResult<ShoppingCart>> AddToCart(int userID, int productID) {
        var user = await context.User.FindAsync(userID);
        var product = await context.Product.FindAsync(productID);

        if (user == null || product == null) {
            return NotFound();
        }

        var shoppingCart = new ShoppingCart {
            UserID = userID,
            ProductID = productID,
        };
        context.ShoppingCart.Add(shoppingCart);
        await context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetShoppingCart), new { id = shoppingCart.CartID }, shoppingCart);

    }
}