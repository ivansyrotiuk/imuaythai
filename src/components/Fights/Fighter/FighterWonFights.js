import React from 'react';

export const FighterWonFights = props => {
    const { fighter } = props;
    return <h6 className="card-title">{fighter.won}</h6>;
};

export default FighterWonFights;
