import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../../containers/Header/HeaderContainer';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
//import Aside from '../../components/Aside/';
//import {requireAuthentication} from '../../utils/requireAuthentication'

import {
    userIsAuthenticatedRedir,
    userIsNotAuthenticatedRedir,
    userIsAdminRedir,
    userIsAuthenticated,
    userIsNotAuthenticated,
    userIsAdmin
} from '../../auth/auth';

import Footer from '../../components/Footer/';
import DashboardContainer from '../../containers/Dashboard/DashboardContainer';
import Charts from '../../views/Charts/';
import Widgets from '../../views/Widgets/';
import Buttons from '../../views/Components/Buttons/';
import Cards from '../../views/Components/Cards/';
import Forms from '../../views/Components/Forms/';
import Modals from '../../views/Components/Modals/';
import SocialButtons from '../../views/Components/SocialButtons/';
import Switches from '../../views/Components/Switches/';
import Tables from '../../views/Components/Tables/';
import Tabs from '../../views/Components/Tabs/';
import FontAwesome from '../../views/Icons/FontAwesome/';
import SimpleLineIcons from '../../views/Icons/SimpleLineIcons/';

import ContestTypesDetailsPage from '../../views/Dictionaries/ContestTypes/ContestTypesDetailsPage';
import ContestRangesDetailsPage from '../../views/Dictionaries/ContestRanges/ContestRangesDetailsPage';
import KhanLevelsDetailsPage from '../../views/Dictionaries/KhanLevels/KhanLevelsDetailsPage';
import SuspensionsDetailsPage from '../../views/Dictionaries/SuspensionTypes/SuspensionTypesDetailsPage';
import ContestPointsDetailsPage from '../../views/Dictionaries/ContestPoints/ContestPointsDetailsPage';
import RoundsDetailsPage from '../../views/Dictionaries/Rounds/RoundsDetailsPage';
import StructuresDetailsPage from '../../views/Dictionaries/FightStructures/StructuresDetailsPage';
import ContestCategoriesDetailsPage from '../../views/Dictionaries/ContestCategories/ContestCategoriesDetailsPage';
import ContestCategoriesPageContainer from '../Dictionaries/ContestCategoriesPageContainer';
import FightStructuresPageContainer from '../Dictionaries/FightStructuresPageContainer';
import RoundsPageContainer from '../Dictionaries/RoundsPageContainer';
import WeightAgeCategoriesPageContainer from '../Dictionaries/WeightAgeCategoriesPageContainer';
import ContestPointsPageContainer from '../Dictionaries/ContestPointsPageContainer';
import SuspensionTypesPageContainer from '../Dictionaries/SuspensionTypesPageContainer';
import KhanLevelsPageContainer from '../Dictionaries/KhanLevelsPageContainer';
import ContestRangesPageContainer from '../Dictionaries/ContestRangesPageContainer';
import ContestTypesPageContainer from '../Dictionaries/ContestTypesPageContainer';

import GymsPageContainer from '../../containers/Institutions/Gyms/GymsPageContainer';
import NationalFederationsPageContainer from '../../containers/Institutions/NationalFederations/NationalFederationsPageContainer';
import NationalFederationViewPageContainer from '../../containers/Institutions/NationalFederations/NationalFederationViewPageContainer';
import ContinentalFederationsPageContainer from '../../containers/Institutions/ContinentalFederations/ContinentalFederationsPageContainer';
import ContinentalFederationViewPageContainer from '../../containers/Institutions/ContinentalFederations/ContinentalFederationViewPageContainer';
import GymViewPageContainer from '../../containers/Institutions/Gyms/GymViewPageContainer';

import WorldFederationsPageContainer from '../../containers/Institutions/WorldFederations/WorldFederationsPageContainer';
import WorldFederationViewPageContainer from '../../containers/Institutions/WorldFederations/WorldFederationViewPageContainer';
import InstitutionEditPageContainer from '../../containers/Institutions/InstitutionEditPageContainer';

import FightersPageContainer from '../../containers/Users/Fighters/FightersPageContainer';
import JudgesPageContainer from '../../containers/Users/Judges/JudgesPageContainer';
import CoachesPageContainer from '../../containers/Users/Coaches/CoachesPageContainer';
import DoctorsPageContainer from '../../containers/Users/Doctors/DoctorsPageContainer';

import UserEditWrapperContainer from '../../containers/Users/UserEditWrapperContainer';
import UserViewPageContainer from '../../containers/Users/UserViewPageContainer';

import UserRolesPageContainer from '../../containers/Users/UserRolesPageContainer';
import RoleRequestsViewContainer from '../../containers/Users/RoleRequestsViewContainer';
import ContestsContainer from '../Contest/ContestsContainer';
import ContestEditContainer from '../Contest/ContestEditContainer';
import ContestViewContainer from '../Contest/ContestViewContainer';
import ContestCategoriesViewContainer from '../Contest/ContestCategoriesViewContainer';
import RequestsManagerContainer from '../Contest/RequestsManagerContainer';
import RequestAddingContainer from '../Contest/RequestAddingContainer';
import ContestJudgeManageContainer from '../Contest/ContestJudgeManageContainer';
import FightsDrawsContainer from '../Fight/FightsDrawsContainer';
import MovableFighterFightsContainer from '../Fight/MovableFighterFightsContainer';
import MovableFightsContainer from '../Fight/MovableFightsContainer';
import NotificationsBox from '../Notifications/NotificationsBox';
import FightContainer from '../Fight/FightContainer';
import UserDocuments from '../Users/UserDocumentContainer';
import CreateUserContainer from '../Users/CreateUserContainer';
import WeightAgeCategoryPageContainer from '../Dictionaries/WeightAgeCategoryPageContainer';
import UsersViewContainer from '../Users/UsersViewContainer';

class Full extends Component {
    render() {
        return (
            <div className="app">
                <Header {...this.props} />
                <div className="app-body">
                    <Sidebar {...this.props} />
                    <main className="main">
                        <Breadcrumb />
                        <NotificationsBox />
                        <div className="container-fluid">
                            <Switch>
                                <Route path="/dashboard" name="Dashboard" component={DashboardContainer} />
                                <Route path="/components/buttons" name="Buttons" component={Buttons} />
                                <Route path="/components/cards" name="Cards" component={Cards} />
                                <Route path="/components/forms" name="Forms" component={Forms} />
                                <Route path="/components/modals" name="Modals" component={Modals} />
                                <Route
                                    path="/components/social-buttons"
                                    name="Social Buttons"
                                    component={SocialButtons}
                                />
                                <Route path="/components/switches" name="Swithces" component={Switches} />
                                <Route path="/components/tables" name="Tables" component={Tables} />
                                <Route path="/components/tabs" name="Tabs" component={Tabs} />
                                <Route path="/icons/font-awesome" name="Font Awesome" component={FontAwesome} />
                                <Route
                                    path="/icons/simple-line-icons"
                                    name="Simple Line Icons"
                                    component={SimpleLineIcons}
                                />
                                <Route path="/widgets" name="Widgets" component={Widgets} />
                                <Route path="/charts" name="Charts" component={Charts} />
                                <Route
                                    path="/institutions/:type/add"
                                    name="Add institution"
                                    component={InstitutionEditPageContainer}
                                />
                                <Route
                                    path="/institutions/continental/edit/:id"
                                    name="Edit institution"
                                    component={InstitutionEditPageContainer}
                                />
                                <Route
                                    path="/institutions/continental/:id"
                                    component={ContinentalFederationViewPageContainer}
                                />
                                <Route
                                    path="/institutions/continental"
                                    component={ContinentalFederationsPageContainer}
                                />
                                <Route
                                    path="/institutions/national/edit/:id"
                                    name="Edit institution"
                                    component={InstitutionEditPageContainer}
                                />
                                <Route
                                    path="/institutions/national/:id"
                                    component={NationalFederationViewPageContainer}
                                />
                                <Route path="/institutions/national" component={NationalFederationsPageContainer} />
                                <Route
                                    path="/institutions/world/edit/:id"
                                    name="Edit institution"
                                    component={InstitutionEditPageContainer}
                                />
                                <Route path="/institutions/world/:id" component={WorldFederationViewPageContainer} />
                                <Route path="/institutions/world" component={WorldFederationsPageContainer} />
                                <Route
                                    path="/institutions/gyms/edit/:id"
                                    name="Edit institution"
                                    component={InstitutionEditPageContainer}
                                />
                                <Route path="/institutions/gyms/:id" component={GymViewPageContainer} />
                                <Route path="/institutions/gyms" component={GymsPageContainer} />

                                <Route path="/institutions/:id/users/create" component={CreateUserContainer} />
                                <Route path="/users/(create)" component={CreateUserContainer} />

                                <Route
                                    path="/users/(rolerequests)"
                                    name="RoleRequests"
                                    component={RoleRequestsViewContainer}
                                />
                                <Route path="/users/:id/(edit)" name="UserEdit" component={UserEditWrapperContainer} />
                                <Route path="/users/:id/(roles)" name="UserRoles" component={UserRolesPageContainer} />
                                <Route path="/users/:id" name="User" component={UserViewPageContainer} />
                                <Route path="/users/" name="Users" component={UsersViewContainer} />
                                <Route path="/fighters/" name="Fighters" component={FightersPageContainer} />
                                <Route path="/judges/" name="Judges" component={JudgesPageContainer} />
                                <Route path="/coaches/" name="Coaches" component={CoachesPageContainer} />
                                <Route path="/doctors/" name="Doctors" component={DoctorsPageContainer} />
                                <Route
                                    path="/dictionaries/types/(name)"
                                    name="ContestTypes"
                                    component={ContestTypesDetailsPage}
                                />
                                <Route
                                    path="/dictionaries/types/:id"
                                    name="ContestTypes"
                                    component={ContestTypesDetailsPage}
                                />
                                <Route
                                    path="/dictionaries/types"
                                    name="ContestTypes"
                                    component={ContestTypesPageContainer}
                                />
                                <Route
                                    path="/dictionaries/ranges/:id"
                                    name="ContestRange"
                                    component={ContestRangesDetailsPage}
                                />
                                <Route
                                    path="/dictionaries/ranges/"
                                    name="ContestRanges"
                                    component={ContestRangesPageContainer}
                                />
                                <Route
                                    path="/dictionaries/levels/:id"
                                    name="KhanLevel"
                                    component={KhanLevelsDetailsPage}
                                />;
                                <Route
                                    path="/dictionaries/levels/"
                                    name="KhanLevels"
                                    component={KhanLevelsPageContainer}
                                />
                                <Route
                                    path="/dictionaries/levels"
                                    name="KhanLevels"
                                    component={KhanLevelsPageContainer}
                                />
                                <Route
                                    path="/dictionaries/suspensions/:id"
                                    name="SuspensionType"
                                    component={SuspensionsDetailsPage}
                                />
                                <Route
                                    path="/dictionaries/suspensions/"
                                    name="SuspensionTypes"
                                    component={SuspensionTypesPageContainer}
                                />
                                <Route
                                    path="/dictionaries/suspensions"
                                    name="SuspensionTypes"
                                    component={SuspensionTypesPageContainer}
                                />
                                <Route
                                    path="/dictionaries/weightcategories/:id"
                                    name="WeightCategory"
                                    component={WeightAgeCategoryPageContainer}
                                />
                                <Route
                                    path="/dictionaries/weightcategories/"
                                    name="WeightCategories"
                                    component={WeightAgeCategoriesPageContainer}
                                />
                                <Route
                                    path="/dictionaries/points/:id"
                                    name="ContestPoint"
                                    component={ContestPointsDetailsPage}
                                />
                                <Route
                                    path="/dictionaries/points/"
                                    name="ContestPoints"
                                    component={ContestPointsPageContainer}
                                />
                                <Route
                                    path="/dictionaries/points"
                                    name="ContestPoints"
                                    component={ContestPointsPageContainer}
                                />
                                <Route path="/dictionaries/rounds/:id" name="Rounds" component={RoundsDetailsPage} />
                                <Route path="/dictionaries/rounds/" name="Rounds" component={RoundsPageContainer} />
                                <Route path="/dictionaries/rounds" name="Rounds" component={RoundsPageContainer} />
                                <Route
                                    path="/dictionaries/structures/:id"
                                    name="Structures"
                                    component={StructuresDetailsPage}
                                />
                                <Route
                                    path="/dictionaries/structures/"
                                    name="Structures"
                                    component={FightStructuresPageContainer}
                                />
                                <Route
                                    path="/dictionaries/structures"
                                    name="Structures"
                                    component={FightStructuresPageContainer}
                                />
                                <Route
                                    path="/dictionaries/categories/:id"
                                    name="ContestCategories"
                                    component={ContestCategoriesDetailsPage}
                                />
                                <Route
                                    path="/dictionaries/categories/"
                                    name="ContestCategories"
                                    component={ContestCategoriesPageContainer}
                                />
                                <Route
                                    path="/contests/:id/(myrequests)"
                                    name="Add contest requests"
                                    component={RequestAddingContainer}
                                />
                                <Route
                                    path="/contests/:id/(requests)"
                                    name="Contest pending requests"
                                    component={RequestsManagerContainer}
                                />
                                <Route
                                    path="/contests/:id/(fights)"
                                    name="Contest fights"
                                    component={MovableFightsContainer}
                                />
                                <Route
                                    path="/contests/:id/(categories)"
                                    name="Contest categries"
                                    component={ContestCategoriesViewContainer}
                                />
                                <Route
                                    path="/contests/:id/(judges)"
                                    name="Contest judge management"
                                    component={ContestJudgeManageContainer}
                                />
                                <Route
                                    path="/contests/:contestId/category/:categoryId/draws"
                                    name="Fights draws"
                                    component={FightsDrawsContainer}
                                />
                                <Route
                                    path="/contests/:contestId/category/:categoryId/fights"
                                    name="Fights list"
                                    component={MovableFighterFightsContainer}
                                />
                                <Route path="/contests/add" name="Create contest" component={ContestEditContainer} />
                                <Route
                                    path="/contests/:id/(edit)"
                                    name="Edit contest"
                                    component={ContestEditContainer}
                                />
                                <Route path="/contests/:id" name="Contest view" component={ContestViewContainer} />
                                <Route path="/contests/" name="Contests" component={ContestsContainer} />
                                <Route path="/fights/:id" name="Fights overview" component={FightContainer} />
                                <Route path="/documents/:type/:id" name="Documents" component={UserDocuments} />
                                <Redirect from="/" to="/dashboard" />
                            </Switch>
                        </div>
                    </main>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Full;
