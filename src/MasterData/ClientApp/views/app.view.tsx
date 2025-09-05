// import 'bootstrap/dist/js/bootstrap.bundle.min';

export function AppView() {
  return <>
    <main className="d-flex flex-row align-items-center p-2">
      <div className="dropdown">
        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="false">AND</button>
        <ul className="dropdown-menu">
          <li><span className="dropdown-item">AND</span></li>
          <li><span className="dropdown-item">OR</span></li>
          <li><span className="dropdown-item">EXCLUDE</span></li>
        </ul>
      </div>
    </main>
  </>
}