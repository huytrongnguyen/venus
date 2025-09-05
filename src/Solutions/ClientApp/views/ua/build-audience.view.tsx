import { useEffect, useState } from 'react';
import { newOperation, QueryOperation, QueryOperationComponent } from 'rosie-ui';
import { ruleCriteria } from 'solutions/core';

export function BuildAudienceView() {
  const [audienceName, setAudienceName] = useState(''),
        [ruleset, setRuleset] = useState<QueryOperation>(newOperation());

  useEffect(() => { console.log(ruleset); }, [ruleset])

  return <>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">User Acquisition</li>
      <li className="breadcrumb-item">Audiences</li>
      <li className="breadcrumb-item active">Build</li>
    </ol>
    <main className="fullscreen overflow-y-auto">
      <div className="container-fluid py-2">
        <div className="row">
          <div className="col-auto">
            <div className="input-group">
              <span className="input-group-text">Audience Name</span>
              <input type="text" className="form-control" placeholder="Give your audience a name..."
                  value={audienceName} onChange={e => setAudienceName(e.target.value)} />
            </div>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary ms-2">Run</button>
            <button className="btn btn-success ms-2">Save</button>
            <button className="btn btn-danger ms-2">Delete</button>
          </div>
        </div>
        <div className="row">
          <div className="col-auto"><div className="h5 fw-bold pt-2">Definition</div></div>
        </div>
        <div className="row">
          <div className="col-auto">
            <QueryOperationComponent operation={ruleset} criteria={ruleCriteria} index={0}
                onChange={(operation, _index) => setRuleset(operation)} />
          </div>
        </div>
      </div>
    </main>
  </>
}