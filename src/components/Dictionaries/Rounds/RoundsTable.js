import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import * as columns from './RoundsColumns';

const RoundsTable = props => {
    const {rounds, actions } = props;
    return (
        <ReactTable
            data={rounds}
            columns={[
                columns.roundIdColumn,
                columns.roundNameColumn,
                columns.roundDurationColumn,
                columns.roundsCountColumn,
                columns.breakDurationColumn,
                columns.actionsColumnCreator(actions)
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
        />
    );
};

export default RoundsTable;