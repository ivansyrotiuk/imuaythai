import React from 'react';
import classnames from 'classnames';
import Col from '../../../../components/Layout/Col';
import Row from '../../../../components/Layout/Row';

export const WarningsCell = props => {
    const red = props.points.redFighterPoints;
    const blue = props.points.blueFighterPoints;

    const redWarnings = red !== null ? red.warnings : '-';
    const blueWarnings = blue !== null ? blue.warnings : '-';

    const accepted = red && red.accepted ? 'text-primary' : 'text-muted';

    const cellClasses = classnames('text-center', accepted);

    return (
        <div className={cellClasses}>
            {redWarnings}/{blueWarnings}
        </div>
    );
};

export default WarningsCell;
