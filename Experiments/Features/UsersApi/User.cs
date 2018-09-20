using Microsoft.AspNetCore.Mvc;

namespace Experiments.Features.UsersApi
{
    public class User
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Company { get; set; }

        public string Summary { get; set; }
    }
}