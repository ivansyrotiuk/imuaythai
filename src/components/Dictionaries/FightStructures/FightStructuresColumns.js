import React from 'react';
import EditButton from '../../../views/Components/Buttons/EditButton';
import RemoveButton from '../../../views/Components/Buttons/RemoveButton';
import Row from '../../Layout/Row';

export const structureIdColumn = {
    Header: 'Id',
    accessor: 'id',
    maxWidth: 100
};

export const weightAgeCategoryNameColumn = {
    Header: 'Weight category',
    id: 'weightAgeCategoryName',
    accessor: structure => structure.weightAgeCategory.name
};

export const roundNameColumn = {
    Header: 'Round type',
    id: 'roundName',
    maxWidth: 270,
    accessor: structure => structure.round.name
};

export const actionsColumnCreator = actions => {
    return {
        Header: 'Actions',
        id: 'actions',
        accessor: structure => structure.id,
        maxWidth: 170,
        Cell: row => (
            <Row className="justify-content-around">
            <EditButton click = {() => actions.editClick(row.value)} />
            <RemoveButton click= {() => actions.deleteClick(row.value)} />
            </Row>
        )
    };
};