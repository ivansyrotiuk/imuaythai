import React from "react";

import ReactTable from "react-table";
import "react-table/react-table.css";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import RemoveButton from "../../views/Components/Buttons/RemoveButton";
import EditButton from "../../views/Components/Buttons/EditButton";
import PreviewButton from "../../views/Components/Buttons/PreviewButton";
import { userCanSeeUsers, userCanEditUsers, userCanDeleteUsers } from "../../auth/auth";

const UserTable = props => {
    return (
        <ReactTable
            data={props.users}
            columns={[
                {
                    Header: "",
                    id: "photo",
                    accessor: d => {
                        return {
                            name: d.firstname + " " + d.surname,
                            photo: d.photo
                        };
                    },
                    maxWidth: 60,
                    Cell: row => <Avatar size={40} name={row.value.name} src={row.value.photo} round={true} />
                },
                {
                    Header: "First Name",
                    accessor: "firstname"
                },
                {
                    Header: "Last Name",
                    id: "lastName",
                    accessor: d => d.surname
                },
                {
                    Header: "Country",
                    accessor: "countryName"
                },
                {
                    Header: "Actions",
                    accessor: "id",
                    Cell: row => {
                        const PreviewButtonAuth = userCanSeeUsers(() => (
                            <Link to={"/users/" + row.value}>
                                <PreviewButton id={row.value} />
                            </Link>
                        ));
                        const EditButtonAuth = userCanEditUsers(() => (
                            <Link to={"/users/" + row.value + "/edit"}>
                                <EditButton id={row.value} />
                            </Link>
                        ));
                        const DeleteButtonAuth = userCanDeleteUsers(() => (
                            <RemoveButton id={row.value} click={() => props.deleteUser(row.value)} />
                        ));
                        return (
                            <div className="row justify-content-around">
                                <PreviewButtonAuth />
                                <EditButtonAuth />
                                {props.deleteUser && <DeleteButtonAuth />}
                            </div>
                        );
                    }
                }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
        />
    );
};

export default UserTable;
