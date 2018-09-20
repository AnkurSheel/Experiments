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
                    Name = "User1",
                    Company = "Company 1",
                    Summary = "36 / Lead Developer"
                },
                new User
                {
                    Id = 2,
                    Name = "User2",
                    Company = "Company 2",
                    Summary = "36 /  Developer"
                },
                new User
                {
                    Id = 3,
                    Name = "User3",
                    Company = "Company 3",
                    Summary = "36 / Lead Developer"
                },
                new User
                {
                    Id = 4,
                    Name = "User5",
                    Company = "Company 4",
                    Summary = "36 / Developer"
                },
            };

            await Task.Delay(1000);
            return Ok(users);
        }
    }
}
