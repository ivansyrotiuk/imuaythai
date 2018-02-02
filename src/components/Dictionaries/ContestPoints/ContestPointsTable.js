import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import * as columns from './ContestPointsColumns';

const ContestPointsTable = props => {
    const {points, actions } = props;
    return (
        <ReactTable
            data={points}
            columns={[
                columns.contestIdColumn,
                columns.contestNameColumn,
                columns.pointsColumn,
                columns.actionsColumnCreator(actions)
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
        />
    );
};

export default ContestPointsTable;