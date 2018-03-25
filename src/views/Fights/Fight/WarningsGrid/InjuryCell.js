import React from 'react';
import classnames from 'classnames';

export const InjuryCell = props => {
    const points = props.points && props.points[props.roundId];
    const red = points && points.redFighterPoints;
    const blue = points && points.blueFighterPoints;

    const redJ = !red ? '-' : red.j;
    const blueJ = !blue ? '-' : blue.j;

    const accepted = red && red.accepted ? 'text-primary' : 'text-muted';
    const cellClasses = classnames('text-center', accepted);
    return (
        <div className={cellClasses}>
            {redJ}/{blueJ}
        </div>
    );
};

export default InjuryCell;
