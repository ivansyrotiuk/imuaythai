import React from 'react';

import Page from "../../components/Page/Page";
import PageHeader from "../../components/Page/PageHeader";
import PageContent from "../../components/Page/PageContent";
import InstitutionViewBox from "../../components/Institutions/InstitutionViewBox";
import CollapsiblePanel from "../../components/Common/CollapsiblePanel";
import InstitutionMembersList from "../../components/Institutions/InstitutionMembersList";
import InstitutionGymsList from "../../components/Institutions/InstitutionGymsList";


const FederationView = (props) => {
    const {federation, actions, members, gyms} = props;

    return (
        <Page>
            <PageHeader>
                <strong>{federation.name}</strong>
            </PageHeader>
            <PageContent>
                <CollapsiblePanel  trigger="Federation details" open={true}>
                    <InstitutionViewBox institution={federation} actions={actions}/>
                </CollapsiblePanel>
                <CollapsiblePanel  trigger="Members" open={false}>
                    <InstitutionMembersList members={members}/>
                </CollapsiblePanel>
                <CollapsiblePanel  trigger="Gyms" open={false}>
                    <InstitutionGymsList gyms={gyms}/>
                </CollapsiblePanel>
            </PageContent>
        </Page>
    );
};

export default FederationView;
