import React from 'react';
import EditButton from '../../../views/Components/Buttons/EditButton';
import RemoveButton from '../../../views/Components/Buttons/RemoveButton';
import Row from '../../Layout/Row';

export const contestIdColumn = {
    Header: 'Id',
    accessor: 'id',
    maxWidth: 100
};

export const contestNameColumn = {
    Header: 'Name',
    id: 'name',
    accessor: point => point.contestRange.name + ' ' + point.contestType.name
};

export const pointsColumn = {
    Header: 'Points',
    accessor: 'points',
    maxWidth: 100,
};

export const actionsColumnCreator = actions => {
    return {
        Header: 'Actions',
        id: 'actions',
        accessor: point => point.id,
        maxWidth: 170,
        Cell: row => (
            <Row className="justify-content-around">
            <EditButton click = {() => actions.editClick(row.value)} />
            <RemoveButton click= {() => actions.deleteClick(row.value)} />
            </Row>
        )
    };
};