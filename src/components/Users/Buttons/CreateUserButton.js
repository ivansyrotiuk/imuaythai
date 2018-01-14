import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../../Common/Icon';

const CreateUserButton = props => {
    return (
        <NavLink to="/users/create" className="nav-link p-0 m-0">
            <Icon name="fa-user-plus" /> Create user
        </NavLink>
    );
};

export default CreateUserButton;
