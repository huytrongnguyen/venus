using Auth;
using Solutions;
using Microsoft.AspNetCore.Mvc;
using Shared;

namespace Venus.Controllers;

[Route("api/invoices")]
[ApiController]
[AuthFilter]
public class InvoiceController(InvoiceService invoiceService) : ControllerBase
{
  [HttpGet] public RecordPage<InvoiceRecord> List(InvoiceSearchCriteria criteria, int page, int size, string sort) => invoiceService.List(criteria, page, size, sort);
  [HttpGet("{id}")] public InvoiceRecord Get(string id) => invoiceService.Get(id);
  [HttpPost] public InvoiceRecord Create(InvoiceRequest request) => invoiceService.Create(request);
  [HttpPatch("{id}")] public InvoiceRecord Update(string id, InvoiceRequest request) => invoiceService.Update(id, request);
}