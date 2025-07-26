import { useEffect, useState } from 'react';
import { DataModel, Rosie } from 'rosie/core';
import { Grid, GridColumn } from 'rosie/components';
import { UserGroup } from 'admin/core';

export function UserGroupView() {
  const [currentGroup, setCurrentGroup] = useState<UserGroup>(null);
        // creationDialog = useDialog('#group-creation-dialog');

  useEffect(() => {
    // UserGroupStore.load();
  }, [])

  return <>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Administration</li>
      {(!currentGroup?.groupId) && <li className="breadcrumb-item active">User Groups</li>}
      {!!currentGroup?.groupId && <>
        <li className="breadcrumb-item text-primary text-decoration-underline">
          <span role="button" onClick={() => setCurrentGroup(null)}>Groups</span>
        </li>
        <li className="breadcrumb-item active">{currentGroup.groupName}</li>
      </>}
      {/* <div className="ms-auto">
        {(!currentGroup?.groupId) && <>
          <button className="btn btn-sm btn-primary" onClick={() => creationDialog.show()}>
            <span className="fa fa-plus me-1" /> Add Group
          </button>
        </>}
      </div> */}
    </ol>
    <main>
      <Grid fitScreen>
        <GridColumn headerName="Group Name" field="groupName" style={{flex:1}} renderer={(groupName: string, record: DataModel<UserGroup>) => {
          return <span role="button" className="text-primary text-decoration-underline">{groupName}</span>
        }} />
      </Grid>
      {/* {!currentGroup?.groupId && <Grid fitScreen store={UserGroupStore}>
        <GridColumn headerName="Group Name" field="groupName" style={{flex:1}} renderer={(groupName: string, record: DataModel<UserGroup>) => {
          return <span role="button" className="text-primary text-decoration-underline" onClick={() => setCurrentGroup(record.getData())}>{groupName}</span>
        }} />
        <GridColumn headerName="Users" field="users" style={{width:200}} listColumn listItemRenderer={(user: SiteUser) => user.username} />
      </Grid>} */}
      {/* {currentGroup?.groupId && <Grid fitScreen data={currentGroup?.users ?? []}
        bbar={<div className="d-flex">
          <div className="ms-auto">Total Users: {currentGroup?.users?.length ?? 0}</div>
        </div>
        }>
        <GridColumn headerName="Username" field="username" style={{flex:1}} />
        <GridColumn headerName="Last Login Time" field="lastLoginTime" style={{width:150}} dateColumn />
        <GridFooter>
          <div className="d-flex">
            <div className="ms-auto">Total Users: {currentGroup?.users?.length ?? 0}</div>
          </div>
        </GridFooter>
      </Grid>} */}
    </main>
    {/* {creationDialog.isShown && <GroupCreationDialog />} */}
  </>
}

// function GroupCreationDialog() {
//   const [groupName, setGroupName] = useState('');

//   async function createGroup() {
//     if (Rosie.isEmpty(groupName)) {
//       Rosie.alertError('Group Name is required.');
//       return;
//     }

//     Rosie.beforeProcessing();
//     UserGroupCreationModel.load({ pathParams: { groupName } });
//   }

//   return <Dialog id="group-creation-dialog" title="Group Creation Dialog">
//     <div className="form-group row">
//       <label className="col-4 col-form-label text-end">Group Name</label>
//       <div className="col-8">
//         <input type="text" className="form-control" value={groupName} onChange={e => setGroupName(e.target.value)} />
//       </div>
//     </div>
//     <div className="form-group mt-3 d-flex justify-content-end">
//       <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
//       <button type="button" className="btn btn-primary ms-1" onClick={createGroup}>Create</button>
//     </div>
//   </Dialog>
// }