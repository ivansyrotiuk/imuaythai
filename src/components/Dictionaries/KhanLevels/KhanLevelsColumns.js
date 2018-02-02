import React from 'react';
import EditButton from '../../../views/Components/Buttons/EditButton';
import RemoveButton from '../../../views/Components/Buttons/RemoveButton';
import Row from '../../Layout/Row';

export const levelIdColumn = {
    Header: 'Id',
    accessor: 'id',
    maxWidth: 100
};

export const levelNameColumn = {
    Header: 'Name',
    accessor: 'name'
};

export const levelColumn = {
    Header: 'Level',
    accessor: 'level',
    maxWidth: 100,
};

export const actionsColumnCreator = actions => {
    return {
        Header: 'Actions',
        id: 'actions',
        accessor: level => level.id,
        maxWidth: 170,
        Cell: row => (
            <Row className="justify-content-around">
            <EditButton click = {() => actions.editClick(row.value)} />
            <RemoveButton click= {() => actions.deleteClick(row.value)} />
            </Row>
        )
    };
};