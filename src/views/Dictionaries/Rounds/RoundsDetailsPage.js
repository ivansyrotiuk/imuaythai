import React from 'react';
import LoadButton from '../../Components/Buttons/LoadButton';
import Page from '../../../components/Page/Page';
import PageHeader from '../../../components/Page/PageHeader';
import PageContent from '../../../components/Page/PageContent';
import RoundForm from '../../../components/Dictionaries/Rounds/RoundForm';

let RoundsDetailsPage = props => {
    const { round, saveRound } = props;

    return (
        <Page>
            <PageHeader>
                <strong>Round</strong>
            </PageHeader>
            <PageContent>
                <RoundForm initialValues={round} onSubmit={saveRound} />
            </PageContent>
        </Page>
    );
};

export default RoundsDetailsPage;
