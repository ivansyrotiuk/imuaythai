import React from 'react';
import DoctorsLink from './DoctorsLink';
import { userCanSeeUsers } from '../../auth/auth';

const DoctorsLinkAuth = userCanSeeUsers(() => <DoctorsLink />);

export default DoctorsLinkAuth;
