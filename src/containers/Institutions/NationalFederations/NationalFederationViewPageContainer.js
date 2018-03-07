import React, {Component} from 'react';
import {connect} from 'react-redux';
import Spinner from '../../../views/Components/Spinners/Spinner';
import {fetchInstitution, fetchInstitutionMembers, fetchInstitutionGyms} from '../../../actions/InstitutionsActions';
import FederationView from '../../../views/Institutions/FederationView';

class NationalFederationViewPageContainer extends Component {
    componentWillMount() {
        const nationalId = this.props.match.params.id;
        this.props.fetchInstitution(nationalId);
        this.props.fetchInstitutionMembers(nationalId);
        this.props.fetchInstitutionGyms(nationalId);
    }

    goToEditPageClick() {
        const id = this.props.match.params.id;
        this.props.history.push('/institutions/national/edit/' + id);
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
        members: state.SingleInstitution.members,
        gyms: state.SingleInstitution.gyms,
        fetching: state.SingleInstitution.fetching
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

export default connect(mapStateToProps, mapDispatchToProps)(NationalFederationViewPageContainer);