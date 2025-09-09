import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DateRangePicker, Grid, GridColumn } from 'rosie-ui';

export function CampaignPerformanceView() {
  const { appId } = useParams<{ appId: string }>(),
        [endDate, setEndDate] = useState(Date.currentDate().minus(1)),
        [startDate, setStartDate] = useState(endDate.startOfMonth());

  return <>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Apps</li>
      <li className="breadcrumb-item">{appId}</li>
      <li className="breadcrumb-item active">Campaign Performance</li>
      <div className="ms-auto">
        <DateRangePicker className="input-group-sm" start={startDate} end={endDate}
            onChange={(start: Date, end: Date) => { setStartDate(start); setEndDate(end); }} />
      </div>
    </ol>
    <main className="fullscreen">
      <Grid fitHeight>
        <GridColumn headerName="Media Source" field="mediaSource" style={{width:150}} />
        <GridColumn headerName="Campaign" field="campaignName" style={{width:150}} />
        <GridColumn headerName="Adset" field="adsetName" style={{width:150}} />
        <GridColumn headerName="Ad" field="adName" style={{width:150}} />
        <GridColumn headerName="Revenue" field="revenue" style={{width:200}} />
        <GridColumn headerName="Cost" field="cost" style={{width:200}} />
        <GridColumn headerName="Impressions" field="impressions" style={{width:200}} />
        <GridColumn headerName="Clicks" field="clicks" style={{width:200}} />
        <GridColumn headerName="Installs" field="installs" style={{width:200}} />
        <GridColumn headerName="NRU" field="installs" style={{width:200}} />
        <GridColumn headerName="NPU" field="installs" style={{width:200}} />
        <GridColumn headerName="DAU" field="installs" style={{width:200}} />
        <GridColumn headerName="PU" field="installs" style={{width:200}} />
        <GridColumn headerName="CPA" field="installs" style={{width:200}} />
        <GridColumn headerName="ROAS" field="installs" style={{width:200}} />
      </Grid>
    </main>
  </>
}