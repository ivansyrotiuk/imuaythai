import React from 'react';
import JudgesLink from './JudgesLink';
import { userIsAdmin } from '../../auth/auth';

const JudgesLinkAuth = userIsAdmin(() => <JudgesLink />);

export default JudgesLinkAuth;
