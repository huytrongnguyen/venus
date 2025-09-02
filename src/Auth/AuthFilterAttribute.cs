using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Shared;

namespace Auth;

[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
public class AuthFilterAttribute : Attribute, IAuthorizationFilter {
  public void OnAuthorization(AuthorizationFilterContext context) {
    var user = context.HttpContext.Items["User"];

    if (user == null || ((AuthUser)user).Username.IsEmpty()) {
      // not logged in
      context.Result = new JsonResult(new { message = "Unauthorized" }) { StatusCode = StatusCodes.Status401Unauthorized };
    }
  }
}