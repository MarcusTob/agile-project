using System.ComponentModel.DataAnnotations;
namespace marketplace_api.Models{
    public class Package{
    [Key]
    public int PackageID { get; set; }
    public string Name { get; set; } = "";
    public string Description { get; set; } = "";
    public double Price { get; set; }
    public string Category { get; set; } = "";
    public int NrOfReviews { get; set; } = 0;
    public double Rating { get; set; } = 0.0;
    public List<string> Tags { get; set; } = new List<string>();
    public string PackageImage { get; set; } = "";
    public string PackageImage2 { get; set; } = "";
    public string PackageImage3 { get; set; } = "";

    // public virtual ICollection<PackageProduct> PackageProducts { get; set; } 
    }
}