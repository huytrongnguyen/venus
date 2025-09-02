import { useState } from 'react';
import { generateRequestId } from 'solutions/core';

export function AutoApprovalView() {
  const [step, setStep] = useState(1),
        [requestId] = useState(generateRequestId());

  return <>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">KYC</li>
      <li className="breadcrumb-item active">Auto Approval</li>
      <div className="ms-auto">
        <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => location.reload()}>Refresh</button>
      </div>
    </ol>
    <main className="fullscreen overflow-y-auto">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-3">
            {step === 1 && <TakeIdImage requestId={requestId} />}
            {step === 2 && <TakeIdImage requestId={requestId} />}
            {step === 3 && <TakeSelfieImage requestId={requestId} />}
            {step === 4 && <Verification requestId={requestId} />}
          </div>
        </div>
      </div>
    </main>
  </>
}

function TakeIdImage(props: { requestId: string }) {
  return <></>
}

function TakeSelfieImage(props: { requestId: string }) {
  return <></>
}

function Verification(props: { requestId: string }) {
  return <></>
}