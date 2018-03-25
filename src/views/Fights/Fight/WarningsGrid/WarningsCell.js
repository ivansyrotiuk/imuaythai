import React from 'react';
import classnames from 'classnames';
import Col from '../../../../components/Layout/Col';
import Row from '../../../../components/Layout/Row';

export const WarningsCell = props => {
    const points = props.points && props.points[props.roundId];
    const red = points && points.redFighterPoints;
    const blue = points && points.blueFighterPoints;

    const redWarnings = !red ? '-' : red.warnings;
    const blueWarnings = !blue ? '-' : blue.warnings;

    const accepted = red && red.accepted ? 'text-primary' : 'text-muted';

    const cellClasses = classnames('text-center', accepted);

    return (
        <div className={cellClasses}>
            {redWarnings}/{blueWarnings}
        </div>
    );
};

export default WarningsCell;
