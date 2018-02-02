import React from 'react';
import AddButton from '../../Components/Buttons/AddButton';
import Page from '../../../components/Page/Page';
import PageHeader from '../../../components/Page/PageHeader';
import PageContent from '../../../components/Page/PageContent';
import Right from '../../../components/Common/Right';
import ContestPointsTable from '../../../components/Dictionaries/ContestPoints/ContestPointsTable';

const ContestPointsView = props => {
    return (
        <Page>
            <PageHeader>
                Contest points
                <Right>
                    <AddButton click={props.actions.addClick} />
                </Right>
            </PageHeader>
            <PageContent>
                <ContestPointsTable points={props.points}  actions={props.actions}/>
            </PageContent>
        </Page>
    );
};

export default ContestPointsView;
