import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import * as requestStatuses from "../../common/reguestStatuses";
import PendingStatus from "../Statuses/PendingStatus";
import AcceptedStatus from "../Statuses/AcceptedStatus";
import RejectedStatus from "../Statuses/RejectedStatus";
import Right from "../Common/Right";
import Icon from "../Common/Icon";

const UserRolesTable = props => {
    const RequestAgain = (role, userRoles) => {
        return (
            userRoles.some(r => r.roleId == role.roleId && r.status !== requestStatuses.Rejected) && (
                <Right>
                    <button className="btn btn-xs" onClick={() => props.handleRequestRoleClick(role.value)}>
                        <Icon name="fa-repeat fa-lg text-success" />
                    </button>
                </Right>
            )
        );
    };

    return (
        <ReactTable
            data={props.userRoles}
            columns={[
                {
                    Header: "Role",
                    accessor: "roleName"
                },
                {
                    Header: "Acceptation date",
                    accessor: "acceptationDate"
                },
                {
                    Header: "Accepted by",
                    accessor: "acceptedByUserName"
                },
                {
                    Header: "Status",
                    id: "status",
                    accessor: role => role,
                    maxWidth: 100,
                    Cell: row => (
                        <div>
                            {row.value.status === requestStatuses.Pending && <PendingStatus />}
                            {row.value.status === requestStatuses.Accepted && <AcceptedStatus />}
                            {row.value.status === requestStatuses.Rejected && <RejectedStatus />}
                            {row.value.status === requestStatuses.Rejected && RequestAgain(row.value, props.userRoles)}
                        </div>
                    )
                }
            ]}
            defaultPageSize={5}
            className="-striped -highlight"
        />
    );
};

export default UserRolesTable;
