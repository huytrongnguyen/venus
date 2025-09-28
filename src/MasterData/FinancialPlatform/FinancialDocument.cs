namespace MasterData.FinancialPlatform;

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

public record FinancialDocumentRecord(
  string DocumentId,
  string DocumentType,
  DateOnly IssueDate,
  DateOnly DueDate,
  double TotalAmount,
  double TaxAmount,
  string Currency,
  string DocumentStatus,
  List<FinancialDocumentPartyRecord> Parties,
  List<FinancialDocumentItemRecord> Items,
  Dictionary<string, object> Extends,
  DateTime CreatedAt,
  DateTime UpdatedAt
)
{
  #region DocumentType
  public const string PURCHASE_ORDER = "PURCHASE_ORDER";
  public const string INVOICE = "INVOICE";
  #endregion

  #region Status
  // Draft, Waiting For Approval, Approved, Sent, Received, Closed
  public const string DRAFT = "DRAFT";
  #endregion

  public static FinancialDocumentRecord Mock() => new(
    "1", INVOICE, DateOnly.FromDateTime(DateTime.UtcNow), DateOnly.FromDateTime(DateTime.UtcNow),
    0, 0, "USD", DRAFT,
    [], [], [],
    DateTime.UtcNow, DateTime.UtcNow
  );
}

public record FinancialDocumentPartyRecord(string LegalEntityId, string PartyRole)
{
  #region PartyRole
  public const string SENDER = "SENDER";
  public const string RECIPIENT = "RECIPIENT";
  #endregion
}

public record FinancialDocumentItemRecord(
  int LineNumber,
  string ItemId,
  int Quantity,
  double Subtotal
);

public record FinancialItemRecord(
  string ItemId,
  string Name,
  string ItemCategory,
  double UnitPrice,
  double TaxRate,
  string Currency) {}

public record FinancialDocumentRequest(
  string DocumentType,
  DateOnly IssueDate,
  DateOnly DueDate,
  double TotalAmount,
  string Currency,
  double TaxAmount,
  string DocumentStatus,
  List<FinancialDocumentPartyRecord> Parties,
  List<FinancialDocumentItemRecord> Items,
  Dictionary<string, object> Extends
);

public record FinancialDocumentSearchCriteria(string DocumentType, string DocumentStatus);