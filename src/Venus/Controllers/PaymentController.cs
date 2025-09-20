using Auth;
using Solutions;
using Microsoft.AspNetCore.Mvc;
using Shared;

namespace Venus.Controllers;

[Route("api/payments")]
[ApiController]
[AuthFilter]
public class PaymentController(PaymentService paymentService) : ControllerBase {
  [HttpGet] public RecordPage<PaymentRecord> List(PaymentSearchCriteria criteria, int page, int size, string sort) => paymentService.List(criteria, page, size, sort);
  [HttpGet("{id}")] public PaymentRecord Get(string id) => paymentService.Get(id);
  [HttpPost] public PaymentRecord Create(PaymentRequest request) => paymentService.Create(request);
  [HttpPatch("{id}")] public PaymentRecord Update(string id, PaymentRequest request) => paymentService.Update(id, request);
}