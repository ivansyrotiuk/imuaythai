import React from 'react';
import AddButton from '../../Components/Buttons/AddButton';
import Page from '../../../components/Page/Page';
import PageHeader from '../../../components/Page/PageHeader';
import PageContent from '../../../components/Page/PageContent';
import Right from '../../../components/Common/Right';
import WeightAgeCategoriesTable from '../../../components/Dictionaries/WeightAgeCategories/WeightAgeCategoriesTable';

const WeightAgeCategoriesView = props => {
    return (
        <Page>
            <PageHeader>
                Weight categories
                <Right>
                    <AddButton click={props.actions.addClick} />
                </Right>
            </PageHeader>
            <PageContent>
                <WeightAgeCategoriesTable categories={props.categories}  actions={props.actions}/>
            </PageContent>
        </Page>
    );
};

export default WeightAgeCategoriesView;