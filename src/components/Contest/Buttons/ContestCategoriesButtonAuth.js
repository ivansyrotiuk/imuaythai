import React from 'react';
import { userCanAcceptContestRequest } from '../../../auth/auth';
import ContestCategoriesButton from './ContestCategoriesButton';

const ContestCategoriesButtonAuth = userCanAcceptContestRequest(props => <ContestCategoriesButton {...props} />);

export default ContestCategoriesButtonAuth;
