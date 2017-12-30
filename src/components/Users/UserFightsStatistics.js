import React from 'react';
import Row from '../Layout/Row';
import FightsCountBox from '../Fights/FightsCountBox';
import WonFightsCountBox from '../Fights/WonFightsCountBox';
import LoseFightsCountBox from '../Fights/LoseFightsCountBox';

const UserFightsStatistics = props => {
    return (
        <Row>
            <FightsCountBox count={props.fightsCount} />
            <WonFightsCountBox count={props.wonFightsCount} />
            <LoseFightsCountBox count={props.loseFightsCount} />
        </Row>
    );
};
export default UserFightsStatistics;
