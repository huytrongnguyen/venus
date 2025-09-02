import { useEffect } from 'react';
import { HashRouter as Router, Navigate, Route, Routes } from 'react-router';
import { LocalCache } from 'rosie-ui';

import { AUTH_TOKEN, AuthUserModel } from 'venus/core';
import { AppLayout, RequireAuth } from 'venus/components';
import { navigator } from 'solutions/core';

import { ChatView } from './chat.view';
import { AuditLogsView } from './kyc';

export function AppView() {
  useEffect(() => {
    if (LocalCache.get(AUTH_TOKEN)) {
      AuthUserModel.load();
    }
  }, []);

  return <Router>
    <AppLayout navigator={navigator} routes={<Routes>
      <Route path="/chat" element={<RequireAuth component={ChatView} title="Chat" />} />
      <Route path="/kyc/audit-logs" element={<RequireAuth component={AuditLogsView} title="KYC Audit Logs" />} />
      <Route path="*" element={<Navigate to="/chat" />} />
    </Routes>} />
  </Router>
}