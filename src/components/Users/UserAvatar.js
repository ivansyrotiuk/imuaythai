import React from 'react';
import Avatar from 'react-avatar';

const UserAvatar = props => {
    const { user, size } = props;
    return <Avatar size={size} name={user.firstname + ' ' + user.surname} src={user.photo} round={true} />;
};

export default UserAvatar;
