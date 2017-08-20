import React, { Component } from 'react';
import FightsDrawsView from '../../views/Fights/FightsDrawsView'
import { fetchContestDraws, generateContestDraws, regenerateContestDraws } from '../../actions/FightActions';
import { connect } from 'react-redux';
import Spinner from '../../views/Components/Spinners/Spinner'

class FightsDrawsContainer extends Component {

    componentWillMount() {
        const {contestId, categoryId} = this.props.match.params;
        this.props.fetchContestDraws(contestId, categoryId);
    }

    render() {
        const {contestId, categoryId} = this.props.match.params;
        const {fetching, draws, generating, generateContestDraws, regenerateContestDraws} = this.props;

        if (fetching) {
            return <Spinner />
        }

        return <FightsDrawsView draws={ draws } generating={ generating } generateContestDrawsClick={ generateContestDraws.bind(this, contestId, categoryId) } regenerateContestDrawsClick={ regenerateContestDraws.bind(this, contestId, categoryId) }
               />
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        draws: state.Fights.draws,
        fetching: state.Fights.fetching,
        generating: state.Fights.generating
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchContestDraws: (contestId, categoryId) => {
            dispatch(fetchContestDraws(contestId, categoryId));
        },
        generateContestDraws: (contestId, categoryId) => {
            dispatch(generateContestDraws(contestId, categoryId))
        },
        regenerateContestDraws: (contestId, categoryId) => {
            dispatch(regenerateContestDraws(contestId, categoryId))
        },
    }
}

FightsDrawsContainer = connect(mapStateToProps, mapDispatchToProps)(FightsDrawsContainer)
export default FightsDrawsContainer;