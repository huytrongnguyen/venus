namespace MasterData.FinancialPlatform;

public record PaymentRecord(
  string PaymentId,
  DateOnly PaymentDate,
  string OperationType,
  double Amount,
  string PaymentMethod,
  PaymentAccountRecord Debtor,
  PaymentAccountRecord Creditor,
  List<PaymentAllocationRecord> Allocations,
  DateTime CreatedAt,
  DateTime UpdatedAt
) {
  #region OperationType
  public const string CREDIT = "CREDIT";
  public const string DEBIT = "DEBIT";
  #endregion

  #region PaymentMethod
  public const string BANK_TRANSFER = "BANK_TRANSFER";
  public const string CREDIT_CARD = "CREDIT_CARD";
  public const string DEBIT_CARD = "DEBIT_CARD";
  public const string CASH = "CASH";
  #endregion

  public static PaymentRecord Mock() => new(
    "", DateOnly.FromDateTime(DateTime.UtcNow), CREDIT, 0,
    BANK_TRANSFER, PaymentAccountRecord.Mock(), PaymentAccountRecord.Mock(),
    [],
    DateTime.UtcNow, DateTime.UtcNow
  );
}

public record PaymentAllocationRecord(string AllocationType, double Amount) {
  #region AllocationType
  public const string FULL = "FULL";
  public const string PARTIAL = "PARTIAL";
  #endregion

  public static PaymentAllocationRecord Mock() => new(FULL, 0);
}

public record PaymentSearchCriteria();

public record PaymentRequest(
  DateOnly PaymentDate,
  string OperationType,
  string PaymentMethod,
  string TransactionId,
  double Amount,
  string Currency,
  string ReferenceId, // InvoiceId
  PaymentAccountRecord Debtor,
  PaymentAccountRecord Creditor,
  string Description
);