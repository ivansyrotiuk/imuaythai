import React from 'react';
import AddButton from '../../Components/Buttons/AddButton';
import Page from '../../../components/Page/Page';
import PageHeader from '../../../components/Page/PageHeader';
import PageContent from '../../../components/Page/PageContent';
import Right from '../../../components/Common/Right';
import RoundsTable from '../../../components/Dictionaries/Rounds/RoundsTable';

const RoundsView = props => {
    return (
        <Page>
            <PageHeader>
                Rounds
                <Right>
                    <AddButton click={props.actions.addClick} />
                </Right>
            </PageHeader>
            <PageContent>
                <RoundsTable rounds={props.rounds}  actions={props.actions}/>
            </PageContent>
        </Page>
    );
};

export default RoundsView;