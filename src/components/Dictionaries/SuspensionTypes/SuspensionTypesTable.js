import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import * as columns from './SuspenisonTypesColumns';

const SuspensionTypesTable = props => {
    const {suspensionTypes, actions } = props;
    return (
        <ReactTable
            data={suspensionTypes}
            columns={[
                columns.suspensionIdColumn, 
                columns.suspensionNameColumn,
                columns.actionsColumnCreator(actions)
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
        />
    );
};

export default SuspensionTypesTable;