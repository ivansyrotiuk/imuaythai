import React, { Component } from 'react';
import Spinner from '../../views/Components/Spinners/Spinner';
import UserRoleView from '../../views/Users/UserRolesView';
import RequestUserRoleView from '../../views/Users/RequestUserRoleView';
import { fetchRoles } from '../../actions/RolesActions';
import { fetchUserRoles, saveUserRoleRequest, addUserRole, cancelAddingUserRole } from '../../actions/UserRolesActions';
import { connect } from 'react-redux';

class UserRolesPageContainer extends Component {
    constructor(props) {
        super(props);
        this.handleRequestRoleClick = this.handleRequestRoleClick.bind(this);
    }

    componentWillMount() {
        const userId = this.props.match.params.id;
        this.props.fetchUserRoles(userId);
        if (!this.props.roles.length) {
            this.props.fetchRoles();
        }
    }

    handleRequestRoleClick(values) {
        const userRoleRequest = {
            id: 0,
            roleId: values.roleId,
            userId: this.props.match.params.id
        };

        return this.props.saveUserRoleRequest(userRoleRequest);
    }

    render() {
        const { userRoles, adding, fetching } = this.props;

        if (fetching) {
            return <Spinner />;
        }

        if (adding) {
            return (
                <RequestUserRoleView
                    {...this.props}
                    handleRequestRoleClick={this.handleRequestRoleClick}
                    handleCancelAddingUserRole={this.props.cancelAddingUserRole}
                />
            );
        } else {
            return (
                <UserRoleView
                    userRoles={userRoles}
                    handleAddUserRoleClick={this.props.addUserRole}
                    handleRequestRoleClick={this.handleRequestRoleClick}
                />
            );
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        roles: state.Roles.roles,
        userRoles: state.UserRoles.roles,
        requestedRole: state.UserRoles.requestedRole,
        adding: state.UserRoles.adding,
        fetching: state.UserRoles.fetching
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchRoles: () => {
            dispatch(fetchRoles());
        },
        fetchUserRoles: userId => {
            dispatch(fetchUserRoles(userId));
        },
        saveUserRoleRequest: roleRequest => {
            return dispatch(saveUserRoleRequest(roleRequest));
        },
        addUserRole: () => {
            dispatch(addUserRole());
        },
        cancelAddingUserRole: () => {
            dispatch(cancelAddingUserRole());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRolesPageContainer);
