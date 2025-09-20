import { DataModel } from 'rosie-ui';
import { Grid, GridColumn } from 'rosie-ui';

export function ClientListView() {
  return <>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Administration</li>
      <li className="breadcrumb-item active">Clients</li>
      <div className="ms-auto">
        <button className="btn btn-sm btn-primary">
          <span className="fa fa-plus me-1" /> Add client
        </button>
      </div>
    </ol>
    <main className="fullscreen">
      <Grid fitScreen>
        <GridColumn headerName="Client name" field="clientName" style={{flex:1}} renderer={(groupName: string, record: DataModel<any>) => {
          return <span role="button" className="text-primary text-decoration-underline">{groupName}</span>
        }} />
        <GridColumn headerName="Legal name" field="legalName" style={{flex:1}} />
        <GridColumn headerName="Status" field="status" style={{flex:1}} />
      </Grid>
    </main>
  </>
}