import React from 'react';
import Col from '../Layout/Col';

const ActionBox = props => {
    return (
        <div className="card">
            <div className="card-header bg-mute">Actions</div>
            <div className="card-block p-0">
                <Col>{props.children}</Col>
            </div>
        </div>
    );
};

export default ActionBox;
