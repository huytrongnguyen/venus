import { useEffect } from 'react';
import { HashRouter as Router, Navigate, Route, Routes } from 'react-router';
import { LocalCache } from 'rosie-ui';

import { AUTH_TOKEN, AuthUserModel } from 'venus/core';
import { AppLayout, RequireAuth } from 'venus/components';
import { navigator } from 'solutions/core';

import { AudiencesView, ImportAudienceView, BuildAudienceView } from './ua';
import { ChurnDetectionView, FraudDetectionView, PsiView } from './ai-features';
import { AuditLogsView, AutoApprovalView } from './kyc';
import { ChatView } from './chat.view';
import { DataContractView } from './data-contract.view';

export function AppView() {
  useEffect(() => {
    if (LocalCache.get(AUTH_TOKEN)) {
      AuthUserModel.load();
    }
  }, []);

  return <Router>
    <AppLayout navigator={navigator} routes={<Routes>
      <Route path="/chat" element={<RequireAuth component={ChatView} title="Chat" />} />
      <Route path="/data-contract" element={<RequireAuth component={DataContractView} title="Data Contract" />} />
      <Route path="/ai/fraud" element={<RequireAuth component={FraudDetectionView} title="Fraud Detection" />} />
      <Route path="/ai/churn" element={<RequireAuth component={ChurnDetectionView} title="Churn Detection" />} />
      <Route path="/ai/:feature/:reportDate/psi" element={<RequireAuth component={PsiView} title="PSI Model Monitoring" />} />
      <Route path="/ua/audiences" element={<RequireAuth component={AudiencesView} title="Audiences" />} />
      <Route path="/ua/audiences/build" element={<RequireAuth component={BuildAudienceView} title="Build Custom Audience" />} />
      <Route path="/ua/audiences/import" element={<RequireAuth component={ImportAudienceView} title="Import Predefined Audience Segments" />} />
      <Route path="/kyc/audit-logs" element={<RequireAuth component={AuditLogsView} title="KYC Audit Logs" />} />
      <Route path="/kyc/auto-approval" element={<RequireAuth component={AutoApprovalView} title="KYC Auto Approval" />} />
      <Route path="*" element={<Navigate to="/chat" />} />
    </Routes>} />
  </Router>
}