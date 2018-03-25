import React from 'react';
import classnames from 'classnames';

export const CautionsCell = props => {
    const points = props.points && props.points[props.roundId];
    const red = points && points.redFighterPoints;
    const blue = points && points.blueFighterPoints;

    const redCautions = !red ? '-' : red.cautions;
    const blueCautions = !blue ? '-' : blue.cautions;

    const accepted = red && red.accepted ? 'text-primary' : 'text-muted';
    const cellClasses = classnames('text-center', accepted);

    return (
        <div className={cellClasses}>
            {redCautions}/{blueCautions}
        </div>
    );
};

export default CautionsCell;
