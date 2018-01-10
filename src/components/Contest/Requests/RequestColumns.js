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
    accessor: gym => gym.countryName
};

export const contestCategoryNameColumn = {
    Header: 'Category',
    accessor: 'contestCategoryName'
};

export const acceptedByUserNameColumn = {
    Header: 'Accepted by',
    accessor: 'acceptedByUserName'
};
