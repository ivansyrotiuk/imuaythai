import React from 'react';
import AddButton from '../../Components/Buttons/AddButton';
import Page from '../../../components/Page/Page';
import PageHeader from '../../../components/Page/PageHeader';
import PageContent from '../../../components/Page/PageContent';
import Right from '../../../components/Common/Right';
import ContestTypesTable from '../../../components/Dictionaries/ContestTypes/ContestTypesTable';

const ContestTypesView = props => {
    return (
        <Page>
            <PageHeader>
                Types
                <Right>
                    <AddButton click={props.actions.addClick} />
                </Right>
            </PageHeader>
            <PageContent>
                <ContestTypesTable types={props.types}  actions={props.actions}/>
            </PageContent>
        </Page>
    );
};

export default ContestTypesView;
