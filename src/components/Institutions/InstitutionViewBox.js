import React from 'react';
import Avatar from 'react-avatar';
import InstitutionInfoBox from './InstitutionInfoBox';
import SocialNetworksBox from '../Social/SocialNetworksBox';
import ActionsBox from '../Page/ActionsBox';
import ActionsBoxButton from '../Page/ActionsBoxButton';
import Icon from '../Common/Icon';
import Row from '../Layout/Row';
import Col from '../Layout/Col';

const InstitutionViewBox = props => {
    const { institution, actions } = props;
    return (
        <Row>
            <Col className="col-md-9">
                <Row>
                    <div className="col-auto">
                        <Avatar size={170} name={institution.name} src={institution.logo} />
                        <div className="mt-1">
                            <SocialNetworksBox
                                className="justify-content-center"
                                facebook={institution.facebook}
                                twitter={institution.twitter}
                                instagram={institution.instagram}
                                vk={institution.vk}
                            />
                        </div>
                    </div>
                    <Col>
                        <InstitutionInfoBox institution={institution} />
                    </Col>
                </Row>
            </Col>
            <Col className="col-md-3">
                <ActionsBox>
                    <ActionsBoxButton onClick={actions.goToEditPage}>
                        <Icon name="fa-pencil" /> Edit
                    </ActionsBoxButton>
                </ActionsBox>
            </Col>
        </Row>
    );
};

export default InstitutionViewBox;
