import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../../Common/Icon';
import Col from '../../Layout/Col';

const ContestCategoriesButton = props => {
    return (
        <button className="btn btn-link" onClick={props.handleContestCategoriesClick}>
            Categories
        </button>
    );
};

export default ContestCategoriesButton;
