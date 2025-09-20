import { NavPillsComponent } from './nav-pills.component';

export function ComplianceDashboard() {
  return <>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Expense Manager</li>
      <li className="breadcrumb-item active">Dashboard</li>
      <div className="d-flex flex-row ms-auto">
        <NavPillsComponent />
      </div>
    </ol>
    <main className="fullscreen">
      <div className="card border-0 rounded-0 fullscreen">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <span className="nav-link active">Insight Dashboard</span>
            </li>
            <li className="nav-item">
              <span className="nav-link">CMS Dashboard</span>
            </li>
            <li className="nav-item">
              <span className="nav-link">Compliance Dashboard</span>
            </li>
          </ul>
        </div>
        <div className="card-body fullscreen">
        </div>
      </div>
    </main>
  </>
}