import React from "react";
import moment from "moment";
import ReactTable from "react-table";

const columns = [
    {
        Header: "Id",
        accessor: "id"
    },
    {
        Header: "From",
        id: "from",
        accessor: "from",
        Cell: row => <span>{moment(row.value).format("DD-MM-YYYY")}</span>
    },
    {
        Header: "To",
        id: "to",
        accessor: "to",
        Cell: row => <span>{moment(row.value).format("DD-MM-YYYY")}</span>
    },
    {
        Header: "Price",
        accessor: "price"
    },
    {
        Header: "Currency",
        accessor: "currency"
    }
];

const UserLicenses = props => {
    return <div className="row">
             {!!props.fighterLicenses.length && <div className="col-12">
                <h5>Fighter licenses</h5>
                <ReactTable
                    data={props.fighterLicenses}
                    columns={columns}
                    defaultPageSize={3}
                    className="-striped -highlight"
                />
            </div>}
            {!!props.judgeLicenses.length && <div className="col-12">
                <h5>Judge licenses</h5>
                <ReactTable
                    data={props.judgeLicenses}
                    columns={columns}
                    defaultPageSize={3}
                    className="-striped -highlight"
                />
            </div>}
            {!!props.coachLicenses.length && <div className="col-12">
                <h5>Coach licenses</h5>
                <ReactTable
                    data={props.coachLicenses}
                    columns={columns}
                    defaultPageSize={3}
                    className="-striped -highlight"
                />
            </div>}
        </div>
    
};

export default UserLicenses;
