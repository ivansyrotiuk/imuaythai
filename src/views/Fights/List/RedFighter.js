import React from 'react';
import UserAvatar from '../../../components/Users/UserAvatar';

export const RedFighter = props => {
    const { fighter, number, fight } = props;
    const fighterContent = !fighter ? (
        <h4 className="card-title">The winner of previous fight</h4>
    ) : (
        <div>
            <div className="card-title">
                <h4 className="card-title">
                    {fight.winnerId === fighter.id && <span className="text-danger h5">The winner - </span>}
                    {fighter.firstname + ' ' + fighter.surname}
                </h4>
            </div>
            <h6 className="card-subtitle mb-2 text-muted">
                {fighter.gymName || 'No gym'}, {fighter.countryName}
            </h6>
            <p className="card-text">
                <i className="fa fa-envelope" aria-hidden="true" />
                {' ' + fighter.email}
            </p>
        </div>
    );
    return (
        <div className="row ">
            <div className="col-md-2">
                <div className="bg-danger" style={{ color: 'white', width: '100%', height: '100%' }}>
                    <h2 className="text-center">{number}</h2>
                    <p className="text-center">Red corner</p>
                </div>
            </div>
            <div className="col-md text-right align-self-center">{fighterContent}</div>
            <div className="col-auto align-self-center">
                <div className="row justify-content-start">{fighter && <UserAvatar size={75} user={fighter} />}</div>
            </div>
        </div>
    );
};

export default RedFighter;
