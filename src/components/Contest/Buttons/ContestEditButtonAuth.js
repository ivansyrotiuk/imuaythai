import React from 'react';
import { userCanAcceptContestRequest } from '../../../auth/auth';
import EditButton from '../../../views/Components/Buttons/EditButton';

const EditContestButtonAuth = userCanAcceptContestRequest(props => <EditButton {...props} />);

export default EditContestButtonAuth;
