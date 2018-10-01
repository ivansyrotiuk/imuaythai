import React from 'react';
import { userCanAcceptContestRequest } from '../../../auth/auth';
import RemoveButton from '../../../views/Components/Buttons/RemoveButton';

const RemoveContestButtonAuth = userCanAcceptContestRequest(props => <RemoveButton {...props} />);

export default RemoveContestButtonAuth;
