import React from 'react';

import Page from "../../components/Page/Page";
import PageHeader from "../../components/Page/PageHeader";
import PageContent from "../../components/Page/PageContent";
import InstitutionViewBox from "../../components/Institutions/InstitutionViewBox";
import CollapsiblePanel from "../../components/Common/CollapsiblePanel";
import InstitutionMembersList from "../../components/Institutions/InstitutionMembersList";

const GymView = (props) => {
    const {gym, actions, members} = props;

    return (
        <Page>
            <PageHeader>
                <strong>{gym.name}</strong>
            </PageHeader>
            <PageContent>
                <CollapsiblePanel  trigger="Gym details" open={true}>
                    <InstitutionViewBox institution={gym} actions={actions}/>
                </CollapsiblePanel>
                <CollapsiblePanel  trigger="Members" open={false}>
                    <InstitutionMembersList members={members}/>
                </CollapsiblePanel>
            </PageContent>
        </Page>
    );
};

export default GymView;
