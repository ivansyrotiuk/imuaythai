import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import * as columns from './WeightAgeCategoriesColumns';

const WeightAgeCategoriesTable = props => {
    const {categories, actions } = props;
    return (
        <ReactTable
            data={categories}
            columns={[
                columns.weightAgeCategoryIdColumn,
                columns.weightAgeCategoryNameColumn,
                columns.actionsColumnCreator(actions)
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
        />
    );
};

export default WeightAgeCategoriesTable;