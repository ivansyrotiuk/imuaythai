import React from 'react';

const PageHeader = (props) => {
    return (
        <div className="card-header">
            { props.children }
        </div>
    );
};

export default PageHeader;


