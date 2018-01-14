import React from 'react';

import Page from '../../components/Page/Page';
import PageHeader from '../../components/Page/PageHeader';
import PageContent from '../../components/Page/PageContent';
import UserTable from '../../components/Users/UserTable';
import CreateUserButtonAuth from '../../components/Users/Buttons/CreateUserButtonAuth';
import Right from '../../components/Common/Right';

const UsersView = props => {
    return (
        <Page>
            <PageHeader>
                User
                <Right>
                    <CreateUserButtonAuth onClick={props.handleCreateUserClick} />
                </Right>
            </PageHeader>
            <PageContent>
                <UserTable {...props} />
            </PageContent>
        </Page>
    );
};

export default UsersView;
