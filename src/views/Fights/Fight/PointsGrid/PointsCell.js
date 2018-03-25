import React from 'react';
import Row from '../../../../components/Layout/Row';

export const PointCell = props => {
    const points = props.points && props.points[props.roundId];
    const red = points && points.redFighterPoints;
    const blue = points && points.blueFighterPoints;
    const redPoints = !red ? '-' : red.fighterPoints;
    const bluePoints = !blue ? '-' : blue.fighterPoints;

    const redAccepted = red && red.accepted ? 'text-primary' : 'text-muted';
    const blueAccepted = blue && blue.accepted ? 'text-primary' : 'text-muted';
    return (
        <Row className="justify-content-center">
            <div className={redAccepted}>{redPoints}</div>
            /
            <div className={blueAccepted}>{bluePoints}</div>
        </Row>
    );
};

export default PointCell;
