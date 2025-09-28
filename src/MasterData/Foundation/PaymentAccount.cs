namespace MasterData.Foundation;

public record PaymentAccountEntity();

public class Currency {
  public const string USD = "USD";
}

public record PaymentAccountRecord(
  string PaymentAccountId,
  string LegalEntityId,
  string? IBAN, // International Bank Account Number
  string Currency
)
{
  #region Currency
  public const string USD = "USD";
  #endregion

  public static PaymentAccountRecord Mock() => new("", "", "", USD);
}

public record PaymentAccountRequest();