namespace MasterData.FinancialPlatform;

using Shared;

public class FinancialDocumentService
{
  public RecordPage<FinancialDocumentRecord> List(FinancialDocumentSearchCriteria criteria, int page, int size, string sort) => RecordPage<FinancialDocumentRecord>.Mock();
  public FinancialDocumentRecord Create(FinancialDocumentRequest request) => FinancialDocumentRecord.Mock();
  public FinancialDocumentRecord Get(string id) => FinancialDocumentRecord.Mock();
  public FinancialDocumentRecord Update(string id, FinancialDocumentRequest request) => FinancialDocumentRecord.Mock();
}