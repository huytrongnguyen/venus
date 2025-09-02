using Auth;
using Microsoft.AspNetCore.Mvc;
using Solutions;

namespace Venus.Controllers;

[Route("api/chat")]
[ApiController]
[AuthFilter]
public class ChatController(ChatService chatService) : ControllerBase { }