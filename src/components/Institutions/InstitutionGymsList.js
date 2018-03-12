import React from 'react';
import InstitutionGymsTable from './Tables/InstitutionGymsTable';

const InstitutionGymsList = (props) => {
    return <InstitutionGymsTable gyms={props.gyms}/>;
};

export default InstitutionGymsList;
