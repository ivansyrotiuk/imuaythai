import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContestViewPage from '../../views/Contest/ContestViewPage';
import Spinner from '../../views/Components/Spinners/Spinner';
import { fetchContest, fetchContestRequests } from '../../actions/ContestActions';
import { CONTEST_FIGHTER, CONTEST_JUDGE, CONTEST_DOCTOR } from '../../common/contestRoleTypes';
import { CONTEST_REQUEST_PENDING, CONTEST_REQUEST_ACCEPTED } from '../../common/contestRequestStatuses';

class ContestViewPageContainer extends Component {
    componentWillMount() {
        const id = this.props.match.params.id;
        this.props.fetchContest(id);
        this.props.fetchContestRequests(id);
    }

    handleEditContestClick() {
        this.props.history.push(this.props.match.url + '/edit');
    }

    handlePendingRequestsClick() {
        this.props.history.push(this.props.match.url + '/requests');
    }

    handleMyRequestsClick() {
        this.props.history.push(this.props.match.url + '/myrequests');
    }

    handleContestCategoriesClick() {
        this.props.history.push(this.props.match.url + '/categories');
    }

    handleManageJudgesClick() {
        this.props.history.push(this.props.match.url + '/judges');
    }

    handleContestFightsClick() {
        this.props.history.push(this.props.match.url + '/fights');
    }

    render() {
        const { contest, fetching, requests } = this.props;
        if (fetching || !contest) {
            return <Spinner />;
        }

        const actions = {
            handleEditContestClick: this.handleEditContestClick.bind(this),
            handleMyRequestsClick: this.handleMyRequestsClick.bind(this),
            handlePendingRequestsClick: this.handlePendingRequestsClick.bind(this),
            handleContestCategoriesClick: this.handleContestCategoriesClick.bind(this),
            handleManageJudgesClick: this.handleManageJudgesClick.bind(this),
            handleContestFightsClick: this.handleContestFightsClick.bind(this)
        };

        const fightersRequests = requests.filter(
            r => r.type === CONTEST_FIGHTER && r.status === CONTEST_REQUEST_ACCEPTED
        );
        const judgesRequests = requests.filter(r => r.type === CONTEST_JUDGE && r.status === CONTEST_REQUEST_ACCEPTED);
        const doctorsRequests = requests.filter(
            r => r.type === CONTEST_DOCTOR && r.status === CONTEST_REQUEST_ACCEPTED
        );
        const pendingRequests = requests.filter(r => r.status === CONTEST_REQUEST_PENDING);

        const requestsStatistics = {
            fightersCount: fightersRequests.length,
            judgesCount: judgesRequests.length,
            doctorsCount: doctorsRequests.length,
            pendingCount: pendingRequests.length
        };

        return (
            <ContestViewPage
                contest={contest}
                fightersRequests={fightersRequests}
                judgesRequests={judgesRequests}
                doctorsRequests={doctorsRequests}
                actions={actions}
                statistics={requestsStatistics}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        contest: state.Contest.singleContest,
        fetching: state.Contest.fetching,
        requests: state.Contest.requests
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchContest: id => {
            dispatch(fetchContest(id));
        },
        fetchContestRequests: contestId => {
            dispatch(fetchContestRequests(contestId));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContestViewPageContainer);
