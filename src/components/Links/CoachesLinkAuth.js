import React from 'react';
import CoachesLink from './CoachesLink';
import { userIsAdmin } from '../../auth/auth';

const CoachesLinkAuth = userIsAdmin(() => <CoachesLink />);

export default CoachesLinkAuth;
