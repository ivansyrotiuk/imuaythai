import React from 'react';
import * as statuses from '../../../common/contestRequestStatuses';
import EditButton from '../../../views/Components/Buttons/EditButton';
import AcceptButton from '../../../views/Components/Buttons/AcceptButton';
import RejectButton from '../../../views/Components/Buttons/RejectButton';
import RemoveButton from '../../../views/Components/Buttons/RemoveButton';

export const userNameColumn = {
    Header: 'Name',
    accessor: 'userName'
};

export const gymNameColumn = {
    Header: 'Gym',
    accessor: 'institutionName'
};

export const countryNameColumn = {
    Header: 'Country',
    id: 'country',
    accessor: request => request.user.countryName
};

export const contestCategoryNameColumn = {
    Header: 'Category',
    accessor: 'contestCategoryName'
};

export const acceptedByUserNameColumn = {
    Header: 'Accepted by',
    accessor: 'acceptedByUserName'
};

export const statusColumn = {
    Header: 'Status',
    id: 'status',
    accessor: 'status',
    Cell: row => (
        <div>
            {row.value === statuses.CONTEST_REQUEST_PENDING && <span className="badge badge-warning">Pending</span>}
            {row.value === statuses.CONTEST_REQUEST_ACCEPTED && <span className="badge badge-success">Accepted</span>}
            {row.value === statuses.CONTEST_REQUEST_REJECTED && <span className="badge badge-danger">Rejected</span>}
        </div>
    )
};

export const actionsColumnCreator = actions => {
    return {
        Header: 'Actions',
        id: 'actions',
        accessor: request => request,
        Cell: row => {
            const request = row.value;
            return (
                <div className="row justify-content-around">
                    {actions.edit && <EditButton accepting={request.accepting} click={() => actions.edit(request)} />}
                    {actions.accept && (
                        <AcceptButton accepting={request.accepting} click={() => actions.accept(request)} />
                    )}
                    {actions.reject && (
                        <RejectButton rejecting={request.rejecting} click={() => actions.reject(request)} />
                    )}
                    {actions.remove && (
                        <RemoveButton removing={request.removing} click={() => actions.remove(request)} />
                    )}
                </div>
            );
        }
    };
};
