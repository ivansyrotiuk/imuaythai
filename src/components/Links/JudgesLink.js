import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../Common/Icon';

const JudgesLink = props => {
    return (
        <NavLink to="/judges" className="nav-link" activeClassName="active">
            <Icon name="fa-gavel" />
            Judges
        </NavLink>
    );
};

export default JudgesLink;
