import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import * as columns from './RequestColumns';

const RequestsTable = props => {
    const { requests, actions } = props;
    return (
        <ReactTable
            data={requests}
            columns={[
                columns.userNameColumn,
                columns.gymNameColumn,
                columns.countryNameColumn,
                columns.statusColumn,
                columns.acceptedByUserNameColumn,
                columns.actionsColumnCreator(actions)
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
        />
    );
};

RequestsTable.defaultProps = {
    requests: [],
    actions: {}
};

export default RequestsTable;
