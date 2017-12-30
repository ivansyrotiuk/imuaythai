import React from 'react';
import classnames from 'classnames';

const Icon = props => {
    const iconClasses = classnames('fa', props.name);

    return <i className={iconClasses} aria-hidden="true" />;
};

Icon.defaultProps = {
    name: ''
};

export default Icon;
