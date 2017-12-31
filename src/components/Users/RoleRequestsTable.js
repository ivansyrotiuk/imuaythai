import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import * as requestStatuses from '../../common/reguestStatuses';
import PendingStatus from '../Statuses/PendingStatus';
import AcceptedStatus from '../Statuses/AcceptedStatus';
import RejectedStatus from '../Statuses/RejectedStatus';
import Icon from '../Common/Icon';

const RoleRequestsTable = props => {
    return (
        <ReactTable
            data={props.roleRequests}
            columns={[
                {
                    Header: 'User',
                    accessor: 'userName'
                },
                {
                    Header: 'Role',
                    accessor: 'roleName'
                },
                {
                    Header: 'Status',
                    id: 'status',
                    accessor: 'status',
                    maxWidth: 100,
                    Cell: row => (
                        <div>
                            {row.value === requestStatuses.Pending && <PendingStatus />}
                            {row.value === requestStatuses.Accepted && <AcceptedStatus />}
                            {row.value === requestStatuses.Rejected && <RejectedStatus />}
                        </div>
                    )
                },
                {
                    Header: 'Accept',
                    accessor: roleRequest => roleRequest,
                    id: 'accept',
                    width: 100,
                    Cell: row => (
                        <button className="btn btn-primary" onClick={() => props.handleAcceptClick(row.value)}>
                            {row.value.accepting ? (
                                <Icon name="fa-spinner fa-pulse fa-1x fa-fw" />
                            ) : (
                                <Icon name=" fa-thumbs-o-up" />
                            )}
                        </button>
                    )
                },
                {
                    Header: 'Reject',
                    accessor: roleRequest => roleRequest,
                    id: 'reject',
                    width: 100,
                    Cell: row => (
                        <button className="btn btn-danger" onClick={() => props.handleRejectClick(row.value)}>
                            {row.value.rejecting ? (
                                <Icon name="fa-spinner fa-pulse fa-1x fa-fw" />
                            ) : (
                                <Icon name=" fa-thumbs-o-down" />
                            )}
                        </button>
                    )
                }
            ]}
            defaultPageSize={5}
            className="-striped -highlight"
        />
    );
};

export default RoleRequestsTable;
