export type NavItem = {
  navId: string,
  navName: string,
  navPath?: string,
  navIcon?: string,
  children?: NavItem[],
  groups?: any[],
}

export type SiteUser = {
  username: string,
  lastLoginTime: string,
}

export type UserGroup = {
  groupId: string,
  groupName: string,
  users: SiteUser[],
}

// export const UserGroupStore = Store<UserGroup>({ proxy: { url: '/api/admin/user-groups' } });
