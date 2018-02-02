import * as actionTypes from '../actions/types/dictionaries/roundsTypes';
export default function reducer(state = {
    rounds: [],
    fetching: false,
    fetched: false,
    error: null
} , action) {

    switch (action.type) {
    case actionTypes.FETCH_ROUNDS: {
        return {
            ...state,
            fetching: true
        };
    }
    case actionTypes.FETCH_ROUNDS_REJECTED: {
        return {
            ...state,
            fetching: false,
            error: action.payload
        };
    }
    case actionTypes.FETCH_ROUNDS_FULFILLED: {
        return {
            ...state,
            fetching: false,
            fetched: true,
            rounds: action.payload
        };
    }
    case actionTypes.SAVE_ROUND: {
        const round = action.payload;
        const newRounds = [...state.rounds];
        const roundToUpdate = newRounds.findIndex(t => t.id === round.id);
        if (roundToUpdate > -1) {
            newRounds[roundToUpdate] = round;
            return {
                ...state,
                rounds: newRounds
            };
        } else {
            return {
                ...state,
                rounds: [...state.rounds, round]
            };
        }
    }
    case actionTypes.DELETE_ROUND_SUCCESS: {
        return {
            ...state,
            rounds: state
                .rounds
                .filter(t => t.id !== action.payload)
        };
    }
    case actionTypes.DELETE_ROUND_REJECTED:
        return {
            ...state,
            rounds: state.rounds,
            error: action.payload
        };
    }
    return state;
}