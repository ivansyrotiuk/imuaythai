import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../Common/Icon';

const CoachesLink = props => {
    return (
        <NavLink to="/coaches" className="nav-link" activeClassName="active">
            <Icon name="fa-male" />
            Coaches
        </NavLink>
    );
};

export default CoachesLink;
