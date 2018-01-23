import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Dashboard from '../../views/Dashboard/Dashboard';
import Spinner from '../../views/Components/Spinners/Spinner';
import { fetchConstests } from '../../actions/ContestActions';

class DashboardContainer extends Component {
    componentWillMount() {
        this.props.fetchConstests();
    }

    render() {
        const { fetching, contests } = this.props;
        if (fetching) {
            return <Spinner />;
        }

        const mappedContests = contests.map(c => ({
            title: c.name,
            url: '#/contests/' + c.id,
            start: moment(c.date).format('YYYY-MM-DD'),
            end: moment(c.date)
                .add('days', c.duration)
                .format('YYYY-MM-DD')
        }));

        return <Dashboard contests={mappedContests} />;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        fetching: state.Contest.fetching,
        contests: state.Contest.contests
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchConstests: () => {
            dispatch(fetchConstests());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
