import { useParams } from 'react-router-dom';
import { DataModel } from 'rosie-ui';
import { Grid, GridColumn } from 'rosie-ui';

export function ClientStaffListView() {
  const { clientId } = useParams<{ clientId: string }>();

  return <>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Administration</li>
      <li className="breadcrumb-item">Clients</li>
      <li className="breadcrumb-item">{clientId}</li>
      <li className="breadcrumb-item active">Staffs</li>
      <div className="ms-auto">
        <button className="btn btn-sm btn-primary">
          <span className="fa fa-plus me-1" /> Assign user
        </button>
      </div>
    </ol>
    <main className="fullscreen">
      <Grid fitScreen>
        <GridColumn headerName="Name" field="name" style={{flex:1}} renderer={(groupName: string, record: DataModel<any>) => {
          return <span role="button" className="text-primary text-decoration-underline">{groupName}</span>
        }} />
        <GridColumn headerName="Email" field="email" style={{flex:1}} />
        <GridColumn headerName="Role" field="role" style={{flex:1}} />
      </Grid>
    </main>
  </>
}