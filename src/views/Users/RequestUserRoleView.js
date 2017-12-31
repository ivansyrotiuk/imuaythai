import React from 'react';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/Page/PageHeader';
import PageContent from '../../components/Page/PageContent';
import UserRoleRequestForm from '../../components/Users/UserRoleRequestForm';

const RequestUserRoleView = props => {
    const { roles, userRoles, handleRequestRoleClick, handleCancelAddingUserRole } = props;
    const availableRoles = roles.filter(r => !userRoles.some(u => u.roleId === r.id));

    return (
        <Page>
            <PageHeader>Add role request</PageHeader>
            <PageContent>
                <UserRoleRequestForm
                    roles={availableRoles}
                    onSubmit={handleRequestRoleClick}
                    onCancel={handleCancelAddingUserRole}
                />
            </PageContent>
        </Page>
    );
};

export default RequestUserRoleView;
