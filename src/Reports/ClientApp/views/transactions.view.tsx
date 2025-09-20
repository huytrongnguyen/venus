import { Grid, GridColumn } from 'rosie-ui';

export function TransactionsView() {
  return <>
    <ol className="breadcrumb">
      <li className="breadcrumb-item active">Transactions</li>
    </ol>
    <main className="fullscreen">
      <Grid fitScreen>
        <GridColumn headerName="Date" field="reportDate" style={{flex:1}} />
        <GridColumn headerName="Payment account" field="paymentAccountId" style={{flex:1}} />
        <GridColumn headerName="Amount" field="amount" style={{flex:1}} />
        <GridColumn headerName="Invoice" field="invoiceId" style={{flex:1}} />
        <GridColumn headerName="Balance" field="balance" style={{flex:1}} />
        <GridColumn headerName="Status" field="status" style={{flex:1}} />
      </Grid>
    </main>
  </>
}