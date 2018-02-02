import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import * as columns from './KhanLevelsColumns';

const KhanLevelsTable = props => {
    const {levels, actions } = props;
    return (
        <ReactTable
            data={levels}
            columns={[
                columns.levelIdColumn,
                columns.levelNameColumn,
                columns.levelColumn,
                columns.actionsColumnCreator(actions)
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
        />
    );
};

export default KhanLevelsTable;