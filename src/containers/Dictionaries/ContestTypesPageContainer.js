import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContestTypesPage from '../../views/Dictionaries/ContestTypes/ContestTypesPage';
import Spinner from '../../views/Components/Spinners/Spinner';
import { fetchTypes, deleteType } from '../../actions/Dictionaries/ContestTypesActions';

class ContestTypesPageContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchTypes();
    }

    handleAddContestTypeClick() {
        this.props.history.push('/dictionaries/types/new');
    }

    handleEditContestTypeClick(id){
        this.props.history.push('/dictionaries/types/' + id);
    }

    handleDeleteContestTypeClick(id) {
        this.props.deleteType(id);
    }

    get viewActions(){
        return {
            addClick: this.handleAddContestTypeClick.bind(this),
            editClick: this.handleEditContestTypeClick.bind(this),
            deleteClick: this.handleDeleteContestTypeClick.bind(this)
        };
    }

    render() {
        const { types, fetching } = this.props;
        if (fetching) {
            return <Spinner />;
        }
        return (
            <ContestTypesPage
                types={types}
                actions = {this.viewActions}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        types: state.ContestTypes.types,
        fetching: state.ContestTypes.fetching,
        fetched: state.ContestTypes.fetched
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

export default connect(mapStateToProps, mapDispatchToProps)(ContestTypesPageContainer);