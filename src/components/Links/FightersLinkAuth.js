import React from 'react';
import FightersLink from './FightersLink';
import { userIsAdmin } from '../../auth/auth';

const FightersLinkAuth = userIsAdmin(() => <FightersLink />);

export default FightersLinkAuth;
