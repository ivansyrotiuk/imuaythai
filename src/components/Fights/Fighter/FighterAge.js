import React from 'react';

export const FighterAge = props => {
    const { fighter } = props;
    return <h6 className="card-title">{fighter.age}</h6>;
};

export default FighterAge;
