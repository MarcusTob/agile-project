using System.ComponentModel.DataAnnotations;

namespace marketplace_api.Models{
    public class ShoppingCart
    {
        [Key]
        public int CartID { get; set; }
        public int UserID { get; set; }
        public int ProductID { get; set; }

        // Navigation properties
        public User? User { get; set; }
        public Product? Product { get; set; }
    }
}