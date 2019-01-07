import React from 'react';
import CoachesLink from './CoachesLink';
import { userCanSeeUsers } from '../../auth/auth';

const CoachesLinkAuth = userCanSeeUsers(() => <CoachesLink />);

export default CoachesLinkAuth;
