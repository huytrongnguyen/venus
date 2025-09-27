import { useState } from 'react';
import { Dialog, Grid, GridColumn, Rosie, useDialog } from 'rosie-ui';

export function InvoiceListView() {
  const creationDialog = useDialog('#invoice-creation-dialog');

  return <>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Financial Platform</li>
      <li className="breadcrumb-item">Sales</li>
      <li className="breadcrumb-item active">Invoices</li>
      <div className="ms-auto">
        <span role="button" className="btn btn-sm btn-outline-secondary">
          Create
        </span>
      </div>
    </ol>
    <main className="fullscreen">
      <Grid fitHeight pagingToolbar>
        <GridColumn headerName="Client" field="recipientId" style={{flex:1}} />
        <GridColumn headerName="Status" field="status" style={{flex:1}} />
        <GridColumn headerName="Created At" field="createdAt" style={{flex:1}} />
      </Grid>
    </main>
    {creationDialog.isShown && <InvoiceCreationDialog />}
  </>
}

function InvoiceCreationDialog() {
  const [issueDate, setIssueDate] = useState('');

  async function createGroup() {
    if (Rosie.isEmpty(issueDate)) {
      return;
    }
  }

  return <Dialog id="invoice-creation-dialog" title="Invoice Creation Dialog">
    <div className="form-group row">
      <label className="col-4 col-form-label text-end">Invoice Date</label>
      <div className="col-8">
        <input type="text" className="form-control" value={issueDate} onChange={e => setIssueDate(e.target.value)} />
      </div>
    </div>
    <section className="fullscreen">
      <Grid fitHeight pagingToolbar>
        <GridColumn headerName="Name" field="productId" style={{flex:1}} />
        <GridColumn headerName="Unit" field="unitPrice" style={{flex:1}} />
        <GridColumn headerName="Quantity" field="quantity" style={{flex:1}} />
        <GridColumn headerName="Tax" field="tax" style={{flex:1}} />
        <GridColumn headerName="Subtotal" field="subtotal" style={{flex:1}} />
      </Grid>
    </section>
    <div className="form-group mt-3 d-flex justify-content-end">
      <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
      <button type="button" className="btn btn-primary ms-1" onClick={createGroup}>Create</button>
    </div>
  </Dialog>
}