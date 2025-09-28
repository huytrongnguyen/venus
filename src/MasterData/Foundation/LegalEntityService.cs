namespace MasterData.Foundation;

using Shared;

public class LegalEntityService
{
  public RecordPage<LegalEntityRecord> List(LegalEntitySearchCriteria criteria, int page, int size, string sort) => RecordPage<LegalEntityRecord>.Mock();
  public LegalEntityRecord Get(string id) => LegalEntityRecord.Mock();
  public LegalEntityRecord Create(LegalEntityRequest request) => LegalEntityRecord.Mock();
  public LegalEntityRecord Update(string id, LegalEntityRequest request) => LegalEntityRecord.Mock();
  public List<PaymentAccountRecord> ListPaymentAccount(string id) => [];
  public PaymentAccountRecord GetPaymentAccount(string id, string paymentAccountId) => PaymentAccountRecord.Mock();
  public PaymentAccountRecord CreatePaymentAccount(string id, PaymentAccountRequest request) => PaymentAccountRecord.Mock();
}