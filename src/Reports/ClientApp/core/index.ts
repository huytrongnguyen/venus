import { NavItem } from 'rosie-ui';

export const navigator: NavItem[] = [{
  navId: 'reports',
  navName: 'Reports',
  children: [{
    navId: 'audit-logs',
    navName: 'Audit Logs',
    navPath: '/audit-logs'
  }]
}]