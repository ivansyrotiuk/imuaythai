import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import * as columns from './ContestRangesColumns';

const ContestRangesTable = props => {
    const {ranges, actions } = props;
    return (
        <ReactTable
            data={ranges}
            columns={[
                columns.rangeIdColumn,
                columns.rangeNameColumn,
                columns.actionsColumnCreator(actions)
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
        />
    );
};

export default ContestRangesTable;