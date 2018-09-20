using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;

namespace Experiments.Features.UsersApi
{
    [Route("[controller]")]
    [ApiController]
    public class UserController :ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> List()
        {
            var users = new List<User>
            {
                new User
                {
                    Id = 1,
                    Name = "Ankur",
                    Company = "Awesome Company",
                    Summary = "36 / Lead Developer"
                },
                new User
                {
                    Id = 2,
                    Name = "Sheel ",
                    Company = "New Company",
                    Summary = "32 / Senior Engineer"
                }
            };

            await Task.Delay(1000);
            return Ok(users);
        }
    }
}
