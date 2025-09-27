namespace MasterData.FinancialPlatform;

public record LegalEntityRecord(
  string EntityId,
  string LegalName,
  string DisplayName,
  string EntityType,
  string RegistrationNumber,
  string Address,
  string Jurisdiction,
  string ParentId
)
{
  #region EntityType
  public const string Business = "Business";
  public const string Individual = "Individual";
  #endregion
}

public record PartyRecord(string PartyId, string Name, string TaxId, string Address, string LegalEntityId);