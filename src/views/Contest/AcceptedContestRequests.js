import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import classnames from 'classnames';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import * as requestColumns from '../../components/Contest/Requests/RequestColumns';

class AcceptedContestRequests extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        const { doctorsRequests, judgesRequests, fightersRequests } = this.props;

        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({
                                active: this.state.activeTab === '1'
                            })}
                            onClick={() => {
                                this.toggle('1');
                            }}
                        >
                            <i className="fa fa-user" /> Fighters  <span className="badge badge-pill badge-primary">
                                {' '}
                                {fightersRequests.length}
                            </span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({
                                active: this.state.activeTab === '2'
                            })}
                            onClick={() => {
                                this.toggle('2');
                            }}
                        >
                            <i className="fa fa-gavel" /> Judges <span className="badge badge-pill badge-success">
                                {' '}
                                {judgesRequests.length}
                            </span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({
                                active: this.state.activeTab === '3'
                            })}
                            onClick={() => {
                                this.toggle('3');
                            }}
                        >
                            <i className="fa fa-user-md" /> Doctors{' '}
                            <span className="badge badge-pill badge-danger"> {doctorsRequests.length}</span>
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <ReactTable
                            data={fightersRequests}
                            columns={[
                                requestColumns.userNameColumn,
                                requestColumns.gymNameColumn,
                                requestColumns.countryNameColumn,
                                requestColumns.contestCategoryNameColumn,
                                requestColumns.acceptedByUserNameColumn
                            ]}
                            defaultPageSize={10}
                            className="-striped -highlight"
                        />
                    </TabPane>
                    <TabPane tabId="2">
                        <ReactTable
                            data={judgesRequests}
                            columns={[
                                requestColumns.userNameColumn,
                                requestColumns.gymNameColumn,
                                requestColumns.countryNameColumn,
                                requestColumns.acceptedByUserNameColumn
                            ]}
                            defaultPageSize={10}
                            className="-striped -highlight"
                        />
                    </TabPane>
                    <TabPane tabId="3">
                        <ReactTable
                            data={doctorsRequests}
                            columns={[
                                requestColumns.userNameColumn,
                                requestColumns.gymNameColumn,
                                requestColumns.countryNameColumn,
                                requestColumns.acceptedByUserNameColumn
                            ]}
                            defaultPageSize={10}
                            className="-striped -highlight"
                        />
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default AcceptedContestRequests;
