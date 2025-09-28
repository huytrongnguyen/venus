import { useParams } from 'react-router-dom';

export function LegalEntityView() {
  const { entityId } = useParams<{ entityId: string }>();

  return <>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Foundation</li>
      <li className="breadcrumb-item">Entities</li>
      <li className="breadcrumb-item active">{entityId}</li>
    </ol>
    <main className="fullscreen">
      <div className="container-fluid">
        <div className="mb-3 row">
          <label className="col-2 col-form-label">Legal Name</label>
          <div className="col-10">
            <input type="text" readOnly className="form-control-plaintext" />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-2 col-form-label">Jurisdiction</label>
          <div className="col-10">
            <input type="text" readOnly className="form-control-plaintext" />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-2 col-form-label">Registration Number</label>
          <div className="col-10">
            <input type="text" readOnly className="form-control-plaintext" value="Waiting for approval" />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-2 col-form-label">Address</label>
          <div className="col-10">
            <input type="text" readOnly className="form-control-plaintext" />
          </div>
        </div>
      </div>
    </main>
  </>
}