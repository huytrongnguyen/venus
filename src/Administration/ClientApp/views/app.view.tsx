import { useEffect } from 'react';
import { HashRouter as Router, Navigate, Route, Routes } from 'react-router';
import { LocalCache } from 'rosie/core';
import { LoadingIndicator } from 'rosie/components';
import { AppNavigator } from './ux';
import { UserGroupsView } from './user-groups.view';
import { AUTH_TOKEN, AuthUserModel } from 'venus/core';
import { RequireAuth } from 'venus/components';

export function AppView() {
  useEffect(() => {
    if (LocalCache.get(AUTH_TOKEN)) {
      AuthUserModel.load();
    }
  }, []);

  return <Router>
    <div className="app fullscreen d-flex flex-row">
      <aside className="app-sidebar d-flex flex-column border-end">
        <div className="sidebar-body flex-1 overflow-y-auto">
          <AppNavigator />
        </div>
      </aside>
      <div className="app-wrapper fullscreen d-flex position-relative">
        <LoadingIndicator />
        <div className="app-body fullscreen d-flex flex-column">
          <Routes>
            <Route path="/user-groups" element={<RequireAuth component={UserGroupsView} title="User groups" />} />
            {/* <Route path="/monitoring" element={<MonitoringListView />} />
            <Route path="/monitoring/details" element={<MonitoringDetailsView />} /> */}
            <Route path="*" element={<Navigate to="/user-groups" />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
}