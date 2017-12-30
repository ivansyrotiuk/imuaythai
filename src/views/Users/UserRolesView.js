import React from 'react';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/Page/PageHeader';
import PageContent from '../../components/Page/PageContent';
import UserRolesTable from '../../components/Users/UserRolesTable';
import Right from '../../components/Common/Right';
import AddButton from '../../components/Buttons/AddButton';

const UserRolesView = props => {
    return (
        <Page>
            <PageHeader>
                User role
                <Right>
                    <AddButton onClick={props.handleAddUserRoleClick} tooltip="Add new role request" />
                </Right>
            </PageHeader>
            <PageContent>
                <UserRolesTable userRoles={props.userRoles} handleRequestRoleClick={props.handleRequestRoleClick} />

                <Right>
                    <button className="btn btn-primary mt-1" onClick={props.handleAddUserRoleClick}>
                        Add new role request
                    </button>
                </Right>
            </PageContent>
        </Page>
    );
};

export default UserRolesView;
