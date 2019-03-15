import React from "react";
import Avatar from "react-avatar";
import InstitutionInfoBox from "./InstitutionInfoBox";
import SocialNetworksBox from "../Social/SocialNetworksBox";
import ActionsBox from "../Page/ActionsBox";
import ActionsBoxButton from "../Page/ActionsBoxButton";
import Icon from "../Common/Icon";
import Row from "../Layout/Row";
import Col from "../Layout/Col";
import { userCanEditThisInstitution } from "../../auth/auth";

const InstitutionViewBox = props => {
    const { institution, actions } = props;
    const ActionBoxAuth = userCanEditThisInstitution(() => (
        <ActionsBox>
            <ActionsBoxButton onClick={actions.goToEditPage}>
                <Icon name="fa-pencil" /> Edit
            </ActionsBoxButton>
            <ActionsBoxButton onClick={actions.goToCreateMemberPage}>
                <Icon name="fa-plus" /> Create a member
            </ActionsBoxButton>
        </ActionsBox>
    ));
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
                <ActionBoxAuth />
            </Col>
        </Row>
    );
};

export default InstitutionViewBox;
