import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../../Common/Icon';

const JudgesManageButton = props => {
    return (
        <button className="btn btn-link" onClick={props.handleManageJudgesClick}>
            Manage judges
        </button>
    );
};

export default JudgesManageButton;
