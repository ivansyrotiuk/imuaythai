import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Dashboard from '../../views/Dashboard/Dashboard';
import Spinner from '../../views/Components/Spinners/Spinner';
import { fetchContestEvents } from '../../actions/DashboardActions';

class DashboardContainer extends Component {
    componentWillMount() {
        this.props.fetchContestEvents();
    }

    render() {
        const { fetching, events } = this.props;
        if (fetching) {
            return <Spinner />;
        }

        const calendarEvents = events.map(event => ({
            ...event,
            title: event.name,
            allDay: true,
            url: '#/contests/' + event.contestId,
            start: moment(event.from).format('YYYY-MM-DD'),
            end: moment(event.to).format('YYYY-MM-DD')
        }));

        return <Dashboard events={calendarEvents} />;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        fetching: state.Dashboard.fetching,
        events: state.Dashboard.events
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchContestEvents: () => {
            dispatch(fetchContestEvents());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
