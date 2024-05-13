using GPCApi.Models;
using Microsoft.AspNetCore.Mvc;
using GPCApi.Service.Auth;
using GPCApi.Service.Users;


namespace GPCApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AccountController : ControllerBase
{
    private readonly IAuthenticationService _authenticationService;
    private readonly IUserService _userService;
    public AccountController(IAuthenticationService authenticationService, IUserService userService)
    {
        _authenticationService = authenticationService;
        _userService = userService;
    }

    [HttpPost]
    public IActionResult Post([FromBody] LoginRequest loginRequest)
    {
        var authenticated = _userService.AuthenticateUser(loginRequest.Email, loginRequest.Password);
                
        if (authenticated)
        {
            return Ok(_authenticationService.GenerateJwtToken(loginRequest.Email));
        }
        
        return BadRequest("Invalid username/email or password");
    }
}
