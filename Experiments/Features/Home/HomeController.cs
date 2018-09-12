using Microsoft.AspNetCore.Mvc;

namespace Experiments.Features.Home
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
