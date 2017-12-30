import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../views/Components/Spinners/Spinner';
import { fetchUser } from '../../actions/UsersActions';
import UserDetailsPage from '../../views/Users/UserDetailsPage';

class UserViewPageContainer extends Component {
    componentWillMount() {
        const userId = this.props.match.params.id;
        this.props.fetchUser(userId);
    }

    handleEditClick() {
        this.props.history.push(this.props.match.url + '/edit');
    }

    handleRolesClick() {
        this.props.history.push(this.props.match.url + '/roles');
    }

    handlePrintClick() {
        alert('Feature is disabled.');
        var content = document.getElementById('divcontents');
        var pri = document.getElementById('9p;p;0;p/').contentWindow;
        pri.document.open();
        pri.document.write(content.innerHTML);
        pri.document.close();
        pri.focus();
        pri.print();
    }

    render() {
        const { fetching, user } = this.props;

        if (fetching || !user) {
            return <Spinner />;
        }

        const actions = {
            handleEditClick: this.handleEditClick.bind(this),
            handleRolesClick: this.handleRolesClick.bind(this),
            handlePrintClick: this.handlePrintClick.bind(this)
        };

        return <UserDetailsPage user={user} {...actions} />;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        countries: state.Countries.countries,
        user: state.SingleUser.user,
        fetching: state.SingleUser.fetching,
        qrcode: state.Account.qrcode
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchUser: id => {
            dispatch(fetchUser(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserViewPageContainer);
