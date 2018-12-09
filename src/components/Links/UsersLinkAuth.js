import React from 'react';
import UsersLink from './UsersLink';
import { userCanSeeUsers } from '../../auth/auth';

const UsersLinkAuth = userCanSeeUsers(() => <UsersLink />);

export default UsersLinkAuth;
