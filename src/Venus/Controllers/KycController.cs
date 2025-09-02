using Auth;
using Microsoft.AspNetCore.Mvc;
using Solutions;

namespace Venus.Controllers;

[Route("api/kyc")]
[ApiController]
[AuthFilter]
public class KycController(KycService kycService) : ControllerBase { }