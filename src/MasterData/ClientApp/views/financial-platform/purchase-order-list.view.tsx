import { Grid, GridColumn } from 'rosie-ui';

export function PurchaseOrderListView() {
  return <>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Financial Platform</li>
      <li className="breadcrumb-item">Purchase</li>
      <li className="breadcrumb-item active">Purchase Orders</li>
    </ol>
    <main className="fullscreen">
      <Grid fitHeight pagingToolbar>
        <GridColumn headerName="Vendor" field="senderId" style={{flex:1}} />
        <GridColumn headerName="Status" field="status" style={{flex:1}} />
        <GridColumn headerName="Created At" field="createdAt" style={{flex:1}} />
      </Grid>
    </main>
  </>
}