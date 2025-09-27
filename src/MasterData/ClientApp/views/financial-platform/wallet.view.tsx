import { useParams } from 'react-router-dom';
import { Grid, GridColumn } from 'rosie-ui';

export function WalletView() {
  const { accountId } = useParams<{ accountId: string }>();

  return <>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Financial Platform</li>
      <li className="breadcrumb-item">Wallet</li>
      <li className="breadcrumb-item active">{accountId}</li>
    </ol>
    <main className="fullscreen">
      <Grid fitHeight pagingToolbar>
        <GridColumn headerName="Date" field="paymentDate" style={{flex:1}} />
        <GridColumn headerName="Amount" field="amount" style={{flex:1}} />
      </Grid>
    </main>
  </>
}