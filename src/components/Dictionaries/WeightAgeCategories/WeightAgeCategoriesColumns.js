import React from 'react';
import EditButton from '../../../views/Components/Buttons/EditButton';
import RemoveButton from '../../../views/Components/Buttons/RemoveButton';
import Row from '../../Layout/Row';

export const weightAgeCategoryIdColumn = {
    Header: 'Id',
    accessor: 'id',
    maxWidth: 100
};

export const weightAgeCategoryNameColumn = {
    Header: 'Categories',
    accessor: 'name'
};

export const actionsColumnCreator = actions => {
    return {
        Header: 'Actions',
        id: 'actions',
        accessor: category => category.id,
        maxWidth: 170,
        Cell: row => (
            <Row className="justify-content-around">
            <EditButton click = {() => actions.editClick(row.value)} />
            <RemoveButton click= {() => actions.deleteClick(row.value)} />
            </Row>
        )
    };
};