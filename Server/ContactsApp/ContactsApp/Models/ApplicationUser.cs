using Microsoft.AspNetCore.Identity;

namespace ContactsApp.Models
{
    public class ApplicationUser: IdentityUser
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public IEnumerable<Contact> Contacts { get; set; }
    }
}
