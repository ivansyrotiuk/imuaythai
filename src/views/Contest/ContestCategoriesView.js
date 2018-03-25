import React from 'react';

import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import * as userColumns from '../../components/Users/UserColumns';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/Page/PageHeader';
import PageContent from '../../components/Page/PageContent';
import Row from '../../components/Layout/Row';

const renderContestCategory = (category, contestId) => {
    return (
        <Row key={contestId}>
            <div className="col-md-12">
                <div className="card card-accent-primary">
                    <div className="card-header">
                        <strong>
                            {category.name} <div className="pull-right">Fighters: {category.fighters.length}</div>
                        </strong>
                    </div>
                    <div className="card-block">
                        <ReactTable
                            data={category.fighters}
                            columns={[
                                userColumns.avatarColumn,
                                userColumns.userNameColumn,
                                userColumns.gymNameColumn,
                                userColumns.countryNameColumn
                            ]}
                            defaultPageSize={10}
                            className="-striped -highlight"
                        />
                        <Row className="justify-content-end p-2">
                            <Link
                                className="btn btn-secondary"
                                to={'/contests/' + contestId + '/category/' + category.id + '/draws'}
                            >
                                <i className="fa fa-sitemap" aria-hidden="true" /> Draws
                            </Link>
                            <Link
                                className="btn btn-secondary"
                                to={'/contests/' + contestId + '/category/' + category.id + '/fights'}
                            >
                                <i className="fa fa-hand-rock-o" aria-hidden="true" /> Fights
                            </Link>
                        </Row>
                    </div>
                </div>
            </div>
        </Row>
    );
};

export const ContestCategoriesView = props => {
    const mappedCategories = props.categories.map((category, index) =>
        renderContestCategory(category, props.contestId)
    );

    return (
        <Page>
            <PageHeader>
                <strong>Categories</strong>
            </PageHeader>
            <PageContent>{mappedCategories}</PageContent>
        </Page>
    );
};

export default ContestCategoriesView;
