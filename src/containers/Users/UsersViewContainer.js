import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../views/Components/Spinners/Spinner';
import { fetchUsers, deleteUser } from '../../actions/UsersActions';
import UsersView from '../../views/Users/UsersView';

class UsersViewContainer extends Component {
    componentWillMount() {
        this.props.fetchUsers();
    }

    render() {
        const { users, fetching } = this.props;

        if (fetching) {
            return <Spinner />;
        }

        return <UsersView users={users} deleteUser={this.props.deleteUser}/>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.Users.users,
        fetching: state.Users.fetching
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => {
            dispatch(fetchUsers());
        },
        deleteUser: id => {
            dispatch(deleteUser(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersViewContainer);
