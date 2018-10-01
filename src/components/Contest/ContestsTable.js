import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import Row from '../Layout/Row';
import ContestRemoveButtonAuth from '../../components/Contest/Buttons/ContestRemoveButtonAuth';
import ContestEditButtonAuth from '../../components/Contest/Buttons/ContestEditButtonAuth';
import PreviewButton from '../../views/Components/Buttons/PreviewButton';

const ContestsTable = props => {
    return (
        <ReactTable
            data={props.contests}
            columns={[
                {
                    id: 'avatar',
                    accessor: contest => contest,
                    maxWidth: 60,
                    Cell: row => <Avatar size={40} name={row.value.name} src={row.value.logo} round={true} />
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
                                <ContestEditButtonAuth />
                            </Link>
                            <ContestRemoveButtonAuth click={() => props.handleRemoveContestClick(row.value)} />
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
