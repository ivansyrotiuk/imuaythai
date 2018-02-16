import React from 'react';
import AddButton from '../../Components/Buttons/AddButton';
import Page from '../../../components/Page/Page';
import PageHeader from '../../../components/Page/PageHeader';
import PageContent from '../../../components/Page/PageContent';
import Right from '../../../components/Common/Right';
import ContestCategoriesTable from '../../../components/Dictionaries/ContestCategories/ContestCategoriesTable';

const ContestAgeCategoriesView = props => {
    return (
        <Page>
            <PageHeader>
                Contest category
                <Right>
                    <AddButton click={props.actions.addClick} />
                </Right>
            </PageHeader>
            <PageContent>
                <ContestCategoriesTable categories={props.categories} actions={props.actions} />
            </PageContent>
        </Page>
    );
};

export default ContestAgeCategoriesView;
