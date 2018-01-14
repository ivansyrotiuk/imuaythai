import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../../Common/Icon';
import Col from '../../Layout/Col';

const PendingRequestsButton = props => {
    return (
        <button className="btn btn-link" onClick={props.handlePendingRequestsClick}>
            Pending requests
        </button>
    );
};

export default PendingRequestsButton;
