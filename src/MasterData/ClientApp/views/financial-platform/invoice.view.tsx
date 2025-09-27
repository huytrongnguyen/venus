import { useParams } from 'react-router-dom';

export function InvoiceView() {
  const { invoiceId } = useParams<{ invoiceId: string }>();

  return <>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Financial Platform</li>
      <li className="breadcrumb-item">Sales</li>
      <li className="breadcrumb-item">Invoices</li>
      <li className="breadcrumb-item active">{invoiceId}</li>
    </ol>
    <main className="fullscreen">
      <div className="container-fluid">
        <div className="mb-3 row">
          <div className="col-12">
            <button type="button" className="btn btn-outline-secondary">Approve</button>
            <button type="button" className="btn btn-outline-secondary">Reject</button>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-2 col-form-label">Invoice Number</label>
          <div className="col-10">
            <input type="text" readOnly className="form-control-plaintext" />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-2 col-form-label">Issue Date</label>
          <div className="col-10">
            <input type="text" readOnly className="form-control-plaintext" />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-2 col-form-label">Status</label>
          <div className="col-10">
            <input type="text" readOnly className="form-control-plaintext" value="Waiting for approval" />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-2 col-form-label">Supplier</label>
          <div className="col-10">
            <input type="text" readOnly className="form-control-plaintext" />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-2 col-form-label">Payment</label>
          <div className="col-10">
            <input type="text" readOnly className="form-control-plaintext" />
          </div>
        </div>
      </div>
    </main>
  </>
}