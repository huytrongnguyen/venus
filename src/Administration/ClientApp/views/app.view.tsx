import { HashRouter as Router, Navigate, Route, Routes } from 'react-router';
import { LoadingIndicator } from 'src/Shared/ClientApp/ts/components';
import { AppNavigator } from './ux';
import { UserGroupsView } from './user-groups.view';
// import { MonitoringDetailsView, MonitoringListView } from './monitoring';

export function AppView() {
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
            <Route path="/" element={<UserGroupsView />} />
            {/* <Route path="/monitoring" element={<MonitoringListView />} />
            <Route path="/monitoring/details" element={<MonitoringDetailsView />} /> */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
}