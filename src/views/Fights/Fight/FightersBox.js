import React from 'react';
import DetailedVersus from './DetailedVersus';
import BlueFighterVersusBox from '../../../components/Fights/Fighter/BlueFighterVersusBox';
import RedFighterVersusBox from '../../../components/Fights/Fighter/RedFighterVersusBox';

export const FightersBox = props => {
    const { fight } = props;

    return (
        <div className="row">
            <div className="col-md-5">
                {<RedFighterVersusBox fighter={fight.redAthlete} winner={fight.redAthleteWon} />}
            </div>
            <div className="col-md-2 text-center align-self-center">
                <DetailedVersus />
            </div>
            <div className="col-md-5">
                {<BlueFighterVersusBox fighter={fight.blueAthlete} winner={fight.blueAthleteWon} />}
            </div>
        </div>
    );
};

export default FightersBox;
