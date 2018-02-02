import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import * as columns from './FightStructuresColumns';

const FightStructuresTable = props => {
    const {structures, actions } = props;
    return (
        <ReactTable
            data={structures}
            columns={[
                columns.structureIdColumn,
                columns.weightAgeCategoryNameColumn,
                columns.roundNameColumn,
                columns.actionsColumnCreator(actions)
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
        />
    );
};

export default FightStructuresTable;