import React from 'react';
import classnames from 'classnames';

export const KnockdownsCell = props => {
    const red = props.points && props.points.redFighterPoints;
    const blue = props.points && props.points.blueFighterPoints;

    const redKnockDown = !!red ? red.knockDown : '-';
    const blueKnockDown = !!blue ? blue.knockDown : '-';

    const accepted = red && red.accepted ? 'text-primary' : 'text-muted';
    const cellClasses = classnames('text-center', accepted);

    return (
        <div className={cellClasses}>
            {redKnockDown}/{blueKnockDown}
        </div>
    );
};

export default KnockdownsCell;
