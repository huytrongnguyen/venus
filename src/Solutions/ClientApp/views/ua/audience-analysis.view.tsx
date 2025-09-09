import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, GridColumn, newOperation, QueryOperation, QueryOperationComponent } from 'rosie-ui';
import { ruleCriteria } from 'solutions/core';

export function AudienceAnalysisView() {
  const { audienceId } = useParams<{ audienceId: string }>(),
        [ruleset, setRuleset] = useState<QueryOperation>(newOperation());

  return <>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">User Acquisition</li>
      <li className="breadcrumb-item active">Audiences</li>
      <li className="breadcrumb-item active">{audienceId}</li>
    </ol>
    <main className="fullscreen d-flex flex-column">
      <div className="fullscreen">
        <QueryOperationComponent operation={ruleset} criteria={ruleCriteria} index={0}
            onChange={(operation, _index) => setRuleset(operation)} />
      </div>
      <div className="fullscreen">
        <CampaignGrid />
      </div>
    </main>
  </>
}

function CampaignGrid() {
  return <Grid fitHeight>
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
    <GridColumn headerName="CPA" field="installs" style={{width:200}} />
    <GridColumn headerName="ROAS" field="installs" style={{width:200}} />
  </Grid>
}