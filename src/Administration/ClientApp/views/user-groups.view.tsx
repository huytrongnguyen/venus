import { useEffect, useState } from 'react';
import { Rosie } from 'rosie-ui';
import { DataModel } from 'rosie-ui';
import { Grid, GridColumn, Dialog, useDialog } from 'rosie-ui';
import { UserGroup, UserGroupStore } from 'admin/core';
import { beforeProcessing } from 'venus/core';

// https://000001.awsstudygroup.com/3-create-admin-user-and-group/
export function UserGroupsView() {
  const [currentGroup, setCurrentGroup] = useState<UserGroup>(null),
        creationDialog = useDialog('#group-creation-dialog');

  useEffect(() => {
    UserGroupStore.load();
  }, [])

  return <>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Administration</li>
      <li className="breadcrumb-item">IAM</li>
      <li className="breadcrumb-item active">User groups</li>
      <div className="ms-auto">
        <button className="btn btn-sm btn-primary" onClick={() => creationDialog.show()}>
          <span className="fa fa-plus me-1" /> Create group
        </button>
      </div>
    </ol>
    <main className="fullscreen">
      <Grid fitScreen>
        <GridColumn headerName="Group name" field="groupName" style={{flex:1}} renderer={(groupName: string, record: DataModel<UserGroup>) => {
          return <span role="button" className="text-primary text-decoration-underline">{groupName}</span>
        }} />
        <GridColumn headerName="Users" field="totalUsers" style={{flex:1}} />
        <GridColumn headerName="Permissions" field="groupPermissions" style={{flex:1}} />
        <GridColumn headerName="Creation time" field="creationTime" style={{flex:1}} />
      </Grid>
    </main>
    {creationDialog.isShown && <GroupCreationDialog />}
  </>
}

function GroupCreationDialog() {
  const [groupName, setGroupName] = useState('');

  async function createGroup() {
    if (Rosie.isEmpty(groupName)) {
      // Rosie.alertError('Group Name is required.');
      return;
    }

    beforeProcessing();
    // UserGroupCreationModel.load({ pathParams: { groupName } });
  }

  return <Dialog id="group-creation-dialog" title="Group Creation Dialog">
    <div className="form-group row">
      <label className="col-4 col-form-label text-end">User group name</label>
      <div className="col-8">
        <input type="text" className="form-control" value={groupName} onChange={e => setGroupName(e.target.value)} />
      </div>
    </div>
    <div className="form-group mt-3 d-flex justify-content-end">
      <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
      <button type="button" className="btn btn-primary ms-1" onClick={createGroup}>Create</button>
    </div>
  </Dialog>
}