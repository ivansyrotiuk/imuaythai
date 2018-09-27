import React from 'react';
import DoctorsLink from './DoctorsLink';
import { userIsAdmin } from '../../auth/auth';

const DoctorsLinkAuth = userIsAdmin(() => <DoctorsLink />);

export default DoctorsLinkAuth;
