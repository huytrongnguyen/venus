import { NavLink } from 'react-router-dom';
import { Grid, GridColumn } from 'rosie-ui';

export function InvoiceListView() {
  return <>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Financial Platform</li>
      <li className="breadcrumb-item">Sales</li>
      <li className="breadcrumb-item active">Invoices</li>
      <div className="ms-auto">
        <NavLink to="/finance-platform/sales/invoices/create" className="btn btn-sm btn-outline-secondary">
          Create
        </NavLink>
      </div>
    </ol>
    <main className="fullscreen">
      <Grid fitHeight pagingToolbar>
        <GridColumn headerName="Client" field="recipientId" style={{flex:1}} />
        <GridColumn headerName="Status" field="stauts" style={{flex:1}} />
        <GridColumn headerName="Created At" field="createdAt" style={{flex:1}} />
      </Grid>
    </main>
  </>
}