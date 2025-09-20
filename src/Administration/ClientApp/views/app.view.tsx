import { useEffect } from 'react';
import { HashRouter as Router, Navigate, Route, Routes } from 'react-router';
import { LocalCache } from 'rosie-ui';

import { AUTH_TOKEN, AuthUserModel } from 'venus/core';
import { AppLayout, RequireAuth } from 'venus/components';
import { navigator } from 'admin/core';

import { UserGroupsView } from './user-groups.view';
import { ClientListView, ClientStaffListView } from './client';

export function AppView() {
  useEffect(() => {
    if (LocalCache.get(AUTH_TOKEN)) {
      AuthUserModel.load();
    }
  }, []);

  return <Router>
    <AppLayout navigator={navigator} routes={<Routes>
      <Route path="/clients" element={<RequireAuth component={ClientListView} title="Clients" />} />
      <Route path="/clients/:clientId/staffs" element={<RequireAuth component={ClientStaffListView} title="Client Staff" />} />
      <Route path="/user-groups" element={<RequireAuth component={UserGroupsView} title="User groups" />} />
      <Route path="*" element={<Navigate to="/user-groups" />} />
    </Routes>} />
  </Router>
}