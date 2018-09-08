import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoundPage from '../../views/Dictionaries/Rounds/RoundsDetailsPage';
import Spinner from '../../views/Components/Spinners/Spinner';
import { fetchRound, addRound, saveRound, clearRound } from '../../actions/Dictionaries/RoundsActions';

class RoundContainer extends Component {
    componentWillMount() {
        const { match, fetchRound, addRound } = this.props;
        const id = match.params.id;
        if (id == 'new') addRound();
        else fetchRound(id);
    }

    render() {
        const { fetching } = this.props;
        if (fetching) {
            return <Spinner />;
        }
        return <RoundPage round={this.props.round} saveRound={this.props.saveRound} />;
    }

    componentWillUnmount() {
        this.props.clearRound();
    }
}

const mapStateToProps = state => {
    return {
        round: state.Rounds.currentRound,
        fetching: state.Rounds.fetching
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addRound: () => dispatch(addRound()),
        fetchRound: id => dispatch(fetchRound(id)),
        saveRound: round => dispatch(saveRound(round)),
        clearRound: () => dispatch(clearRound())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RoundContainer);
