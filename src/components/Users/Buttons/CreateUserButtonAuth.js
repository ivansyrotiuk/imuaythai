import React from 'react';
import { UserCanCreateUsers } from '../../../auth/auth';
import CreateUserButton from './CreateUserButton';

const CreateUserButtonAuth = UserCanCreateUsers(() => <CreateUserButton />);

export default CreateUserButtonAuth;
