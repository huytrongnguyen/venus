namespace Solutions;

public class CampaignService {
  public void CreateCampaign(string campaignName) { }
  public void CreateAdset(string adsetName, string campaignId, string audienceId) { }
}

public record Campaign(string CampaignId, string Name, string AdAccountId, string Objective);
public record Adset(string AdsetId, string Name, string CampaignId, long BidAmount);
public record CustomAudience(string AudienceId, string Name, string Description);
