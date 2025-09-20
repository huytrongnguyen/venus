using Shared;

namespace Solutions;

public class InvoiceService
{
  public RecordPage<InvoiceRecord> List(InvoiceSearchCriteria criteria, int page, int size, string sort) => RecordPage<InvoiceRecord>.Mock();
  public InvoiceRecord Create(InvoiceRequest request) => InvoiceRecord.Mock();
  public InvoiceRecord Get(string id) => InvoiceRecord.Mock();
  public InvoiceRecord Update(string id, InvoiceRequest request) => InvoiceRecord.Mock();
}