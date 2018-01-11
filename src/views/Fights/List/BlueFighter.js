import React from 'react';
import UserAvatar from '../../../components/Users/UserAvatar';

export const BlueFighter = props => {
    const { fighter, number, fight } = props;
    const fighterContent = !fighter ? (
        <h4 className="card-title">The winner of previous fight</h4>
    ) : (
        <div>
            <h4 className="card-title">
                {fighter.firstname + ' ' + fighter.surname}
                {fight.winnerId === fighter.id && <span className="text-danger h5"> - The winner</span>}
            </h4>

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
            <div className="col-auto align-self-center">
                <div className="row justify-content-end">{fighter && <UserAvatar size={75} user={fighter} />}</div>
            </div>
            <div className="col-md align-self-center">{fighterContent}</div>
            <div className="col-md-2">
                <div className="bg-primary" style={{ color: 'white', width: '100%', height: '100%' }}>
                    <h2 className="text-center">{number}</h2>
                    <p className="text-center">Blue corner</p>
                </div>
            </div>
        </div>
    );
};

export default BlueFighter;
