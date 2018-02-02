import React, { Component } from 'react';
import { connect } from 'react-redux';
import StructuresPage from '../../views/Dictionaries/FightStructures/StructuresPage';
import Spinner from '../../views/Components/Spinners/Spinner';
import { fetchStructures, deleteStructure } from '../../actions/Dictionaries/StructuresActions';

class FightStructuresPageContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchStructures();
    }

    handleAddFightStructureClick() {
        this.props.history.push('/dictionaries/structures/new');
    }

    handleEditFightStructureClick(id){
        this.props.history.push('/dictionaries/structures/' + id);
    }

    handleDeleteFightStructureClick(id) {
        this.props.deleteStructure(id);
    }

    get viewActions(){
        return {
            addClick: this.handleAddFightStructureClick.bind(this),
            editClick: this.handleEditFightStructureClick.bind(this),
            deleteClick: this.handleDeleteFightStructureClick.bind(this)
        };
    }

    render() {
        const { structures, fetching } = this.props;
        if (fetching) {
            return <Spinner />;
        }
        return (
            <StructuresPage
                structures={structures}
                actions = {this.viewActions}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        structures: state.Structures.structures,
        fetching: state.Structures.fetching,
        fetched: state.Structures.fetched
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStructures: () => {
            dispatch(fetchStructures());
        },

        deleteStructure: id => {
            dispatch(deleteStructure(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FightStructuresPageContainer);