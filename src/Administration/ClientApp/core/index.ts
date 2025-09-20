import { NavItem, Model } from 'venus/core';

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

export const navigator: NavItem[] = [{
  navId: 'partner-management',
  navName: 'Partner management',
  children: [{
    navId: 'clients',
    navName: 'Clients',
    navPath: '/clients'
  }]
}, {
  navId: 'access-management',
  navName: 'Access management',
  children: [{
    navId: 'user-groups',
    navName: 'User groups',
    navPath: '/user-groups'
  }, {
    navId: 'users',
    navName: 'Users',
    navPath: '/users'
  }]
}]
