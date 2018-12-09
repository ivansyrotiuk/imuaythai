import React from 'react';
import JudgesLink from './JudgesLink';
import { userCanSeeUsers } from '../../auth/auth';

const JudgesLinkAuth = userCanSeeUsers(() => <JudgesLink />);

export default JudgesLinkAuth;
