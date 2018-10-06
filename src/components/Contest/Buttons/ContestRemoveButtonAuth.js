import React from 'react';
import { userIsAdmin } from '../../../auth/auth';
import RemoveButton from '../../../views/Components/Buttons/RemoveButton';

const RemoveContestButtonAuth = userIsAdmin(props => <RemoveButton {...props} />);

export default RemoveContestButtonAuth;
