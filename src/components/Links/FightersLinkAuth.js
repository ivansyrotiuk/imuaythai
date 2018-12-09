import React from 'react';
import FightersLink from './FightersLink';
import { userCanSeeUsers } from '../../auth/auth';

const FightersLinkAuth = userCanSeeUsers(() => <FightersLink />);

export default FightersLinkAuth;
