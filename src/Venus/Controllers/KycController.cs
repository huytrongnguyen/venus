using Auth;
using Microsoft.AspNetCore.Mvc;

namespace Venus.Controllers;

[Route("api/kyc")]
[ApiController]
[AuthFilter]
public class KycController() : ControllerBase { }