import React from 'react';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/Page/PageHeader';
import PageContent from '../../components/Page/PageContent';
import DocumentContainer from '../../containers/Users/UserDocumentContainer';
import UserLicenses from '../../containers/Users/UserLicenses';
import UserDetails from '../../components/Users/UserDetails';
import UserFightsStatistics from '../../components/Users/UserFightsStatistics';
import CollapsiblePanel from '../../components/Common/CollapsiblePanel';
import UserName from '../../components/Users/UserName';
import ActionsBox from '../../components/Page/ActionsBox';
import ActionsBoxButton from '../../components/Page/ActionsBoxButton';
import Icon from '../../components/Common/Icon';
import Col from '../../components/Layout/Col';
import Row from '../../components/Layout/Row';

const UserDetailsPage = props => {
    const { user, handleEditClick, handleRolesClick, handlePrintClick, handleBuyLicenseClick } = props;
    return (
        <Page>
            <PageHeader>
                <UserName user={user} />
            </PageHeader>
            <PageContent>
                <CollapsiblePanel trigger="User details" open={true}>
                    <Row>
                        <Col className="col-9">
                            <UserDetails user={user} />
                        </Col>
                        <Col className="col-3">
                            <ActionsBox>
                                <ActionsBoxButton onClick={handleEditClick}>
                                    <Icon name="fa-pencil" /> Edit
                                </ActionsBoxButton>
                                <ActionsBoxButton onClick={handleRolesClick}>
                                    <Icon name="fa-users" /> Roles
                                </ActionsBoxButton>
                                <ActionsBoxButton onClick={handlePrintClick}>
                                    <Icon name="fa-qrcode" /> Print QR code
                                </ActionsBoxButton>
                                <ActionsBoxButton onClick={handleBuyLicenseClick}>
                                    <Icon name="fa-cart-plus" /> Buy license
                                </ActionsBoxButton>
                            </ActionsBox>
                        </Col>
                    </Row>
                </CollapsiblePanel>

                <CollapsiblePanel trigger="Fights" open={true}>
                    <UserFightsStatistics user={user} />
                </CollapsiblePanel>

                <CollapsiblePanel trigger="Documents" open={true}>
                    <DocumentContainer type="user" id={user.id} />
                </CollapsiblePanel>

                <CollapsiblePanel trigger="Licenses" open={true}>
                    <UserLicenses judgeLicenses={user.judgeLicenses} fighterLicenses={user.fighterLicenses} coachLicenses={user.coachLicenses}/>
                </CollapsiblePanel>
            </PageContent>
        </Page>
    );
};

export default UserDetailsPage;
