using Administration;
using Auth;
using Microsoft.AspNetCore.Mvc;

namespace Venus.Controllers;

[Route("api/users")]
[ApiController]
[AuthFilter]
public class UserController(UserService userService) : ControllerBase {
  [HttpGet] public List<SiteUser> List() => userService.List();

  [HttpGet("groups")] public List<UserGroup> ListUserGroups() => userService.ListUserGroups();
}