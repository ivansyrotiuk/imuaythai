import React, { Component } from 'react';
import AddButton from '../Components/Buttons/AddButton';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/Page/PageHeader';
import PageContent from '../../components/Page/PageContent';
import Right from '../../components/Common/Right';
import ContestsTable from '../../components/Contest/ContestsTable';

const ContestsView = props => {
    return (
        <Page>
            <PageHeader>
                <strong>Contests</strong>
                <Right>
                    <AddButton click={props.addContestClick} />
                </Right>
            </PageHeader>
            <PageContent>
                <ContestsTable contests={props.contests} handleRemoveContestClick={props.handleRemoveContestClick} />
            </PageContent>
        </Page>
    );
};

export default ContestsView;
