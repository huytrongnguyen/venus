import { NavItem } from 'venus/core';

export const navigator: NavItem[] = [{
  navId: 'financial-platform',
  navName: 'Financial platform',
  children: [{
    navId: 'purchase-orders',
    navName: 'Purchase Orders',
    navPath: '/finance-platform/purchase/purchase-orders',
  }, {
    navId: 'invoices',
    navName: 'Invoices',
    navPath: '/finance-platform/sales/invoices',
  }, {
    navId: 'business-account',
    navName: 'Business Account',
    navPath: '/finance-platform/business-account',
  }]
}, {
  navId: 'products',
  navName: 'Products',
  navPath: '/products',
}]
