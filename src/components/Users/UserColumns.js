import React from 'react';
import Avatar from 'react-avatar';

export const avatarColumn = {
    id: 'avatar',
    accessor: request => request,
    maxWidth: 60,
    Cell: row => (
        <Avatar
            size={40}
            name={row.value.firstname + ' ' + row.value.surname || row.value.email}
            src={row.value.photo}
            round={true}
        />
    )
};

export const userNameColumn = {
    Header: 'Name',
    id: 'name',
    accessor: user => user,
    Cell: row => (
        <div>
            <div>{row.value.firstname + ' ' + row.value.surname}</div>
            <div className="small text-muted">{row.value.email}</div>
        </div>
    )
};

export const gymNameColumn = {
    Header: 'Gym',
    accessor: 'gymName'
};

export const countryNameColumn = {
    Header: 'Country',
    accessor: 'countryName'
};
