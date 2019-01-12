import React from "react";
import Row from "../../components/Layout/Row";
import Page from "../../components/Page/Page";
import PageHeader from "../../components/Page/PageHeader";
import PageContent from "../../components/Page/PageContent";
import LicenseTypeCard from "../../components/Licenses/LicenseTypeCard";

const AvailableLicenseView = props => {
    const { licenseTypes } = props;
    const types = licenseTypes.map(t => <LicenseTypeCard type={t} />);
    return (
        <Page>
            <PageHeader>Available licenses</PageHeader>
            <PageContent>
                <Row>{types}</Row>
            </PageContent>
        </Page>
    );
};

export default AvailableLicenseView;
