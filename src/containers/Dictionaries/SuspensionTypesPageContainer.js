import React, { Component } from 'react';
import { connect } from 'react-redux';
import SuspensionTypesPage from '../../views/Dictionaries/SuspensionTypes/SuspensionTypesPage';
import Spinner from '../../views/Components/Spinners/Spinner';
import { fetchTypes, deleteType } from '../../actions/Dictionaries/SuspensionTypesActions';

class SuspensionTypesPageContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchTypes();
    }

    handleAddSuspensionTypeClick() {
        this.props.history.push('/dictionaries/suspensions/new');
    }

    handleEditSuspensionTypeClick(id){
        this.props.history.push('/dictionaries/suspensions/' + id);
    }

    handleDeleteSuspensionTypeClick(id) {
        this.props.deleteType(id);
    }

    get viewActions(){
        return {
            addClick: this.handleAddSuspensionTypeClick.bind(this),
            editClick: this.handleEditSuspensionTypeClick.bind(this),
            deleteClick: this.handleDeleteSuspensionTypeClick.bind(this)
        };
    }

    render() {
        const { suspensionTypes, fetching } = this.props;
        if (fetching) {
            return <Spinner />;
        }
        return (
            <SuspensionTypesPage
                suspensionTypes={suspensionTypes}
                actions = {this.viewActions}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        suspensionTypes: state.SuspensionTypes.suspensionTypes,
        fetching: state.SuspensionTypes.fetching,
        fetched: state.SuspensionTypes.fetched
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTypes: () => {
            dispatch(fetchTypes());
        },

        deleteType: (id) => {
            dispatch(deleteType(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SuspensionTypesPageContainer);