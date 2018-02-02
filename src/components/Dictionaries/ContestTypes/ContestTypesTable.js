import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import * as columns from './ContestTypesColumns';

const ContestTypesTable = props => {
    const {types, actions } = props;
    return (
        <ReactTable
            data={types}
            columns={[
                columns.typeIdColumn,
                columns.typeNameColumn,
                columns.actionsColumnCreator(actions)
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
        />
    );
};

export default ContestTypesTable;