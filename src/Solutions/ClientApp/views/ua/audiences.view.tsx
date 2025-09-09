import { NavLink } from 'react-router-dom';
import { Grid, GridColumn } from 'rosie-ui';

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
    <main className="fullscreen">
      <Grid fitScreen>
        <GridColumn headerName="Audience Name" field="audienceName" style={{flex:1}} />
        <GridColumn headerName="App Name" field="appName" style={{flex:1}} />
        <GridColumn headerName="Business ID" field="businessId" style={{flex:1}} />
        <GridColumn headerName="Status" field="status" style={{flex:1}} />
        <GridColumn headerName="Volume" field="volume" style={{flex:1}} />
        <GridColumn headerName="Creator" field="creator" style={{flex:1}} />
        <GridColumn headerName="Creation Date" field="creationDate" style={{flex:1}} />
      </Grid>
    </main>
  </>
}