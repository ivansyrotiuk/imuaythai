import React from 'react';
import CornerBox from './CornerBox';
import FighterKhanLevel from './FighterKhanLevel';
import UserName from '../../Users/UserName';
import Avatar from 'react-avatar';
import WinnerOfPreviousFight from './WinnerOfPreviousFight';
import FighterGymCountry from './FighterGymCountry';
import FighterAge from './FighterAge';
import FighterWonFights from './FighterWonFights';
import FighterLostFights from './FighterLostFights';
import WinnerLabel from './WinnerLabel';

export const RedFighterVersusBox = props => {
    const { fighter, corner, winner } = props;

    return (
        <div className="row">
            <div className="col-auto">
                <CornerBox color="red">
                    <div className="row h-100">
                        <div className="col-12 align-self-center p-5">
                            <Avatar name={fighter.firstname} color="#FFF" fgColor="#000" round={true} />
                        </div>
                    </div>
                </CornerBox>
            </div>

            <div className="col text-right align-self-center">
                {!fighter && <WinnerOfPreviousFight />}
                {fighter && (
                    <h3>
                        {winner && <WinnerLabel />} <UserName user={fighter} />
                    </h3>
                )}
                {fighter && <FighterGymCountry fighter={fighter} />}
                {fighter.id && <FighterAge fighter={fighter} />}
                {fighter.id && <FighterWonFights fighter={fighter} />}
                {fighter.id && <FighterLostFights fighter={fighter} />}
                {fighter.id && <FighterKhanLevel fighter={fighter} />}
            </div>
        </div>
    );
};

export default RedFighterVersusBox;
