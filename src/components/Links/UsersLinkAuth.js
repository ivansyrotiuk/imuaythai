import React from 'react';
import UsersLink from './UsersLink';
import { userIsAdmin } from '../../auth/auth';

const UsersLinkAuth = userIsAdmin(() => <UsersLink />);

export default UsersLinkAuth;
