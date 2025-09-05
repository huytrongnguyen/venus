import { NavLink } from 'react-router-dom';

export function AudiencesView() {
  return <>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">User Acquisition</li>
      <li className="breadcrumb-item active">Audiences</li>
      <div className="ms-auto">
        <NavLink to="/ua/audiences/build" className="btn btn-sm btn-outline-secondary">
          Build Custom Audience
        </NavLink>
      </div>
    </ol>
    <main></main>
  </>
}