import React from 'react';
import AddButton from '../../Components/Buttons/AddButton';
import Page from '../../../components/Page/Page';
import PageHeader from '../../../components/Page/PageHeader';
import PageContent from '../../../components/Page/PageContent';
import Right from '../../../components/Common/Right';
import ContestRangesTable from '../../../components/Dictionaries/ContestRanges/ContestRangesTable';

const ContestRangesView = props => {
    return (
        <Page>
            <PageHeader>
                Ranges
                <Right>
                    <AddButton click={props.actions.addClick} />
                </Right>
            </PageHeader>
            <PageContent>
                <ContestRangesTable ranges={props.ranges}  actions={props.actions}/>
            </PageContent>
        </Page>
    );
};

export default ContestRangesView;
