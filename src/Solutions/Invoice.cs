namespace Solutions;

public record InvoiceRecord()
{
  #region Status
  public const string UNPAID = "UNPAID";
  public const string PAID = "PAID";
  public const string PARTIAL = "PARTIAL";
  #endregion

  public static InvoiceRecord Mock() => new();
}

public record InvoiceSearchCriteria();

public record InvoiceRequest(
  string InvoiceNumber,
  DateOnly IssueDate,
  DateOnly DueDate,
  string Status, // UNPAID, PAID, PARTIAL
  InvoiceRequest.VendorRequest Vendor,
  double TotalAmount,
  string Currency,
  string Description
) {
  public record VendorRequest(string VendorId, string LegalName);
}