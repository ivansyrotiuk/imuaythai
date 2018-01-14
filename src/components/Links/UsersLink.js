import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../Common/Icon';

const UsersLink = props => {
    return (
        <NavLink to="/users" className="nav-link" activeClassName="active">
            <Icon name="fa-users" /> All users
        </NavLink>
    );
};

export default UsersLink;
