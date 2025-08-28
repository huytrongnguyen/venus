namespace Administration;

public class UserService {
  public List<SiteUser> List() => [];

  public List<UserGroup> ListUserGroups() => [];
}

public record SiteUser(string Username, string Name);
public record UserGroup(string GroupId, string GroupName, List<SiteUser> Users);
