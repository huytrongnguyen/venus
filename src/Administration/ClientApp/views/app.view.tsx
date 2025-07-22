import { HashRouter as Router, Navigate, Route, Routes, Link } from 'react-router';
import { LoadingIndicator } from 'rosie';
import { HomeView } from './home';
// import { Account, AppNavigator } from './ux';
// import { MonitoringDetailsView, MonitoringListView } from './monitoring';

export function AppView() {
  return <Router>
    <aside className="app-sidebar d-flex flex-column border-end">
      <div className="sidebar-body flex-1 overflow-y-auto">
        {/* <AppNavigator /> */}
      </div>
    </aside>
    <div className="app-wrapper d-flex position-relative">
      <LoadingIndicator />
      <div className="app-body d-flex flex-column">
        <Routes>
          <Route path="/" element={<HomeView />} />
          {/* <Route path="/monitoring" element={<MonitoringListView />} />
          <Route path="/monitoring/details" element={<MonitoringDetailsView />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  </Router>
}