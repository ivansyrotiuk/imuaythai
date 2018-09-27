import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../Common/Icon';

const DoctorsLink = props => {
    return (
        <NavLink to="/judges" className="nav-link" activeClassName="active">
            <Icon name="fa-user-md" />
            Doctors
        </NavLink>
    );
};

export default DoctorsLink;
