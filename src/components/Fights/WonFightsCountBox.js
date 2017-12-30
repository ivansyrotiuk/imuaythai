import React from 'react';
import Icon from '../Common/Icon';

const WonFightsCountBox = props => {
    return (
        <div className="col">
            <div className="card">
                <div className="card-block p-3 clearfix">
                    <Icon name="fa-trophy p-3 bg-success font-2xl mr-3 float-left" />
                    <div className="h5 text-primary mb-0 mt-2">{props.count}</div>
                    <div className="text-muted text-uppercase font-weight-bold font-xs">Won</div>
                </div>
            </div>
        </div>
    );
};
export default WonFightsCountBox;
