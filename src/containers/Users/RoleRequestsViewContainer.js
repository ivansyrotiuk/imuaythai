import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchRolesRequests, acceptRequest, rejectRequest } from '../../actions/RolesRequestsActions';
import Spinner from '../../views/Components/Spinners/Spinner';
import RoleRequestsView from '../../views/Users/RoleRequestsView';

export class RoleRequestsViewContainer extends Component {
    componentWillMount() {
        this.props.fetchRolesRequests();
    }

    render() {
        const { fetching } = this.props;

        if (fetching) {
            return <Spinner />;
        }

        return (
            <RoleRequestsView
                roleRequests={this.props.roleRequests}
                handleAcceptClick={this.props.accept}
                handleRejectClick={this.props.reject}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        roleRequests: state.RoleRequests.roleRequests,
        fetching: state.RoleRequests.fetching,
        fetched: state.RoleRequests.fetched
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchRolesRequests: () => {
            dispatch(fetchRolesRequests());
        },
        accept: request => {
            dispatch(acceptRequest(request));
        },
        reject: request => {
            dispatch(rejectRequest(request));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoleRequestsViewContainer);
