import React from 'react';
import EditButton from '../../../views/Components/Buttons/EditButton';
import RemoveButton from '../../../views/Components/Buttons/RemoveButton';
import Row from '../../Layout/Row';

export const roundIdColumn = {
    Header: 'Id',
    accessor: 'id',
    maxWidth: 100
};

export const roundNameColumn = {
    Header: 'Name',
    accessor: 'name'
};

export const roundDurationColumn = {
    Header: 'Round duration',
    accessor: 'duration',
    maxWidth: 170
};

export const roundsCountColumn = {
    Header: 'Rounds count',
    accessor: 'roundsCount',
    maxWidth: 170
};

export const breakDurationColumn = {
    Header: 'Break duration',
    accessor: 'breakDuration',
    maxWidth: 170
};

export const actionsColumnCreator = actions => {
    return {
        Header: 'Actions',
        id: 'actions',
        accessor: round => round.id,
        maxWidth: 170,
        Cell: row => (
            <Row className="justify-content-around">
                <EditButton click={() => actions.editClick(row.value)} />
                <RemoveButton click={() => actions.deleteClick(row.value)} />
            </Row>
        )
    };
};
