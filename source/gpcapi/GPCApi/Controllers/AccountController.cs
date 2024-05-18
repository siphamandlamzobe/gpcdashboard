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

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest loginRequest)
    {
        var authenticated = await _userService.AuthenticateUser(loginRequest.Email, loginRequest.Password);
                
        if (authenticated)
        {
            return Ok(_authenticationService.GenerateJwtToken(loginRequest.Email));
        }
        
        return BadRequest("Invalid email or password");
    }
    
    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterRequest registerRequest)
    {
        var isUserCreated = await _userService.CreateUser(registerRequest.Email, registerRequest.Password);
                
        if (isUserCreated)
        {
            return Ok(new { message = "User created successfully" });
        }
        
        return BadRequest("Error Occured");
    }
}
