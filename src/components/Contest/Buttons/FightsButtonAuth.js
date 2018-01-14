import React from 'react';
import { userCanAcceptContestRequest } from '../../../auth/auth';
import FightsButton from './FightsButton';

const FightsButtonAuth = userCanAcceptContestRequest(props => <FightsButton {...props} />);

export default FightsButtonAuth;
