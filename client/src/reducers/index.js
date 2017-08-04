import { combineReducers } from "redux"
import Institutions from "./InstitutionsReducer"
import Users from "./UsersReducer"
import ContestTypes from "./ContestTypesReducer"
import Account from "./AccountReducer"
import ContestRanges from "./ContestRangesReducer"
import Countries from "./CountriesReducer"
import KhanLevels from "./KhanLevelsReducer"
import SuspensionTypes from "./SuspensionTypesReducer"
import ContestPoints from "./ContestPointsReducer"
import Roles from "./RolesReducer"
import UserRoles from "./UserRolesReducer"
import RoleRequests from "./RoleRequestsReducer"
import Contest from "./ContestReducer"
import ContestCategories from "./ContestCategoriesReducer"
import SingleUser from "./UserReducer"
import SingleInstitution from "./SingleInstitutionReducer"
import Fight from './FightReducer'
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
    Account,
    Institutions,
    ContestTypes,
    Users,
    Countries,
    ContestRanges,
    KhanLevels,
    SingleUser,
    SingleInstitution,
    Roles,
    UserRoles,
    RoleRequests,
    SuspensionTypes,
    ContestPoints,
    Contest,
    ContestCategories,
    Fight,
    form: reduxFormReducer,
})