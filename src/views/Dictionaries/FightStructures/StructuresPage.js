import React from 'react';
import AddButton from '../../Components/Buttons/AddButton';
import Page from '../../../components/Page/Page';
import PageHeader from '../../../components/Page/PageHeader';
import PageContent from '../../../components/Page/PageContent';
import Right from '../../../components/Common/Right';
import FightStructuresTable from '../../../components/Dictionaries/FightStructures/FightStructuresTable';

const FightStructuresView = props => {
    return (
        <Page>
            <PageHeader>
                Fight structures
                <Right>
                    <AddButton click={props.actions.addClick} />
                </Right>
            </PageHeader>
            <PageContent>
                <FightStructuresTable structures={props.structures}  actions={props.actions}/>
            </PageContent>
        </Page>
    );
};

export default FightStructuresView;