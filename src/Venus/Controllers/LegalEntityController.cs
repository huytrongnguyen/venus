using Auth;
using Microsoft.AspNetCore.Mvc;
using Shared;
using MasterData.Foundation;

namespace Venus.Controllers;

[Route("api/entities")]
[ApiController]
[AuthFilter]
public class LegalEntityController(LegalEntityService entityService) : ControllerBase
{
  [HttpGet] public RecordPage<LegalEntityRecord> List(LegalEntitySearchCriteria criteria, int page, int size, string sort) => entityService.List(criteria, page, size, sort);
  [HttpGet("{id}")] public LegalEntityRecord Get(string id) => entityService.Get(id);
  [HttpPost] public LegalEntityRecord Create(LegalEntityRequest request) => entityService.Create(request);
  [HttpPatch("{id}")] public LegalEntityRecord Update(string id, LegalEntityRequest request) => entityService.Update(id, request);
  [HttpGet("{id}/payment-accounts")] public List<PaymentAccountRecord> ListPaymentAccount(string id) => entityService.ListPaymentAccount(id);
  [HttpGet("{id}/payment-accounts/{paymentAccountId}")] public PaymentAccountRecord Get(string id, string paymentAccountId) => entityService.GetPaymentAccount(id, paymentAccountId);
  [HttpPost("{id}/payment-accounts")] public PaymentAccountRecord Create(string id, PaymentAccountRequest request) => entityService.CreatePaymentAccount(id, request);
}