using GPCApi.Models;
using Microsoft.AspNetCore.Mvc;
using GPCApi.Service.Auth;
using GPCApi.Service.Dto;
using GPCApi.Service.Users;
using Mapster;

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
        var authenticated = loginRequest.Password != null && loginRequest.Email != null && await _userService.AuthenticateUser(loginRequest.Email, loginRequest.Password);

        if (!authenticated) return BadRequest("Invalid email or password");
        
        return Ok(_authenticationService.GenerateJwtToken(loginRequest.Email));
    }
    
    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterRequest registerRequest)
    {
        var registerUser = registerRequest.Adapt<RegisterUser>();
        var isUserCreated = await _userService.CreateUser(registerUser);
                
        if (!isUserCreated) return BadRequest("Error has occured. User not created.");
        
        return Ok(new { message = "User created successfully" });
    }
}
