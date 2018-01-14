import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../../Common/Icon';

const FightsButton = props => {
    return (
        <button className="btn btn-link" onClick={props.handleContestFightsClick}>
            Fights
        </button>
    );
};

export default FightsButton;
