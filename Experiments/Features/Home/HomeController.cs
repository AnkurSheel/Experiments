using Microsoft.AspNetCore.Mvc;

namespace Experiments.Features.Home
{
    public class HomeController : Controller
    {
        [Route("~/")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
