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
  long SenderId,
  long RecipientId,
  double TotalAmount,
  string Currency,
  double TaxAmount,
  string DocumentStatus,
  List<DocumentItemRecord> Items,
  Dictionary<string, object> Extends,
  DateTime CreatedAt,
  DateTime UpdatedAt
)
{
  #region DocumentType
  public const string PurchaseOrder = "Purchase Order";
  #endregion

  #region Status
  // Draft, Approved, Sent, Received, Closed
  public const string Draft = "Draft";
  #endregion
}

public record DocumentItemRecord(
  string DocumentItemId,
  int LineNumber,
  string ProductId,
  int Quantity,
  double UnitPrice,
  double Subtotal,
  double Tax
) {}