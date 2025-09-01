using Auth;
using Microsoft.AspNetCore.Mvc;

namespace Venus.Controllers;

[Route("api/chat")]
[ApiController]
[AuthFilter]
public class ChatController() : ControllerBase { }