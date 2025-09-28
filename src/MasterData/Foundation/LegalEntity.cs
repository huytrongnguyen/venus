namespace MasterData.Foundation;

public record LegalEntityRecord(
  string EntityId,
  string LegalName,
  string DisplayName,
  string EntityType,
  string RegistrationNumber,
  string Address,
  string? Jurisdiction
)
{
  #region EntityType
  public const string BUSINESS = "BUSINESS";
  public const string INDIVIDUAL = "INDIVIDUAL";
  #endregion

  public static LegalEntityRecord Mock() => new("1", "", "", BUSINESS, "", "", null);
}

public record LegalEntityRequest(
  string LegalName,
  string DisplayName,
  string EntityType,
  string RegistrationNumber,
  string Address,
  string? Jurisdiction
);

public record LegalEntitySearchCriteria(string EntityType);