import React, { Component } from 'react';
import moment from 'moment';
import Col from '../../components/Layout/Col';
import Row from '../../components/Layout/Row';
import SocialNetworksBox from '../../components/Social/SocialNetworksBox';
import PendingRequestsButtonAuth from '../../components/Contest/Buttons/PendingRequestsButtonAuth';
import ContestCategoriesButtonAuth from '../../components/Contest/Buttons/ContestCategoriesButtonAuth';
import FightsButtonAuth from '../../components/Contest/Buttons/FightsButtonAuth';
import JudgesManageButtonAuth from '../../components/Contest/Buttons/JudgesManageButtonAuth';
import MyRequestsButtonAuth from '../../components/Contest/Buttons/MyRequestsButtonAuth';

import ActionsBox from '../../components/Page/ActionsBox';
import ActionBoxItem from '../../components/Page/ActionBoxItem';

export default class ContestInfoCard extends Component {
    render() {
        const {
            contest,
            handlePendingRequestsClick,
            handleMyRequestsClick,
            handleContestCategoriesClick,
            handleContestFightsClick,
            handleManageJudgesClick,
            fightersCount,
            judgesCount,
            doctorsCount,
            pendingCount
        } = this.props;
        return (
            <Row>
                <div className="col-md-2">
                    <img src="/img/contest_poster.jpg" className="img-thumbnail" />
                </div>
                <div className="col-md-7">
                    <Row>
                        <p className="h1">{contest.name}</p>
                    </Row>
                    <Row>
                        <h3>
                            {contest.country && contest.country.name}, {moment(contest.date).format('YYYY.DD.MM')} -{' '}
                            {moment(contest.date)
                                .add('days', contest.duration)
                                .format('YYYY.DD.MM')}
                        </h3>
                    </Row>
                    <Row>
                        <h6>
                            {contest.city}, {contest.address}
                        </h6>
                    </Row>
                    <Row>
                        <h6>Organizator: {contest.institution && contest.institution.name}</h6>
                    </Row>
                    <Row>
                        <h6>
                            Website:{' '}
                            <a href={contest.website} target="_blank">
                                {contest.website}
                            </a>
                        </h6>
                    </Row>
                    <Row>
                        <SocialNetworksBox {...contest} />
                    </Row>
                    <Row>
                        <div className="h6">Registration statistic</div>
                    </Row>
                    <Row>
                        <Col className="col-sm-3">
                            <div className="callout callout-warning">
                                <small className="text-muted">Pending requests</small>
                                <br />
                                <strong className="h4">{pendingCount}</strong>
                            </div>
                        </Col>
                        <Col className="col-sm-3">
                            <div className="callout callout-info">
                                <small className="text-muted">Fighters</small>
                                <br />
                                <strong className="h4">{fightersCount}</strong>
                            </div>
                        </Col>
                        <Col className="col-sm-3">
                            <div className="callout callout-success">
                                <small className="text-muted">Judges</small>
                                <br />
                                <strong className="h4">{judgesCount}</strong>
                            </div>
                        </Col>
                        <Col className="col-sm-3">
                            <div className="callout callout-danger">
                                <small className="text-muted">Doctors</small>
                                <br />
                                <strong className="h4">{doctorsCount}</strong>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="col-md-3">
                    <ActionsBox>
                        <ActionBoxItem>
                            <div>
                                <PendingRequestsButtonAuth handlePendingRequestsClick={handlePendingRequestsClick} />
                                <span className="badge badge-pill badge-warning">{pendingCount}</span>
                            </div>
                        </ActionBoxItem>
                        <ActionBoxItem>
                            <ContestCategoriesButtonAuth handleContestCategoriesClick={handleContestCategoriesClick} />
                        </ActionBoxItem>
                        <ActionBoxItem>
                            <FightsButtonAuth handleContestFightsClick={handleContestFightsClick} />
                        </ActionBoxItem>
                        <ActionBoxItem>
                            <JudgesManageButtonAuth handleManageJudgesClick={handleManageJudgesClick} />
                        </ActionBoxItem>
                        <ActionBoxItem>
                            <MyRequestsButtonAuth handleMyRequestsClick={handleMyRequestsClick} />
                        </ActionBoxItem>
                    </ActionsBox>
                </div>
            </Row>
        );
    }
}
