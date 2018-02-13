import React from 'react';

export const FighterKhanLevel = props => {
    const { fighter } = props;
    const khanLevel = fighter.khanLevel ? fighter.khanLevel.name : '-';

    return <h6 className="card-title">{khanLevel}</h6>;
};

export default FighterKhanLevel;
