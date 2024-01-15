using Microsoft.AspNetCore.Mvc;

namespace GPCApi.Controllers
{
    [Route("/")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult> GetServiceReports()
        {
            return Ok(new { message = "live..."});
        }
    }
}
