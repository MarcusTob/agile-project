using System.ComponentModel.DataAnnotations;

namespace marketplace_api.Models{
    public class ShoppingCart
    {
        [Key]
        public int CartID { get; set; }
        public int UserID { get; set; }
        public ICollection<int> ProductID { get; set; }
        

        
        public User User { get; set; } = null!;
        public Product Product { get; set; } = null!;
    }
}