import React, { Component } from 'react';
import { connect } from 'react-redux';
import KhanLevelsPage from '../../views/Dictionaries/KhanLevels/KhanLevelsPage';
import Spinner from '../../views/Components/Spinners/Spinner';
import { fetchLevels, deleteLevel } from '../../actions/Dictionaries/KhanLevelsActions';

class KhanLevelsPageContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchLevels();
    }

    handleAddLevelClick() {
        this.props.history.push('/dictionaries/levels/new');
    }

    handleEditLevelClick(id){
        this.props.history.push('/dictionaries/levels/' + id);
    }

    handleDeleteLevelClick(id) {
        this.props.deleteLevel(id);
    }

    get viewActions(){
        return {
            addClick: this.handleAddLevelClick.bind(this),
            editClick: this.handleEditLevelClick.bind(this),
            deleteClick: this.handleDeleteLevelClick.bind(this)
        };
    }

    render() {
        const { levels, fetching } = this.props;
        if (fetching) {
            return <Spinner />;
        }
        return (
            <KhanLevelsPage
                levels={levels}
                actions = {this.viewActions}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        levels: state.KhanLevels.levels,
        fetching: state.KhanLevels.fetching,
        fetched: state.KhanLevels.fetched
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchLevels: () => {
            dispatch(fetchLevels());
        },
  
        deleteLevel: (id) => {
            dispatch(deleteLevel(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(KhanLevelsPageContainer);