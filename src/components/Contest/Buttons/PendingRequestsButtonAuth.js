import React from 'react';
import { userCanAcceptContestRequest } from '../../../auth/auth';
import PendingRequestsButton from './PendingRequestsButton';

const PendingRequestsButtonAuth = userCanAcceptContestRequest(props => <PendingRequestsButton {...props} />);

export default PendingRequestsButtonAuth;
