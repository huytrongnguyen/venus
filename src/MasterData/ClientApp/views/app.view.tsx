import { useEffect } from 'react';
import { HashRouter as Router, Navigate, Route, Routes } from 'react-router';
import { LocalCache } from 'rosie-ui';

import { AUTH_TOKEN, AuthUserModel } from 'venus/core';
import { AppLayout, RequireAuth } from 'venus/components';
import { navigator } from 'masterdata/core';
import { ProductsView } from './products.view';
import { WalletView, InvoiceListView, PurchaseOrderListView } from './financial-platform';
import { LegalEntityView } from './foundation';

export function AppView() {
  useEffect(() => {
    if (LocalCache.get(AUTH_TOKEN)) {
      AuthUserModel.load();
    }
  }, []);

  return <Router>
    <AppLayout navigator={navigator} routes={<Routes>
      <Route path="/products" element={<RequireAuth component={ProductsView} title="Products" />} />
      <Route path="/finance-platform/purchase/purchase-orders" element={<RequireAuth component={PurchaseOrderListView} title="Purchase Orders" />} />
      <Route path="/finance-platform/sales/invoices" element={<RequireAuth component={InvoiceListView} title="Invoices" />} />
      <Route path="/finance-platform/business-account/:accountId" element={<RequireAuth component={WalletView} title="Business Account" />} />
      <Route path="/finance-platform/business-account" element={<Navigate to="/finance-platform/business-account/1" />} />
      <Route path="/foundation/entities/:entityId" element={<RequireAuth component={LegalEntityView} title="Legal Entity" />} />
      <Route path="*" element={<Navigate to="/products" />} />
    </Routes>} />
  </Router>
}