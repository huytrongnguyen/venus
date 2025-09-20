import { NavLink } from 'react-router-dom';

export function NavPillsComponent() {
  return <>
    <NavLink to="/exmgr/search-expense" className="btn btn-sm btn-outline-secondary ms-2" style={{width:100}}>Search</NavLink>
    <NavLink to="/exmgr/create-expense" className="btn btn-sm btn-outline-secondary ms-2" style={{width:100}}>Create</NavLink>
    <NavLink to="/exmgr/import-expense" className="btn btn-sm btn-outline-secondary ms-2" style={{width:100}}>Import</NavLink>
  </>
}