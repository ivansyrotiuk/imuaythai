import React from 'react';

export const FighterGymCountry = props => {
    const { fighter } = props;
    const gymName = fighter.gymName || 'No gym';

    return (
        <h6 className="card-subtitle mb-2 text-muted">
            {gymName}, {fighter.countryName}
        </h6>
    );
};

export default FighterGymCountry;
