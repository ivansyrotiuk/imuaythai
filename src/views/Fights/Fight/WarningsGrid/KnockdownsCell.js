import React from 'react';
import classnames from 'classnames';

export const KnockdownsCell = props => {
    const points = props.points && props.points[props.roundId];
    const red = points && points.redFighterPoints;
    const blue = points && points.blueFighterPoints;

    const redKnockDown = !red ? '-' : red.knockDown;
    const blueKnockDown = !blue ? '-' : blue.knockDown;

    const accepted = red && red.accepted ? 'text-primary' : 'text-muted';
    const cellClasses = classnames('text-center', accepted);

    return (
        <div className={cellClasses}>
            {redKnockDown}/{blueKnockDown}
        </div>
    );
};

export default KnockdownsCell;
