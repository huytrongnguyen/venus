import { Model } from 'venus/core';

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
  name: string,
  lastLoginTime: string,
}

export type UserGroup = {
  groupId: string,
  groupName: string,
  users: SiteUser[],
}

export const UserGroupStore = Model<UserGroup[]>({ proxy: { url: '/api/users/groups' } });
