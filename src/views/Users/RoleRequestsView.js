import React from 'react';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/Page/PageHeader';
import PageContent from '../../components/Page/PageContent';
import RoleRequestsTable from '../../components/Users/RoleRequestsTable';

const RoleRequestsView = props => {
    return (
        <Page>
            <PageHeader>Role requests</PageHeader>
            <PageContent>
                <RoleRequestsTable {...props} />
            </PageContent>
        </Page>
    );
};

export default RoleRequestsView;
