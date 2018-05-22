import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { userIsAdmin, userCanManageRoles, userCanSeeContests } from '../../auth/auth';

import FightersLinkAuth from '../Links/FightersLinkAuth';
import UsersLinkAuth from '../Links/UsersLinkAuth';

class Sidebar extends Component {
    handleClick(e) {
        e.preventDefault();
        e.target.parentElement.classList.toggle('open');
    }

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1
            ? 'nav-item nav-dropdown open'
            : 'nav-item nav-dropdown';
    }

    // secondLevelActive(routeName) {
    //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    // }

    render() {
        const JudgesLink =
            <NavLink to="/judges" className="nav-link" activeClassName="active">
                <i className="fa fa-gavel" /> Judges
            </NavLink>;
        const CoachesLink =
            <NavLink to="/coaches" className="nav-link" activeClassName="active">
                <i className="fa fa-male" /> Coaches
            </NavLink>;
        const DoctorsLink =
            <NavLink to="/doctors" className="nav-link" activeClassName="active">
                <i className="fa fa-user-md" /> Doctors
            </NavLink>;

        const GymsLink =
            <NavLink to="/institutions/gyms" className="nav-link" activeClassName="active">
                <i className="fa fa-flag" /> Gyms
            </NavLink>;
        const NationalFederationsLink =
            <NavLink to="/institutions/national" className="nav-link" activeClassName="active">
                <i className="fa fa-building" /> National federations
            </NavLink>;
        const ContinetalFederationsLink =
            <NavLink to="/institutions/continental" className="nav-link" activeClassName="active">
                <i className="fa fa-building" /> Continental federations
            </NavLink>;
        const WorldFederationsLink =
            <NavLink to="/institutions/world" className="nav-link" activeClassName="active">
                <i className="fa fa-globe " /> World federations
            </NavLink>;
        const ContestsDropdown = userCanSeeContests(() => (
            <li className={this.activeRoute('/contests')}>
                <a className="nav-link nav-dropdown-toggle open" href="#" onClick={this.handleClick.bind(this)}>
                    <i className="fa fa-trophy" /> Contests
                </a>
                <ul className="nav-dropdown-items">
                    <li className="nav-item">
                        <NavLink to="/contests" className="nav-link" activeClassName="active">
                            <i className="fa fa-trophy" />Contests list
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/fight" className="nav-link" activeClassName="active">
                            <i className="fa fa-bar-chart" />Fight draw demo
                        </NavLink>
                    </li>
                </ul>
            </li>
        ));

        const UserRoleRequestLink = userCanManageRoles(() => (
            <NavLink to="/users/rolerequests" className="nav-link" activeClassName="active">
                <i className="fa fa-user-plus" /> Role requests
            </NavLink>
        ));

        const Dictinaries = userIsAdmin(() => <li className={this.activeRoute('/dictionaries')}>
            <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}>
                <i className="icon-puzzle" /> Dictionaries
            </a>
            <ul className="nav-dropdown-items">
                <li className="nav-item">
                    <NavLink to="/dictionaries/types" className="nav-link" activeClassName="active">
                        <i className="icon-puzzle" /> Contest types
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/dictionaries/ranges" className="nav-link" activeClassName="active">
                        <i className="icon-puzzle" /> Contest ranges
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/dictionaries/levels" className="nav-link" activeClassName="active">
                        <i className="icon-puzzle" /> Khan levels
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/dictionaries/suspensions"
                        className="nav-link"
                        activeClassName="active"
                    >
                        <i className="icon-puzzle" /> Suspension types
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/dictionaries/points" className="nav-link" activeClassName="active">
                        <i className="icon-puzzle" /> Contest points
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/dictionaries/weightcategories"
                        className="nav-link"
                        activeClassName="active"
                    >
                        <i className="icon-puzzle" /> Weight categories
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/dictionaries/rounds" className="nav-link" activeClassName="active">
                        <i className="icon-puzzle" /> Rounds
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/dictionaries/structures"
                        className="nav-link"
                        activeClassName="active"
                    >
                        <i className="icon-puzzle" /> Fight structures
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/dictionaries/categories"
                        className="nav-link"
                        activeClassName="active"
                    >
                        <i className="icon-puzzle" /> Contest categories
                    </NavLink>
                </li>
            </ul>
        </li>);

        return (
            <div className="sidebar">
                <nav className="sidebar-nav">
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink to={'/dashboard'} className="nav-link" activeClassName="active">
                                <i className="icon-speedometer" /> Dashboard{' '}
                            </NavLink>
                        </li>
                        <li className={this.activeRoute('/institutions')}>
                            <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}>
                                <i className="fa fa-university" /> Institutions
                            </a>
                            <ul className="nav-dropdown-items">
                                <li className="nav-item">
                                    {GymsLink}
                                </li>
                                <li className="nav-item">
                                    {NationalFederationsLink}
                                </li>
                                <li className="nav-item">
                                    {ContinetalFederationsLink}
                                </li>
                                <li className="nav-item">
                                    {WorldFederationsLink}
                                </li>
                            </ul>
                        </li>
                        <li className={this.activeRoute('/users')}>
                            <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}>
                                <i className="fa fa-users" /> Users
                            </a>
                            <ul className="nav-dropdown-items">
                                <li className="nav-item">
                                    {UsersLinkAuth}
                                </li>
                                <li className="nav-item">
                                    {FightersLinkAuth}
                                </li>
                                <li className="nav-item">
                                    {JudgesLink}
                                </li>
                                <li className="nav-item">
                                    {CoachesLink}
                                </li>
                                <li className="nav-item">
                                    {DoctorsLink}
                                </li>
                                <li className="nav-item">
                                    {UserRoleRequestLink}
                                </li>
                            </ul>
                        </li>
                        <ContestsDropdown />
                        <Dictinaries />
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Sidebar;
