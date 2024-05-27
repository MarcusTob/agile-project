using System.ComponentModel.DataAnnotations;
namespace marketplace_api.Models{
    public class Product{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string Description { get; set; } = "";
    public double Price { get; set; }
    public string Category { get; set; } = "";
    public string Specifications { get; set; } = "";
    public string Creator { get; set;} = "";
    public int nrOfReviews { get; set; } = 0;
    public double Rating { get; set; } = 0.0;
    public List<string> Tags { get; set; } = new List<string>();
    }
}


