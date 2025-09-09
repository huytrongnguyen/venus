import { useParams } from 'react-router-dom';
import { Rosie } from 'rosie-ui';

export function FinancialProjectionView() {
  const { productCode } = useParams<{ productCode: string }>();

  return <>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Financial Projection</li>
      <li className="breadcrumb-item active">{productCode}</li>
    </ol>
    <main className="fullscreen">
      <div className="rosie-grid rosie-grid-bordered rosie-grid-striped rosie-grid-hover d-flex flex-row fullscreen">
        <div className="rosie-grid-viewport d-flex flex-column fullscreen">
          <div className="rosie-grid-header fw-bold bg-light overflow-hidden d-flex flex-column">
            <div className="rosie-grid-row d-flex flex-row">
              <div className="rosie-grid-cell p-1" style={{width:100}}>Region</div>
              <div className="rosie-grid-cell p-1" style={{width:100}}>Metric</div>
              <div style={{width:Rosie.SCROLLBAR_WIDTH}} />
            </div>
          </div>
          <div className="rosie-grid-body fullscreen overflow-x-auto d-flex flex-column">
            <div>
              <div className="rosie-grid-row d-flex flex-row">
                <div className="rosie-grid-cell p-1" style={{width:100}}>JP</div>
                <div className="rosie-grid-cell p-1" style={{width:100}}>Installs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
}