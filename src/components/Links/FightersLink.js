import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../Common/Icon';

const FightersLink = props => {
    return (
        <NavLink to="/fighters" className="nav-link" activeClassName="active">
            <Icon name="fa-user" /> Fighters
        </NavLink>
    );
};

export default FightersLink;
