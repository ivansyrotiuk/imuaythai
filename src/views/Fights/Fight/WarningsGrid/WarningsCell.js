import React from 'react';
import classnames from 'classnames';
import Col from '../../../../components/Layout/Col';
import Row from '../../../../components/Layout/Row';

export const WarningsCell = props => {
    const red = props.points && props.points.redFighterPoints;
    const blue = props.points && props.points.blueFighterPoints;

    const redWarnings = !!red ? red.warnings : '-';
    const blueWarnings = !!blue ? blue.warnings : '-';

    const accepted = red && red.accepted ? 'text-primary' : 'text-muted';

    const cellClasses = classnames('text-center', accepted);

    return (
        <div className={cellClasses}>
            {redWarnings}/{blueWarnings}
        </div>
    );
};

export default WarningsCell;
