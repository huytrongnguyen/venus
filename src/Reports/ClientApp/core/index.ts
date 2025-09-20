import { NavItem } from 'venus/core';

export const navigator: NavItem[] = [{
  navId: 'financial-reporting',
  navName: 'Financial reporting',
  children: [{
    navId: 'finance-insights',
    navName: 'Finance Insights',
    navPath: '/finance-insights',
  }, {
    navId: 'transactions',
    navName: 'Transactions',
    navPath: '/transactions',
  }]
}, {
  navId: 'apps',
  navName: 'Apps',
  children: [{
    navId: 'campaign-performance',
    navName: 'Campaign Performance',
    navPath: '/apps/campaign-performance',
    activeFn: path => path.endsWith('/campaign-performance'),
  }],
}]