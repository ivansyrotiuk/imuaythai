import React from 'react';
import { userCanAcceptContestRequest } from '../../../auth/auth';
import JudgesManageButton from './JudgesManageButton';

const JudgesManageButtonAuth = userCanAcceptContestRequest(props => <JudgesManageButton {...props} />);

export default JudgesManageButtonAuth;
