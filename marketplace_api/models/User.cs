using System.ComponentModel.DataAnnotations;

namespace marketplace_api.Models{
    public class User{
        [Key]
        public int UserID { get; set; }
        public string Username { get; set; } = "";
        public string Password { get; set; } = "";
        public string Email { get; set; } = "";
        public List<string>? BoughtItems { get; set; } = [];
    }
}