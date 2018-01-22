import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import Row from '../Layout/Row';
import RemoveButton from '../../views/Components/Buttons/RemoveButton';
import EditButton from '../../views/Components/Buttons/EditButton';
import PreviewButton from '../../views/Components/Buttons/PreviewButton';

const ContestsTable = props => {
    return (
        <ReactTable
            data={props.contests}
            columns={[
                {
                    id: 'avatar',
                    accessor: 'name',
                    maxWidth: 60,
                    Cell: row => (
                        <Avatar
                            size={40}
                            name={row.value}
                            src="http://localhost:3000/img/contest_poster.jpg"
                            round={true}
                        />
                    )
                },
                {
                    Header: 'Name',
                    accessor: 'name'
                },
                {
                    Header: 'Actions',
                    accessor: contest => contest.id,
                    id: 'actions',
                    maxWidth: 170,
                    Cell: row => (
                        <Row className="justify-content-around">
                            <Link to={'/contests/' + row.value}>
                                <PreviewButton />
                            </Link>
                            <Link to={'/contests/' + row.value + '/edit'}>
                                <EditButton />
                            </Link>
                            <RemoveButton click={() => props.handleRemoveContestClick(row.value)} />
                        </Row>
                    )
                }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
        />
    );
};

export default ContestsTable;
