import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-advanced';
import axios from 'axios';
import CreateUserView from '../../views/Users/CreateUserView';
import { fetchCountryGyms, fetchInstitution } from '../../actions/InstitutionsActions';
import { fetchCountries } from '../../actions/CountriesActions';
import { fetchRoles } from '../../actions/RolesActions';
import { createUser } from '../../actions/UsersActions';
import Spinner from '../../views/Components/Spinners/Spinner';

class CreateUserContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { gym: {} };
    }
    componentWillMount() {
        this.props.fetchRoles();
        this.props.fetchCountries();

        const gymId = this.props.match.params.id;
        if (gymId) {
            axios.get(`api/institutions/${gymId}`).then(response => {
                this.setState({ gym: response.data });
                this.props.fetchGyms(response.data.countryId);
            });
        }
    }

    handleCountryChange(event) {
        const countryId = event.target.value;
        this.props.fetchGyms(countryId);
    }

    render() {
        if (this.props.fetching) {
            return <Spinner />;
        }

        const user = {
            institutionId: this.props.match.params.id,
            countryId: this.state.gym.countryId
        };

        return (
            <Loader show={this.props.fetchingGyms} message={<Spinner />}>
                <CreateUserView
                    {...this.props}
                    initialValues={user}
                    countryChange={this.handleCountryChange.bind(this)}
                />
            </Loader>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        gyms: state.Institutions.countryGyms,
        countries: state.Countries.countries,
        roles: state.Roles.roles,
        fetching: state.Countries.fetching || state.Roles.fetching,
        fetchingGyms: state.Institutions.fetching
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchGyms: countryId => dispatch(fetchCountryGyms(countryId)),
        fetchGym: id => dispatch(fetchInstitution(id)),
        fetchCountries: () => dispatch(fetchCountries()),
        fetchRoles: () => dispatch(fetchRoles()),
        onSubmit: user => dispatch(createUser(user))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateUserContainer);
