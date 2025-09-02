import { NavItem } from 'venus/core';

export const navigator: NavItem[] = [{
  navId: 'apps',
  navName: 'Apps',
  children: [{
    navId: 'campaign-performance',
    navName: 'Campaign Performance',
    navPath: '/apps/campaign-performance',
    activeFn: path => path.endsWith('/campaign-performance'),
  }],
}]