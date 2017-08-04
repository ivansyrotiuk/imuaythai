import React, { Component } from 'react';
import ContestEditForm from '../../views/Contest/ContestEditForm';
import Spinner from '../../views/Components/Spinners/Spinner';
import { connect } from 'react-redux';
import { fetchCountries } from "../../actions/CountriesActions";
import { fetchTypes } from "../../actions/Dictionaries/ContestTypesActions";
import { fetchRanges } from "../../actions/Dictionaries/ContestRangesActions";
import { fetchContestCategories } from "../../actions/Dictionaries/ContestCategoriesActions";
import { addContest, fetchContest, saveContest } from '../../actions/ContestActions';
import queryString from 'query-string'

class ContestEditContainer extends Component {

    componentWillMount() {
        var id = this.props.match.params.id;
        if (id) {
            this.props.fetchContest(id);
        } else {
            const query = queryString.parse(this.props.location.search);
            const contest = {
                date: new Date(),
                endRegistrationDate: new Date(),
                institutionId: query.institution
            }
            this.props.addContest(contest);
        }

        if (!this.props.countries.length) {
            this.props.fetchCountries();
        }
        if (!this.props.contestTypes.length) {
            this.props.fetchContestTypes();
        }
        if (!this.props.contestCategories.length) {
            this.props.fetchContestCategories();
        }
        if (!this.props.contestRanges.length) {
            this.props.fetchRanges();
        }
    }

    render() {
        const {contest, fetching, countries, contestTypes, contestRanges, contestCategories, onSubmit} = this.props;
        if (fetching) {
            return <Spinner />
        }
        return (
            <ContestEditForm initialValues={ contest } countries={ countries } contestTypes={ contestTypes } contestRanges={ contestRanges } categories={ contestCategories }
              onSubmit={ onSubmit } />
            );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        countries: state.Countries.countries,
        contestTypes: state.ContestTypes.types,
        contestCategories: state.ContestCategories.categories,
        contestRanges: state.ContestRanges.ranges,
        contest: state.Contest.singleContest,
        fetching: state.Contest.fetching
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchCountries: () => {
            dispatch(fetchCountries());
        },
        fetchContestTypes: () => {
            dispatch(fetchTypes())
        },
        fetchContestCategories: () => {
            dispatch(fetchContestCategories())
        },
        fetchRanges: () => {
            dispatch(fetchRanges())
        },
        fetchContest: (id) => {
            dispatch(fetchContest(id))
        },
        addContest: (contest) => {
            dispatch(addContest(contest))
        },
        onSubmit: (values) => {
            return dispatch(saveContest(values));
        },
    }
}

ContestEditContainer = connect(mapStateToProps, mapDispatchToProps)(ContestEditContainer)
export default ContestEditContainer;