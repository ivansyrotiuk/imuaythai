import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import PreviewButton from '../../../views/Components/Buttons/PreviewButton';
import EditButton from '../../../views/Components/Buttons/EditButton';
import RemoveButton from '../../../views/Components/Buttons/RemoveButton';
import { userCanSeeInstitutions, userCanEditInstitutions, userCanDeleteInstitutions } from '../../../auth/auth';

const InstitutionsTable = props => {
    const { previewClick, editClick, deleteClick } = props.actions;
    return (
        <ReactTable
            data={props.institutions}
            columns={[
                {
                    Header: 'id',
                    accessor: 'id'
                },
                {
                    Header: 'Name',
                    accessor: 'name'
                },
                {
                    Header: 'Country',
                    accessor: 'countryName'
                },
                {
                    Header: 'Actions',
                    accessor: 'id',
                    Cell: row => {
                        const PreviewButtonAuth = userCanSeeInstitutions(() => (
                            <div>
                                <PreviewButton click={() => previewClick(row.value)} />
                            </div>
                        ));

                        const EditButtonAuth = userCanEditInstitutions(() => (
                            <div>
                                <EditButton click={() => editClick(row.value)} />
                            </div>
                        ));

                        const RemoveButtonAuth = userCanDeleteInstitutions(() => (
                            <div>
                                <RemoveButton click={() => deleteClick(row.value)} />
                            </div>
                        ));

                        return (
                            <div className="row justify-content-between">
                                <PreviewButtonAuth />
                                <EditButtonAuth />
                                <RemoveButtonAuth />
                            </div>
                        );
                    }
                }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
        />
    );
};

InstitutionsTable.defaultProps = {
    institutions: []
};

export default InstitutionsTable;
