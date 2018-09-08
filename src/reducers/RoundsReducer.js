import * as actionTypes from '../actions/types/dictionaries/roundsTypes';
export default function reducer(
    state = {
        rounds: [],
        currentRound: null,
        fetching: false,
        fetched: false,
        error: null
    },
    action
) {
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
        case actionTypes.FETCH_ROUND: {
            return {
                ...state,
                fetching: true
            };
        }
        case actionTypes.FETCH_ROUND_FULFILLED: {
            return {
                ...state,
                fetching: false,
                currentRound: action.payload
            };
        }
        case actionTypes.FETCH_ROUND_REJECTED: {
            return {
                ...state,
                fetching: false,
                currentRound: null
            };
        }
        case actionTypes.ADD_ROUND: {
            return {
                ...state,
                fetching: false,
                currentRound: {}
            };
        }
        case actionTypes.CLEAR_ROUND: {
            return {
                ...state,
                currentRound: null
            };
        }
        case actionTypes.DELETE_ROUND_SUCCESS: {
            return {
                ...state,
                rounds: state.rounds.filter(t => t.id !== action.payload)
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
