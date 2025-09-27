using Shared;

namespace MasterData.FinancialPlatform;

public class PaymentService {
  public RecordPage<PaymentRecord> List(PaymentSearchCriteria criteria, int page, int size, string sort) => RecordPage<PaymentRecord>.Mock();
  public PaymentRecord Create(PaymentRequest request) => PaymentRecord.Mock();
  public PaymentRecord Get(string id) => PaymentRecord.Mock();
  public PaymentRecord Update(string id, PaymentRequest request) => PaymentRecord.Mock();
}
