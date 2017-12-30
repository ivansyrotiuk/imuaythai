import React from 'react';
import Icon from '../Common/Icon';

const LoseFightsCountBox = props => {
    return (
        <div className="col">
            <div className="card">
                <div className="card-block p-3 clearfix">
                    <Icon name="fa-frown-o p-3 bg-danger font-2xl mr-3 float-left" />
                    <div className="h5 text-primary mb-0 mt-2">{props.count}</div>
                    <div className="text-muted text-uppercase font-weight-bold font-xs">Lose</div>
                </div>
            </div>
        </div>
    );
};
export default LoseFightsCountBox;
