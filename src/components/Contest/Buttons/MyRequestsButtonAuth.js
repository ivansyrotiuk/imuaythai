import React from 'react';
import { userCanAddContestRequest } from '../../../auth/auth';
import MyRequestsButton from './MyRequestsButton';

const MyRequestsButtonAuth = userCanAddContestRequest(props => <MyRequestsButton {...props} />);

export default MyRequestsButtonAuth;
