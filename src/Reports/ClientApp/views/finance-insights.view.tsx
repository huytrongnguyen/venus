import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DateRangePicker, Grid, GridColumn } from 'rosie-ui';

export function FinanceInsightsView() {
  return <>
    <ol className="breadcrumb">
      <li className="breadcrumb-item active">Finance Insights</li>
    </ol>
    <main className="fullscreen">
      <div className="d-flex flex-row fullscreen p-2">
        <div className="d-flex flex-column fullscreen">
          <div className="d-flex fullscreen p-2">
            <div className="card fullscreen">
              <div className="card-header">Balance</div>
              <div className="card-body"></div>
            </div>
          </div>
          <div className="d-flex flex-row fullscreen p-2">
            <div className="d-flex fullscreen pe-1">
              <div className="card fullscreen">
                <div className="card-header">Revenue</div>
                <div className="card-body"></div>
              </div>
            </div>
              <div className="d-flex fullscreen ps-1">
                <div className="card fullscreen">
                <div className="card-header">Expense</div>
                <div className="card-body"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex fullscreen p-2">
          <div className="card fullscreen">
            <div className="card-header">Cashflow</div>
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    </main>
  </>
}