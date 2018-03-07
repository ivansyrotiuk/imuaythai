import React, {Component} from 'react';
import {connect} from 'react-redux';
import Spinner from '../../../views/Components/Spinners/Spinner';
import {fetchInstitution, fetchInstitutionMembers, fetchInstitutionGyms} from '../../../actions/InstitutionsActions';
import FederationView from '../../../views/Institutions/FederationView';

class WorldFederationViewPageContainer extends Component {
    componentWillMount() {
        const id = this.props.match.params.id;
        this.props.fetchInstitution(id);
        this.props.fetchInstitutionMembers(id);
        this.props.fetchInstitutionGyms(id);
    }

    goToEditPageClick() {
        const continentalId = this.props.match.params.id;
        this.props.history.push('/institutions/world/edit/' + continentalId);
    }

    render() {
        const {fetching, federation, members, gyms} = this.props;

        if (fetching || !federation) {
            return (<Spinner/>);
        }

        const actions = {
            goToEditPage: this.goToEditPageClick.bind(this)
        };

        return <FederationView federation={federation} actions={actions} members={members} gyms={gyms}/>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        federation: state.SingleInstitution.institution,
        fetching: state.SingleInstitution.fetching,
        gyms: state.SingleInstitution.gyms,
        members: state.SingleInstitution.members
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchInstitution: (id) => {
            dispatch(fetchInstitution(id));
        },
        fetchInstitutionMembers: (id) => {
            dispatch(fetchInstitutionMembers(id));
        },
        fetchInstitutionGyms: (id) => {
            dispatch(fetchInstitutionGyms(id));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(WorldFederationViewPageContainer);