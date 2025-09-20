import { Grid, GridColumn } from 'rosie-ui';
import { NavPillsComponent } from './nav-pills.component';

export function SearchExpense() {
  return <>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Expense Manager</li>
      <li className="breadcrumb-item active">Search</li>
      <div className="d-flex flex-row ms-auto">
        <NavPillsComponent />
      </div>
    </ol>
    <main className="fullscreen d-flex flex-column">
      <div className="p-2">
        <div className="row mb-2">
          <label htmlFor="expenseId" className="col-2 col-form-label">Expense ID</label>
          <div className="col-4">
            <input type="text" id="expenseId" className="form-control" />
          </div>
        </div>
        <div className="row mb-2">
          <label htmlFor="owner" className="col-2 col-form-label">Expense Owner</label>
          <div className="col-4">
            <input type="text" id="owner" className="form-control" />
          </div>
        </div>
        <div className="row mb-2">
          <label htmlFor="taxId" className="col-2 col-form-label">Tax Number</label>
          <div className="col-4">
            <input type="text" id="taxId" className="form-control" />
          </div>
        </div>
        <div className="row mb-2">
          <label htmlFor="divisions" className="col-2 col-form-label">Divisions</label>
          <div className="col-4">
            <input type="text" id="divisions" className="form-control" />
          </div>
        </div>
        <div className="row mb-2">
          <label htmlFor="purpose" className="col-2 col-form-label">Purpose</label>
          <div className="col-4">
            <input type="text" id="purpose" className="form-control" />
          </div>
        </div>
        <div className="row">
          <label htmlFor="businessName" className="col-2 col-form-label">Business Name</label>
          <div className="col-4">
            <input type="text" id="businessName" className="form-control" />
          </div>
        </div>
      </div>
      <div className="fullscreen">
        <Grid fitScreen>
          <GridColumn headerName="Expense ID" field="expenseId" style={{flex:1}} />
          <GridColumn headerName="Division" field="division" style={{flex:1}} />
          <GridColumn headerName="Description" field="description" style={{flex:1}} />
        </Grid>
      </div>
    </main>
  </>
}