import { useEffect } from 'react';
import { HashRouter as Router, Navigate, Route, Routes } from 'react-router';
import { LocalCache } from 'rosie-ui';

import { AUTH_TOKEN, AuthUserModel } from 'venus/core';
import { AppLayout, RequireAuth } from 'venus/components';

import { navigator } from '../core';
import { CampaignPerformanceView } from './campaign-performance.view';
import { FinanceInsightsView } from './finance-insights.view';
import { TransactionsView } from './transactions.view';

export function AppView() {
  useEffect(() => {
    if (LocalCache.get(AUTH_TOKEN)) {
      AuthUserModel.load();
    }
  }, []);

  return <Router>
    <AppLayout navigator={navigator} routes={<Routes>
      <Route path="/apps/:appId/campaign-performance" element={<RequireAuth component={CampaignPerformanceView} title="Campaign Performance" />} />
      <Route path="/finance-insights" element={<RequireAuth component={FinanceInsightsView} title="Finance Insights" />} />
      <Route path="/transactions" element={<RequireAuth component={TransactionsView} title="Transactions" />} />
      <Route path="*" element={<Navigate to="/apps/demo/campaign-performance" />} />
    </Routes>} />
  </Router>
}