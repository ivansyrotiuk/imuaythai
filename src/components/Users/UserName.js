import React from 'react';

const UserName = props => {
    const { user } = props;
    return (
        <span>
            {user.firstname} {user.surname}
        </span>
    );
};

export default UserName;
