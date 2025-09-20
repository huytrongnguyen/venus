namespace Solutions;

public class DocumentType {
  // Sales Side: INVOICE -> PAYMENT -> RECEIPT -> CREDIT_NOTE -> JOURNAL -> STATEMENT
  // Purchases Side: PURCHASE_ORDER -> INVOICE -> EXPENSE_CLAIM -> PAYMENT -> RECEIPT -> DEBIT_NOTE -> JOURNAL -> STATEMENT
  public const string PURCHASE_ORDER = "PURCHASE_ORDER";
  public const string INVOICE = "INVOICE";
  public const string EXPENSE_CLAIM = "EXPENSE_CLAIM";
  public const string PAYMENT = "PAYMENT";
  public const string RECEIPT = "RECEIPT";
  public const string CREDIT_NOTE = "CREDIT_NOTE";
  public const string DEBIT_NOTE = "DEBIT_NOTE";
  public const string JOURNAL = "JOURNAL";
  public const string STATEMENT = "STATEMENT";
}

public record InvoiceRecord() {
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