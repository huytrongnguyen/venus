namespace Solutions;

public class FinancialProjectionService() { }

public record Scenario(
  string ProductCode,
  string Region,
  string Period,
  long Installs,
  double RegistrationRate,
  double RetentionRate,
  double PayingRate,
  DateTime CreatedAt,
  DateTime UpdatedAt
);