namespace Shared;

public abstract record AuditEntity(DateTime CreatedAt, DateTime UpdatedAt);

public record RecordPage<T>(List<T> Items, long Total, int Page, int Size)
{
  public static RecordPage<T> Mock() => new([], 0, 1, 100);
}