import { useParams } from 'react-router-dom';
import { Grid, GridColumn } from 'rosie-ui';

export function TalentProfileView() {
  const { profileId } = useParams<{ profileId: string }>();

  return <>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Talent Profile</li>
      <li className="breadcrumb-item active">{profileId}</li>
    </ol>
    <main className="fullscreen">
      <div className="d-flex flex-row fullscreen">
        <div className="fullscreen" style={{width:'25rem'}}>
          <span className="offset-4 col-4 img-fluid rounded-circle mb-2" />
          <div className="text-primary text-center fw-bold"></div>
          <div className="text-center fw-bold mb-2"></div>
          <div className="row">
            <div className="col-6 text-muted text-end">Role:</div>
            <div className="col-6 fw-normal"></div>
          </div>
          <div className="row">
            <div className="col-6 text-muted text-end">Level:</div>
            <div className="col-6 fw-normal"></div>
          </div>
          <div className="row">
            <div className="col-6 text-muted text-end">Joining date:</div>
            <div className="col-6 fw-normal"></div>
          </div>
          <div className="row">
            <div className="col-6 text-muted text-end">Performance Rating:</div>
            <div className="col-6 fw-normal"></div>
          </div>
        </div>
        <div className="fullscreen" style={{flex:1}}>
          <div className="card fullscreen">
            <div className="card-header">
              <ul className="nav nav-pills card-header-pills justify-content-center">
                <li role="button" className="nav-item">
                  <span className="nav-link rounded-pill">Working History</span>
                </li>
                <li role="button" className="nav-item">
                  <span className="nav-link rounded-pill">Performance</span>
                </li>
                <li role="button" className="nav-item">
                  <span className="nav-link rounded-pill">Talent Mapping</span>
                </li>
              </ul>
            </div>
            <div className="card-body fullscreen">
              <div className="card-group fullscreen">
                <div className="card border-top-0 border-bottom-0 border-start-0 fullscreen">
                  <div className="card-header">Projects</div>
                  <div className="overflow-scroll-y">
                    <div className="list-group list-group-flush">
                    </div>
                  </div>
                </div>
                <div className="card border-top-0 border-bottom-0 border-start-0 fullscreen">
                  <div className="card-header">Roles</div>
                  <div className="overflow-scroll-y">
                    <div className="list-group list-group-flush">
                    </div>
                  </div>
                </div>
              </div>
              <Grid fitScreen>
                <GridColumn headerName="Period" field="period" style={{width:100}} />
                <GridColumn headerName="Performance Rating" field="rating" style={{width:200}} />
                <GridColumn headerName="Comment" field="comment" style={{flex:1}} />
              </Grid>
              <div className="card border-0 fullscreen">
                <div className="card-header p-2 d-flex">
                  <div className="ms-auto">
                    <button type="button" className="btn btn-sm btn-outline-secondary me-2">
                      <span className="fa fa-xmark me-1" /> Reset
                    </button>
                    <button type="button" className="btn btn-sm btn-primary">
                      <span className="fa fa-check me-1" /> Save
                    </button>
                  </div>
                </div>
                <div className="card-body p-2 fullscreen">
                  <div className="card">
                    <div className="card-header">Personal Career Aspiration</div>
                    <div className="card-body p-0">
                      <textarea rows={3} className="form-control border-0" />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-3">
                      <div>
                        <div className="form-label fw-bold">Retention risk</div>
                        <div className="btn-group" role="group">
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div>
                        <div className="form-label fw-bold">Strengths</div>
                        <div className="btn-group" role="group">
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div>
                        <div className="form-label fw-bold">Traits</div>
                        <div className="btn-group" role="group">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-6">
                      <label className="form-label fw-bold">Future Potential Roles/ Assignments</label>
                      <input type="text" className="form-control" />
                      <label className="form-label fw-bold">Experience of Interest</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-6">
                      <label className="form-label fw-bold">Development Requirements</label>
                      <div className="row">
                        <div className="col-6">
                          <div className="card">
                            <div className="card-header">success in the role</div>
                            <div className="card-body p-0">
                              <textarea rows={3} className="form-control border-0" />
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="card">
                            <div className="card-header">career growth</div>
                            <div className="card-body p-0">
                              <textarea rows={3} className="form-control border-0" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-6">
                      <div className="card">
                        <div className="card-header">Result</div>
                        <div className="card-body p-0">
                          <div className="container-fluid">
                            <div className="row">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <label className="form-label fw-bold">Successor for</label>
                      <input type="text" className="form-control" />
                      <div className="mt-2">
                        <label className="form-label fw-bold">Readiness</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
}