import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import WarningsCell from './WarningsCell';
import KnockdownsCell from './KnockdownsCell';
import InjuryCell from './InjuryCell';
import CautionsCell from './CautionsCell';

export const WarningsGrid = props => {
    const { roundsCount } = props;

    const roundsColumns = Array(roundsCount)
        .fill()
        .map((e, index) => {
            return {
                Header: 'Round ' + (index + 1),
                columns: [
                    {
                        Header: 'Cautions',
                        id: 'round',
                        accessor: d => d.rounds,
                        Cell: row => <CautionsCell points={row.value} roundId={index} />
                    },
                    {
                        Header: 'Warnings',
                        id: 'round',
                        accessor: d => d.rounds,
                        Cell: row => <WarningsCell points={row.value} roundId={index} />
                    },
                    {
                        Header: 'Knockdowns',
                        id: 'round',
                        accessor: d => d.rounds,
                        Cell: row => <KnockdownsCell points={row.value} roundId={index} />
                    },
                    {
                        Header: 'Injury',
                        id: 'round',
                        accessor: d => d.rounds,
                        Cell: row => <InjuryCell points={row.value} roundId={index} />
                    }
                ]
            };
        });

    const columns = [
        {
            Header: 'Judge',
            accessor: 'judgeName'
        },
        ...roundsColumns
    ];

    return <ReactTable data={props.points} columns={columns} defaultPageSize={5} className="-striped -highlight" />;
};

export default WarningsGrid;
