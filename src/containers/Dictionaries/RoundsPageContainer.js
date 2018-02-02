import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoundsPage from '../../views/Dictionaries/Rounds/RoundsPage';
import Spinner from '../../views/Components/Spinners/Spinner';
import { fetchRounds, deleteRound } from '../../actions/Dictionaries/RoundsActions';

class RoundsPageContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchRounds();
    }

    handleAddRoundClick() {
        this.props.history.push('/dictionaries/rounds/new');
    }

    handleEditRoundClick(id){
        this.props.history.push('/dictionaries/rounds/' + id);
    }

    handleDeleteRoundClick(id) {
        this.props.deleteRound(id);
    }

    get viewActions(){
        return {
            addClick: this.handleAddRoundClick.bind(this),
            editClick: this.handleEditRoundClick.bind(this),
            deleteClick: this.handleDeleteRoundClick.bind(this)
        };
    }

    render() {
        const { rounds, fetching } = this.props;
        if (fetching) {
            return <Spinner />;
        }
        return (
            <RoundsPage
                rounds = {rounds}
                actions = {this.viewActions}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        rounds: state.Rounds.rounds,
        fetching: state.Rounds.fetching,
        fetched: state.Rounds.fetched
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRounds: () => {
            dispatch(fetchRounds());
        },

        deleteRound: (id) => {
            dispatch(deleteRound(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoundsPageContainer);