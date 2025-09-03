import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DatePicker, Dictionary, Grid, GridColumn } from 'rosie-ui';

export function FraudDetectionView() {
  const [reportDate, setReportDate] = useState(Date.currentDate().minus(1));

  return <>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">AI Features</li>
      <li className="breadcrumb-item active">Fraud Detection</li>
      <div className="d-flex flex-row ms-auto">
        <NavLink to={`/ai/fraud/${reportDate.format()}/psi`} className="btn btn-sm btn-outline-secondary me-2" style={{width:100}}>View PSI</NavLink>
        <DatePicker className="input-group-sm" value={reportDate} onChange={setReportDate} />
      </div>
    </ol>
    <main className="fullscreen d-flex flex-row">
      <div className="w-25"></div>
      <div className="fullscreen w-75">
        <Grid fitHeight>
          <GridColumn headerName="Report Date" field="reportDate" style={{width:150}} />
          <GridColumn headerName="User ID" field="userId" style={{width:150}} />
          <GridColumn headerName="Platform" field="platform" style={{width:150}} />
          <GridColumn headerName="Fraud Level" field="fraudLevel" style={{width:150}} />
          <GridColumn headerName="Probability" field="fraudProba" style={{width:150}} />
        </Grid>
      </div>
    </main>
  </>
}