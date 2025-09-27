using Auth;
using Microsoft.AspNetCore.Mvc;
using Shared;
using MasterData.FinancialPlatform;

namespace Venus.Controllers;

[Route("api/financial-platform/documents")]
[ApiController]
[AuthFilter]
public class FinancialDocumentController(FinancialDocumentService documentService) : ControllerBase
{
  [HttpGet] public RecordPage<FinancialDocumentRecord> List(FinancialDocumentSearchCriteria criteria, int page, int size, string sort) => documentService.List(criteria, page, size, sort);
  [HttpGet("{id}")] public FinancialDocumentRecord Get(string id) => documentService.Get(id);
  [HttpPost] public FinancialDocumentRecord Create(FinancialDocumentRequest request) => documentService.Create(request);
  [HttpPatch("{id}")] public FinancialDocumentRecord Update(string id, FinancialDocumentRequest request) => documentService.Update(id, request);
}