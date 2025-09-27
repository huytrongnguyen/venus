namespace MasterData.FinancialPlatform;

public record PaymentAccountEntity();

public class Currency {
  public const string USD = "USD";
}

public record PaymentAccountRecord(string PaymentAccountId)
{
  #region Currency
  public const string USD = "USD";
  #endregion

  public static PaymentAccountRecord Mock() => new("");
}