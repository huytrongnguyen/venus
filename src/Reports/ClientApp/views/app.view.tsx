import { useEffect } from 'react';
import { HashRouter as Router, Navigate, Route, Routes } from 'react-router';
import { LocalCache } from 'rosie-ui';

import { AUTH_TOKEN, AuthUserModel } from 'venus/core';
import { AppLayout, RequireAuth } from 'venus/components';
import { navigator } from 'reports/core';

import { AuditLogsView } from './audit-logs.view';

export function AppView() {
  useEffect(() => {
    if (LocalCache.get(AUTH_TOKEN)) {
      AuthUserModel.load();
    }
  }, []);

  return <Router>
    <AppLayout navigator={navigator} routes={<Routes>
      <Route path="/audit-logs" element={<RequireAuth component={AuditLogsView} title="Audit Logs" />} />
      <Route path="*" element={<Navigate to="/audit-logs" />} />
    </Routes>} />
  </Router>
}