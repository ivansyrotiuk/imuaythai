import React from 'react';
import Row from '../Layout/Row';
const ActionsBoxButton = props => {
    return (
        <Row>
            <button onClick={props.onClick} className="btn btn-link text-mute">
                {props.children}
            </button>
        </Row>
    );
};

export default ActionsBoxButton;
