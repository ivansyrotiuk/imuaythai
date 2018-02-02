import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import * as columns from './ContestCategoriesColumns';

const ContestCategoriesTable = props => {
    const {categories, actions } = props;
    return (
        <ReactTable
            data={categories}
            columns={[
                columns.categoryIdColumn,
                columns.categoryNameColumn,
                columns.actionsColumnCreator(actions)
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
        />
    );
};

export default ContestCategoriesTable;