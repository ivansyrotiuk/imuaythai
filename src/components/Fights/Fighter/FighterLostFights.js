import React from 'react';

export const FighterLostFights = props => {
    const { fighter } = props;
    return <h6 className="card-title">{fighter.lost}</h6>;
};

export default FighterLostFights;
