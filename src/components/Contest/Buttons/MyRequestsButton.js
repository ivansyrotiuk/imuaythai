import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../../Common/Icon';

const MyRequestsButton = props => {
    return (
        <button className="btn btn-link" onClick={props.handleMyRequestsClick}>
            My requests
        </button>
    );
};

export default MyRequestsButton;
